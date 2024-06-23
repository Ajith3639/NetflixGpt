import React from "react";
import Movieslist from "./MoviesList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies.recentMovies);
  if (!movies) return;
  return (
    <div className=" bg-black">
      <div className="-mt-40 z-10 relative">
        <Movieslist title="Recently added" movies={movies} />
        <Movieslist title="Popular" movies={movies} />
        <Movieslist title="Top rated" movies={movies} />
        <Movieslist title="Upcoming" movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
