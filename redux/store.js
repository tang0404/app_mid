import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./likeSlice";

export const store = configureStore({
    reducer:{
        like: likeSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;