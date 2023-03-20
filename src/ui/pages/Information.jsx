import style from "../style.css"
import leftArrow from "../images/arrow_back_24px.png"
import {useSelector} from "react-redux";
import {charactersSelectors} from "../../engine/characters/selectors";
import {useEffect} from "react";

function Information() {
    const characters = useSelector(charactersSelectors.items);
    useEffect(()=>{
        console.log(characters);
    },[])

    return (
        <div className="boxInformation">
            <div className="containerInformation">
                <div className="arrow">
                    <img alt="leftArrow" src={leftArrow}/>
                    <p>GO BACK</p>
                </div>
            </div>
            <div>
                <img />
            </div>
        </div>
    );
}

export default Information;
