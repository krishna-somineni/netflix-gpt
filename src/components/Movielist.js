import MovieCard from "./MovieCard"

const Movielist = ({ title, movies ,from ,type}) => {
    return (
      <div className="px-6 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className={`flex ${from === "gpt" ? "flex-wrap gap-y-4" : null}`}>
                    {movies?.map((movie) => (
                    <MovieCard type={type} key={movie.id} photo_path={movie.poster_path} profile_path={movie.profile_path}/>
                    ))}
                </div>
        </div>
      </div>
    );
  };
export default Movielist