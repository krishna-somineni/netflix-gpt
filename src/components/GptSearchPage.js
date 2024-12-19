import { NETFLIX_HOME_SCREEN_IMAGE } from "../constants/Images"
import GptSearchBar from "./GptSearchBar"
import GptSearchMovies from "./GptSearchMovies"

const GptSearchPage=()=>
{
    return (
        <> 
            <div>
                <img src={NETFLIX_HOME_SCREEN_IMAGE} alt="bg-img" className="h-screen w-full object-cover fixed -z-10"/>
            </div>
            <div >

                <GptSearchBar/>
                <GptSearchMovies/>
            </div>
        </>
    )
}

export default GptSearchPage