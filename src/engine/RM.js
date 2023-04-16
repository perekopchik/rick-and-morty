import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const rmApi = createApi({
    reducerPath: 'rmApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query:(searchQuery) => {
                if(searchQuery) {
                    return `character/?name=${searchQuery}`
                }
                return `character`
            }
        }),
        getCharacter: builder.query({
            query:(id) => `character/${id}`
        }),
    })
})

export const {
    useGetCharactersQuery,
    useGetCharacterQuery
} = rmApi;