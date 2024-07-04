import React from "react";

const GptSearchBar = () => {
  return (
    <div className=" pt-[20%] flex justify-center ">
      <form
        action=""
        className="w-1/2 grid grid-cols-12"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for movies, shows, actors, directors, and genres"
          className=" p-2 border-2 border-gray-300 rounded-md m-4 col-span-9"
        />
        <button className="bg-red-700 rounded-md p-3 m-4  col-span-3 text-white text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
