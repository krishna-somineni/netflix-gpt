import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header"
import MainComponent from "./MainComponent"
import SecondaryComponent from "./SecondaryComponent"
import {useSelector} from "react-redux";

const Browse=()=>
{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearchKey=useSelector((store)=>store.gpt.showGptSearch)
    console.log(showGptSearchKey);
        return (
            <div>
                <Header/>
                {
                    showGptSearchKey ? <GptSearchPage/>:
                    <>
                    <MainComponent/>
                    <SecondaryComponent/>
                    </>
                }
                
            </div>
        )
}

export default Browse