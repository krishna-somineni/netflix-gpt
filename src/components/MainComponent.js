
import MainMovieBackground from "./MainMovieBackground"
import MainMovieTitle from "./MainMovieTitle"
import {useSelector} from "react-redux"

const MainComponent=()=>
{
    const movies= useSelector((store)=>store.movies.nowPlayingMovies)
    if (!movies) return ;
    
    const mainMovie=movies[0]

  const { original_title, overview, id } = mainMovie;


    return(
        <div>
            <MainMovieTitle title={original_title} description={overview} />
            <MainMovieBackground movieId={id}/>
        </div>
    )
}

export default MainComponent