import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./Slices/userSlice";
import moviesSlice from "./Slices/moviesSlice";
import gptSlice from "./Slices/gptSlice";
import languageConfigSlice from "./Slices/languageConfigSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        languageConfig:languageConfigSlice
    }
});

export default appStore