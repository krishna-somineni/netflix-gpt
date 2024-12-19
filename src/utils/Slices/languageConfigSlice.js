import {createSlice} from "@reduxjs/toolkit"

const languageConfigSlice=createSlice({
    name:"lang",
    initialState:{
        userLanguage:"en"
    },
    reducers:{
        addUserLanguage:(state,action)=>
        {
            state.userLanguage=action.payload
        }
    }
})
export const {addUserLanguage}=languageConfigSlice.actions
export default languageConfigSlice.reducer