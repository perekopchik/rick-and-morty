import {setItem} from "../slice";


export const addCharacters = (character) => (dispatch) =>{
    dispatch(setItem(character));
}