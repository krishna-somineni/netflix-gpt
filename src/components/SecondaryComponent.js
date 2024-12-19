import Movielist from "./Movielist"
import {useSelector} from "react-redux";

const SecondaryComponent=()=>
{
    const movies=useSelector((store)=>store.movies)
    return(
        <div className=" bg-black p-6">
            {
                movies.nowPlayingMovies        &&   
                <div className="relative -mt-56">

                  <Movielist title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
                  <Movielist title={"Popular Movies"} movies={movies.popularMovies}/>
                  <Movielist title={"Top Rated movies"} movies={movies.topRatedMovies}/>
                  <Movielist title={"Upcoming Movies"} movies={movies.upcomingMovies}/>

                  </div>

            }

        </div>
    )
}

export default SecondaryComponent