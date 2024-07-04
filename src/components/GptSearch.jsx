import React from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utilities/CONSTANTS";

const GptSearch = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={NETFLIX_BACKGROUND_IMAGE_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
