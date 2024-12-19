import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./Slices/userSlice";
import moviesSlice from "./Slices/moviesSlice";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice
    }
});

export default appStore