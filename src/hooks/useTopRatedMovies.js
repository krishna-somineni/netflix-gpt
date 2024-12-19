import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies } from "../utils/Slices/moviesSlice";
import { API_OPTIONS } from "../constants/constants";
const useTopRatedMovies=()=>
{
    const dispatch=useDispatch()

    const getTopRatedMovies= async()=>
    {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=3",
            API_OPTIONS
          );
          const json = await data.json();
          dispatch( addTopRatedMovies(json.results));
    }
    useEffect(()=>
    {
        getTopRatedMovies()
    },[])
        
}

export default useTopRatedMovies