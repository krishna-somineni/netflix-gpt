import { IMG_CDN_URL } from "../constants/constants"

const MovieCard=({photo_path})=>
{
    return (
        <div className=" w-36 mr-4 cursor-pointer transition-transform duration-300 hover:scale-90">
            <img className="rounded-lg" src={IMG_CDN_URL + photo_path} alt="movie-poster"></img>
        </div>
    )
}

export default MovieCard