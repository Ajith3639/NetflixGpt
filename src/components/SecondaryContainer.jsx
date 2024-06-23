import React from "react";
import Movieslist from "./MoviesList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const recentMovies = useSelector((state) => state.movies.recentMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  if (!recentMovies || !popularMovies || !topRatedMovies || !upcomingMovies)
    return;
  return (
    <div className=" bg-black">
      <div className="-mt-40 z-10 pl-8 relative">
        <Movieslist title="Recently added" movies={recentMovies} />
        <Movieslist title="Popular" movies={popularMovies} />
        <Movieslist title="Top rated" movies={topRatedMovies} />
        <Movieslist title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
