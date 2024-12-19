const MainMovieTitle=({title,description})=>
{   
    return(
        <div className="pt-52 px-14 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
           <p  className="font-bold text-2xl mb-3">{title}</p>

           <p className="w-1/3 mb-4"> {description}</p>
           <div className="flex">
                <button className="bg-white rounded-lg p-3 text-black mr-3"> ▶️ Play</button>
                <button className="bg-slate-600 rounded-lg p-3 text-white"> ℹ️ More Details</button>
           </div>
        </div>
    )
}

export default MainMovieTitle