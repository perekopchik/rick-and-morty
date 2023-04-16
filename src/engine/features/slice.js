import {createSlice} from "@reduxjs/toolkit";

const characters = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        searchQuery: '',
    },
    reducers: {
        searchCharacters: (state,action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const {searchCharacters}= characters.actions;
export const charactersReducer= characters.reducer;