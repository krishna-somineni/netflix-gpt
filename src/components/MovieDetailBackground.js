import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const MovieDetailBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.detailTrailerVideo);
  useTrailerVideo(movieId,"detail");
  return (
    <div>
      <iframe
        className="w-full aspect-video max-sm:aspect-square"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MovieDetailBackground;
