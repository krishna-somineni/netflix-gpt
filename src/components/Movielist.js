import { addClickedMovie } from "../utils/Slices/moviesSlice";
import MovieCard from "./MovieCard"
import {useDispatch} from "react-redux"

const Movielist = ({ title, movies ,from ,type}) => {
  const dispatch=useDispatch();

    const  handleMovieClick=(movie)=>
    {
      console.log((movie["media_type"]==="person"));
      if ((movie["media_type"]==="person")) return
      dispatch(addClickedMovie(movie));
    }
    return (
      <div className="px-6 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className={`flex ${from === "gpt" ? "flex-wrap gap-y-4" : null}`}>
                    {movies?.map((movie) => (
                    <MovieCard type={type} key={movie.id} photo_path={movie.poster_path} profile_path={movie.profile_path} handleMovieClick={()=>handleMovieClick(movie)}/>
                    ))}
                </div>
        </div>
      </div>
    );
  };
export default Movielist