import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className="p-6  text-white">
      <span className="text-2xl py-6">{title}</span>
      <div className="flex  overflow-x-auto">
        <div className="flex">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
