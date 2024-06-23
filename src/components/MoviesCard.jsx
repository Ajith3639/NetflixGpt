import React from "react";

const MoviesCard = ({ movie }) => {
  const movieURL = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
  return (
    <div className="w-48 pr-4">
      <img src={movieURL} alt={movie.original_title} />
    </div>
  );
};

export default MoviesCard;
