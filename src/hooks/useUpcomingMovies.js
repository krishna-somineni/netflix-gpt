import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { addNowPlayingMovies, addPopularMovies, addUpcomingMovies } from "../utils/Slices/moviesSlice";
import { API_OPTIONS } from "../constants/constants";
const useUpcomingMovies=()=>
{
    const dispatch=useDispatch()

    const getUpcomingMovies= async()=>
    {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=4",
            API_OPTIONS
          );
          const json = await data.json();
          dispatch( addUpcomingMovies(json.results));
    }
    useEffect(()=>
    {
        getUpcomingMovies()
    },[])
        
}

export default useUpcomingMovies