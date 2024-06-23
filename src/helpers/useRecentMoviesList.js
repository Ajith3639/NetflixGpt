import { API_OPTIONS } from "../CONSTANTS";
import { useDispatch } from "react-redux";
import {
  addRecentMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/moviesSlice";
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

  const getPopularMovies = async () => {
    try {
      const latestMovieList = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await latestMovieList.json();
      dispatch(addPopularMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      const latestMovieList = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await latestMovieList.json();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getUpcomingMovies = async () => {
    try {
      const latestMovieList = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const response = await latestMovieList.json();
      dispatch(addUpcomingMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);
};

export default useRecentMoviesList;
