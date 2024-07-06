import { API_OPTIONS } from "../utilities/CONSTANTS";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecentMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/moviesSlice";
import { useEffect } from "react";

const useRecentMoviesList = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movies.recentMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const getNowPlayingMovies = async () => {
    try {
      const nowPlayingMovies = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const response = await nowPlayingMovies.json();
      dispatch(addRecentMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularMovies = async () => {
    try {
      const popularMovies = await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1",
        API_OPTIONS
      );
      const response = await popularMovies.json();
      dispatch(addPopularMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      const topRatedMovies = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS
      );
      const response = await topRatedMovies.json();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getUpcomingMovies = async () => {
    try {
      const upcomingMovies = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        API_OPTIONS
      );
      const response = await upcomingMovies.json();
      dispatch(addUpcomingMovies(response.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    nowPlayingMovies && getNowPlayingMovies();
    popularMovies && getPopularMovies();
    topRatedMovies && getTopRatedMovies();
    upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useRecentMoviesList;
