import { addTrailerId } from "../store/moviesSlice";
import { API_OPTIONS } from "../CONSTANTS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTrailerId = (id) => {
  const dispatch = useDispatch();
  const trailerResponse = async () => {
    try {
      const fetchTrailer = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );

      const response = await fetchTrailer.json();
      const trailerid =
        response.results.filter((video) => video.type === "Trailer")[0].key ||
        response[0].key;
      dispatch(addTrailerId(trailerid));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    trailerResponse();
  }, []);
};

export default useTrailerId;
