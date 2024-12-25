import {useSelector} from "react-redux";

import {useDispatch} from "react-redux"
import { removeClickedMovie } from "../utils/Slices/moviesSlice";
import MovieDetailBackgound from "./MovieDetailBackground";

const MovieDetailPage=()=>
{
    const dispatch = useDispatch()
     const clickedMovie=useSelector((store)=>store.movies.clickedMovie)
     const {backdrop_path,id,overview,title,original_language,popularity} =clickedMovie
     console.log(clickedMovie);
     const handleClose=()=>
     {
            dispatch(removeClickedMovie())
     }

    return (<>
        <div >
                 <div className="relative">
                     <MovieDetailBackgound movieId={id}/>    
                 </div>
        
                <div className="absolute text-white  z-1000 top-0 left-[265px] w-3/5 bg-gradient-to-t from-black aspect-video">
                    <button className="cursor-pointer p-4 float-right" onClick={handleClose}> x </button>
                    <div className="pt-[280px] px-10 w-full ">
                        <p  className="  font-bold text-2xl mb-3 max-sm:text-lg">{title}</p>
                        <p > {overview}</p>
                        <div className="mt-5">
                            <p> Langugage : {original_language}</p>
                            <p > Popularity:{popularity}</p>
                        </div>

                        <div className="flex mt-5">
                            <button className="bg-white rounded-lg p-3 text-black mr-3 max-sm:p-1 max-sm:text-xs"> Play</button>
                            <button className="bg-slate-600 rounded-lg p-3 mr-3 text-white max-sm:hidden"> + Watch List</button>
                            <button className="bg-slate-600 rounded-lg p-3 text-white max-sm:hidden">👍🏻 Like</button>

                        </div>


                    </div>
                
                </div>
                
        </div>
    </>
    )
}

export default MovieDetailPage