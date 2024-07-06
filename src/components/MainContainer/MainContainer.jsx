import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.recentMovies);
  if (!movies) return;
  const movie = movies[0];
  const { overview, original_title, id } = movie;

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoTrailer id={id} />
    </div>
  );
};

export default MainContainer;
