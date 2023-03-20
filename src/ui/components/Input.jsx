import style from "../style.css"
import search from "../images/Vector.png"
function Input() {
    return (
        <div className="input_container">
            <img className="search" alt="search" src={search} />
            <input className="input"/>
        </div>
    );
}

export default Input;
