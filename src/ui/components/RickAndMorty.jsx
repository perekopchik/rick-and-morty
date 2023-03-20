import style from "../style.css"
import rick from "../images/rickAndMorty.png";
function RickAndMorty() {
    return (
        <div className="img">
            <img alt="rickAndMorty" src={rick}/>
        </div>
    );
}

export default RickAndMorty;
