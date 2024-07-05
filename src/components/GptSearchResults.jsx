import React from "react";

const GptSearchResults = ({
  movieName,
  movieDesc,
  posterPath,
  originalTitle,
}) => {
  const movieURL = `https://image.tmdb.org/t/p/w400${posterPath}`;

  return (
    <div className="w-full pb-4  bg-black ">
      <div className="opacity-80 grid grid-cols-12 text-white h-32  items-center justify-items-center	border-b-2 border-white">
        <div className="col-span-2 p-1  ">{movieName}</div>
        <div className="col-span-6 overflow-auto p-2 h-full">{movieDesc} </div>
        <div className="col-span-4 p-1 w-20">
          <img
            className="shadow-lg shadow-black-500/50 rounded-md"
            src={movieURL}
            alt={originalTitle}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default GptSearchResults;
