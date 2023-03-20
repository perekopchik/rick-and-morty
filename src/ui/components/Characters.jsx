import axios from "axios";
import style from "../style.css"
import {useDispatch, useSelector} from "react-redux";
import {addCharacters} from "../../engine/characters/thunk/addCharacters";
import {useEffect} from "react";
import {charactersSelectors} from "../../engine/characters/selectors";
import Information from "../pages/Information";

function Characters() {
    const dispatch = useDispatch();
    const onClick = function (e){
        console.log(e.target.closest('div').id);

    }
    useEffect(() => {
        const response = axios.get('https://rickandmortyapi.com/api/character')
        response.then((res) => dispatch(addCharacters(res.data.results)));
    }, []);
    const characters = useSelector(charactersSelectors.items);
    return (
        <div className="container">
            <div className="box">
                {characters.map((character) => (
                    <div key={character.id} id={character.id} className="character" onClick={onClick} >
                        <img className="img_character" alt={character.name} src={character.image}/>
                        <div id={character.id} >
                            <p className="text_character">{character.name}</p>
                            <p className="human">{character.species}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;
