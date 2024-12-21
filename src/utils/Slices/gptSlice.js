import {createSlice } from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState :{
        showGptSearch:false,
        gptMovies:null
    },
    reducers:{
        toggleShowGptSearch:(state)=>
        {
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovies:(state,action)=>
        {
            state.gptMovies=action.payload
        }
    }
})
export const {toggleShowGptSearch ,addGptMovies}=gptSlice.actions
export default gptSlice.reducer