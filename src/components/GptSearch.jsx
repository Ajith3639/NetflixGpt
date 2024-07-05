import React, { useEffect } from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_IMAGE_URL } from "../utilities/CONSTANTS";
import { useDispatch } from "react-redux";
import { removeSearchResults } from "../store/moviesSlice";

const GptSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeSearchResults());
  }, []);
  return (
    <div>
      <Header />
      <div className="fixed -z-10">
        <img src={NETFLIX_BACKGROUND_IMAGE_URL} alt="background" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
