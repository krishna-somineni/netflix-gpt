import { IMG_CDN_URL } from "../constants/constants"



const MovieCard=({photo_path,profile_path,type,handleMovieClick})=>
{  
    const MovieClick=()=>
    {
        handleMovieClick()
    }
 
    let image_url;
    if(type==="actors")
    {
        if (!profile_path) return;
        image_url=profile_path
    }
    if(type==="movies")
    {
        if (!photo_path) return;
        image_url=photo_path
    }

    return (
        <>
            <div className=" w-36 mr-4 cursor-pointer transition-transform duration-300 hover:scale-90">
                <img className="rounded-lg" src={IMG_CDN_URL + image_url} alt="movie-poster" onClick={MovieClick}></img>
            </div>
         
        </>
    )
}

export default MovieCard