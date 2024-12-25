import { useEffect } from "react";
import { addDetailTrailerVideo, addTrailerVideo } from "../utils/Slices/moviesSlice";
import { API_OPTIONS } from "../constants/constants";
import {useDispatch} from "react-redux"

const useTrailerVideo=(movieId,page)=>
{
    const dispatch=useDispatch()
        const getTrailerVideo=async()=>
        {
            const data = await fetch(
                  "https://api.themoviedb.org/3/movie/" +
                    movieId +
                    "/videos?language=en-US",
                  API_OPTIONS
                );
            const json=await data.json();
            const filterData=json.results.filter((video)=>video.type==="Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            if (page==="home") dispatch(addTrailerVideo(trailer));
            if  (page==="detail") dispatch(addDetailTrailerVideo(trailer))
        }
    useEffect(()=>
    {
            getTrailerVideo()
    },[])
}

export default useTrailerVideo