import {useSelector} from "react-redux";
import lang from "../constants/language";
import { useRef } from "react";
import { API_OPTIONS } from "../constants/constants";
import { useDispatch} from "react-redux"
import { addGptMovies } from "../utils/Slices/gptSlice";

const GptSearchBar=()=>
{
    const dispatch=useDispatch()
    const gptSearchValue=useRef()
    const langKey=useSelector((store)=>store.languageConfig.userLanguage)
    const handleGptSearch= async()=>
    {
        const data= await fetch("https://api.themoviedb.org/3/search/multi?query="+gptSearchValue.current.value+"&page=1",API_OPTIONS)
        const json= await data.json()
        dispatch(addGptMovies(json.results))
    }
    return (
        <>
        <div className="pt-[15%] flex justify-center ">
            <form className="w-[50%] grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}> 
                <input ref={gptSearchValue} type="text" className="p-2 col-span-9 rounded-l-lg focus:outline-none" placeholder={lang[langKey].GPT_INPUT_PLACEHOLDER}></input>
                <button className="col-span-3 text-white bg-red-600 rounded-r-lg" onClick={handleGptSearch}>{lang[langKey].SEARCH}</button>
            </form>

        </div>
        </>
    )
}

export default GptSearchBar