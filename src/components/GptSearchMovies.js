import {useSelector} from "react-redux";
import Movielist from "./Movielist";
const GptSearchMovies=()=>
{
    const gptMovies=useSelector((store)=>store.gpt.gptMovies)
    const actorsNameSearch=gptMovies?.flatMap((item) => item.known_for || []);
    const movieSearch = gptMovies?.filter((item) => !item.known_for);

    const actors= gptMovies?.filter((item) => item.known_for);

    let combinedSearch=[];
    if (actorsNameSearch?.length > 0) {
        combinedSearch.push(...actorsNameSearch);
      } 
      if (movieSearch?.length > 0) {
        combinedSearch.push(...movieSearch);
      }
   
      const uniqueData = Array.from(
        new Map(combinedSearch.map((item) => [item.id, item])).values()
      ); 
    return (
        <>
        <div className="bg-black mx-4 p-4 rounded-lg bg-opacity-55 my-24">
            { actors && <Movielist title={"Actors"} movies={actors} from="gpt" type="actors"></Movielist>}

            <Movielist title={"Results"} movies={uniqueData} from="gpt"  type="movies"></Movielist>

        </div>
        </>
    )
}

export default GptSearchMovies