import {useSelector} from "react-redux";
import lang from "../constants/language";
const GptSearchBar=()=>
{

    const langKey=useSelector((store)=>store.languageConfig.userLanguage)
    console.log(langKey);
    return (
        <>
        <div className="pt-[15%] flex justify-center ">
            <form className="w-[50%] grid grid-cols-12"> 
                <input type="text" className="p-2 col-span-9 rounded-l-lg focus:outline-none" placeholder={lang[langKey].GPT_INPUT_PLACEHOLDER}></input>
                <button className="col-span-3 text-white bg-red-600 rounded-r-lg">{lang[langKey].SEARCH}</button>
            </form>

        </div>
        </>
    )
}

export default GptSearchBar