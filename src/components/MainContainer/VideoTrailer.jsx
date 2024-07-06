import React from "react";

import { useSelector } from "react-redux";
import useTrailerId from "../../helpers/useTrailerId";

const VideoTrailer = ({ id }) => {
  useTrailerId(id);
  const trailerId = useSelector((state) => state.movies?.trailerId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&modestbranding=1&playlist=${trailerId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
