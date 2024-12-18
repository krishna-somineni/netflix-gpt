import MovieCard from "./MovieCard"

const Movielist = ({ title, movies }) => {
    return (
      <div className="px-6 ">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {movies?.map((movie) => (
                    <MovieCard key={movie.id} photo_path={movie.poster_path} />
                    ))}
                </div>
        </div>
      </div>
    );
  };
export default Movielist