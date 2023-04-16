import style from "../style.css"
import leftArrow from "../images/arrow_back_24px.png"
import {useParams, useNavigate} from "react-router-dom";
import {useGetCharacterQuery} from "../../engine/RM";

function Character() {
    const {id} = useParams();
    const history = useNavigate()
    const {data: character, isFetching, error} = useGetCharacterQuery(id);
    if (isFetching) return <></>
    if (error) return 'An error has occured.'

    return (
        <div className="boxInformation">
            <div className="containerInformation" onClick={() => history(-1)}
                 style={{width: '100px',position: 'relative', right: '700px'}}>
                <div className="arrow">
                    <img style={{marginRight: '10px'}} alt="leftArrow" src={leftArrow}/>
                    <p style={{fontFamily: 'sans-serif' ,fontWeight: 'bold',whiteSpace: 'nowrap'}}>GO BACK</p>
                </div>
            </div>
            <div>
                {character !== null ?
                    <div>
                        <div className="containerImgCharacter">
                            <img src={character.image} className="imgCharacter"/>
                            <p style={{fontWeight: 'bold' ,fontSize:'24px',fontFamily: 'cursive'}}>{character.name}</p>
                        </div>
                        <div className="containerCharacter">
                            <p style={{textAlign: 'center',color: 'gray',fontFamily: 'sans-serif',fontSize:'24px' }}>Informations</p>
                            <div>
                                <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Gender</p>
                                <p style={{color:'gray',fontFamily:'sans-serif'}}>{character.gender}</p>
                                <hr align="center" width="500" size="2" color="lightgray"/>
                                <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Status</p>
                                <p style={{color:'gray',fontFamily:'sans-serif'}}>{character.status === 'unknown' ? 'Unknown' : character.status}</p>
                                <hr align="center" width="500" size="2" color="lightgray"/>
                                <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Specie</p>
                                <p style={{color:'gray',fontFamily:'sans-serif'}}>{character.species === 'unknown' ? 'Unknown' : character.species}</p>
                                <hr align="center" width="500" size="2" color="lightgray"/>
                                <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Origin</p>
                                <p style={{color:'gray',fontFamily:'sans-serif'}}>{character.origin.name === 'unknown' ? 'Unknown' : character.origin.name}</p>
                                <hr align="center" width="500" size="2" color="lightgray"/>
                                <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Type</p>
                                <p style={{color:'gray',fontFamily:'sans-serif'}}>{character.type === '' ? 'Unknown' : character.type}</p>
                                <hr align="center" width="500" size="2" color="lightgray"/>
                            </div>
                        </div>
                    </div> :
                    <p>Нет</p>
                }
            </div>
        </div>
    );
}

export default Character;
