import {createSlice} from "@reduxjs/toolkit";

const characters = createSlice({
    name: 'characters',
    initialState: {
        items: [],
    },
    reducers: {
        setItem: (state,action)=>{
            const { payload } = action;
            state.items = payload;
        }
    }
})

export const {setItem}= characters.actions;
export const charactersReducer= characters.reducer;