import style from "../style.css"
import {Link} from "react-router-dom";
import { useGetCharactersQuery} from "../../engine/RM";
import {useSelector} from "react-redux";

function Characters() {

    const { searchQuery} = useSelector((state)=>state.characters);
    const {data, isFetching,error} = useGetCharactersQuery(searchQuery);
    if(isFetching) return <></>

    const characters  = [...data?.results];
    characters.sort((a, b) => a.name.localeCompare(b.name));

    if(error) return (
        <div style={{textAlign: 'center',fontFamily:'sans-serif',fontWeight:'bold'}}>No characters that match that name.
            <br/>
            Please search for something else.
        </div>
    )

    return (
        <div className="container">
            <div className="box">
                {characters.map((character) => (
                    <div key={character.id} id={character.id} className="character" >
                        <Link to={`/character/${character.id}`}>
                        <img className="img_character" alt={character.name} src={character.image}/>
                        <div id={character.id} >
                            <p className="text_character">{character.name}</p>
                            <p className="human">{character.species}</p>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Characters;
