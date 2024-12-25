import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header"
import MainComponent from "./MainComponent"
import SecondaryComponent from "./SecondaryComponent"
import {useSelector} from "react-redux";
import MovieDetailPage from "./MovieDetailPage";

const Browse=()=>
{
    const clickedMovie=useSelector((store)=>store.movies.clickedMovie)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearchKey=useSelector((store)=>store.gpt.showGptSearch)
        return (
            <div >
                <Header/>
                {
                    showGptSearchKey ?<> <GptSearchPage/>  {
                        clickedMovie && (
                        <div className="fixed z-[1000] bg-black bg-opacity-40 text-white top-0 left-0 w-full h-screen flex justify-center items-center">
                            <div className="w-3/5 bg-black text-white rounded-lg p-6  h-screen">
                                <MovieDetailPage />
                            </div>
                        </div>
                        
                        )
                    }</>:
                    <>
                    <div className="relative">
                        <MainComponent />
                        <SecondaryComponent />
                    </div>
                    {
                        clickedMovie && (
                        <div className="fixed z-[1000] bg-black bg-opacity-40 text-white top-0 left-0 w-full h-screen flex justify-center items-center">
                            <div className="w-3/5 bg-black text-white rounded-lg p-6  h-screen">
                                <MovieDetailPage />
                            </div>
                        </div>
                        
                        )
                    }
                </>
                
                }
                
            </div>
        )
}

export default Browse