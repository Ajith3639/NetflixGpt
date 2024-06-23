import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[25%] px-12 text-white bg-gradient-to-r from-black">
      <div className="text-5xl font-bold">{original_title}</div>
      <div className="w-1/3 text-lg py-4">{overview}</div>
      <button className=" text-md bg-white text-black px-8 py-2 bg-opacity rounded-md mr-4 hover:opacity-80">
        {" "}
        ▶️ Play{" "}
      </button>
      <button className=" text-md bg-button-grey px-8 py-2  bg-opacity rounded-md hover:opacity-80">
        {" "}
        Learn more
      </button>
    </div>
  );
};

export default VideoTitle;
