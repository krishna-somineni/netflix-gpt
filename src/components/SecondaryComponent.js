import Movielist from "./Movielist"
import {useSelector} from "react-redux";

const SecondaryComponent=()=>
{
    const movies=useSelector((store)=>store.movies)
    return(
        <div className=" bg-black p-6">
            {
                movies.nowPlayingMovies        &&   
                <div className="relative -mt-56 max-sm:-mt-20">

                  <Movielist title={"Now Playing Movies"} type="movies" movies={movies.nowPlayingMovies}/>
                  <Movielist title={"Popular Movies"} type="movies" movies={movies.popularMovies}/>
                  <Movielist title={"Top Rated movies"} type="movies" movies={movies.topRatedMovies}/>
                  <Movielist title={"Upcoming Movies"} type="movies"  movies={movies.upcomingMovies}/>

                  </div>

            }

        </div>
    )
}

export default SecondaryComponent