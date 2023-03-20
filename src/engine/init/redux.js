import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "../characters/slice";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        characters: charactersReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        thunk
    ]
})