import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "../features/slice";
import {rmApi} from "../RM";
export const store = configureStore({
    reducer: {
        [rmApi.reducerPath]: rmApi.reducer,
        characters: charactersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rmApi.middleware)
})