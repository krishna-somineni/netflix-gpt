import {createSlice} from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies:null,
            topRatedMovies:null,
            upcomingMovies:null,
            clickedMovie:null,
            detailTrailerVideo:null
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>
            {
                state.nowPlayingMovies=action.payload
            },
            addPopularMovies:(state,action)=>
            {
                state.popularMovies=action.payload
            },
            addTopRatedMovies:(state,action)=>
            {
                state.topRatedMovies=action.payload
            },
            addUpcomingMovies:(state,action)=>
            {
                state.upcomingMovies=action.payload
            },
            addTrailerVideo:(state,action)=>
            {
                state.trailerVideo=action.payload
            },
            addDetailTrailerVideo:(state,action)=>
            {
                state.detailTrailerVideo=action.payload
            },
            addClickedMovie:(state,action)=>
            {
                state.clickedMovie=action.payload
            },
            removeClickedMovie:(state)=>
            {
                    state.clickedMovie=null;
            }
        }
    }
)
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addDetailTrailerVideo,addUpcomingMovies,addClickedMovie,removeClickedMovie} =moviesSlice.actions
export default moviesSlice.reducer