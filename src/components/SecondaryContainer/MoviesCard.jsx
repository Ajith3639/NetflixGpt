import React from "react";

const MoviesCard = ({ posterPath, originalTitle }) => {
  const movieURL = `https://image.tmdb.org/t/p/w400${posterPath}`;
  return (
    <div className="w-48 pr-4 pt-4 ">
      <img
        className="shadow-lg shadow-black-500/50 rounded-md"
        src={movieURL}
        alt={originalTitle}
      />
    </div>
  );
};

export default MoviesCard;
