import { NETFLIX_HOME_SCREEN_IMAGE } from "../constants/Images"
import GptSearchBar from "./GptSearchBar"
import GptSearchMovies from "./GptSearchMovies";
import {useSelector} from "react-redux"

const GptSearchPage=()=>
{
    const gptMovies=useSelector((store)=>store.gpt.gptMovies)

    return (
        <> 
            <div>
                <img src={NETFLIX_HOME_SCREEN_IMAGE} alt="bg-img" className="h-screen w-full object-cover fixed -z-10"/>
            </div>
            <div >

                <GptSearchBar/>
                {gptMovies && <GptSearchMovies/>}
                
            </div>
        </>
    )
}

export default GptSearchPage