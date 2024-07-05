import React, { useRef } from "react";
import { openai } from "../openai.config";
import { API_OPTIONS } from "../CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchResults,
  removeSearchResults,
  setLoader,
} from "../store/moviesSlice";
import GptSearchResults from "./GptSearchResults";
const GptSearchBar = () => {
  const searchText = useRef("");
  const searchResultMovies = useSelector((state) => state.movies.searchresults);
  const displayLoader = useSelector((state) => state.movies.showLoader);
  const dispatch = useDispatch();
  const searchMovies = async (movie) => {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await movieResponse.json();
    return data.results[0];
  };

  const handleSearchClick = async () => {
    dispatch(removeSearchResults());
    dispatch(setLoader(true));
    const query =
      "Imagine you are a movie recomendation system. You have to recommend a movie to a user based on the user's search query. The user's search query is: " +
      searchText.current.value +
      ".Return 5 comma seperated movie names only. For example: 'movie1, movie2, movie3, movie4, movie5' and dont need to give numbering. Also if query is not related to movies then just sent : invalid";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const movieNames = chatCompletion?.choices[0]?.message.content.split(",");
    if (movieNames[0] === "invalid") {
      return;
    }
    const movieData = movieNames.map((movie) => searchMovies(movie));
    const resolvedPromise = await Promise.all(movieData);
    dispatch(addSearchResults(resolvedPromise));
    dispatch(setLoader(false));
  };

  return (
    <div className=" pt-[20%] flex justify-center ">
      <form
        action=""
        className="w-3/4 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="m-4 col-span-9 my-5">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for movies, shows, actors, directors, and genres"
            ref={searchText}
            className="w-full  p-2 border-2 border-gray-300 rounded-t-md   "
          />
          {searchResultMovies &&
            searchResultMovies.map(
              (movie) =>
                movie && (
                  <GptSearchResults
                    movieName={movie["original_title"]}
                    movieDesc={movie.overview}
                    posterPath={movie.poster_path}
                    originalTitle={movie.original_title}
                  />
                )
            )}
        </div>

        <button
          className="bg-red-700 rounded-md py-2 px-4 col-span-3 text-white text-xl h-11 hover:bg-red-900 mt-5 mb-5 flex justify-center items-center space-x-2"
          onClick={handleSearchClick}
        >
          <span>Search</span>
          {displayLoader && (
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-2 h-6 w-6"></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
