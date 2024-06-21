import { API_OPTIONS } from "../CONSTANTS";
import { useDispatch } from "react-redux";
import { addRecentMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useRecentMoviesList = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const latestMovieList = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const response = await latestMovieList.json();
      dispatch(addRecentMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useRecentMoviesList;
