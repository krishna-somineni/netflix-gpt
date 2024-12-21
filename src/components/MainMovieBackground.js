import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const MainMovieBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video max-sm:aspect-square"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default MainMovieBackground;
