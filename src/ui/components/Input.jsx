import style from "../style.css"
import search from "../images/Vector.png"
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {searchCharacters} from "../../engine/features/slice";
function Input() {
    const [query,setQuery] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();

    const handleKeyPress = (event) => {
        if(event.key=== 'Enter') {
            dispatch(searchCharacters(query))
        }
    }

    if(location.pathname!=='/') return null;

    return (
        <div className="input_container">
            <img className="search" alt="search" src={search} />
            <input placeholder="Filter by name..." className="input" onKeyPress={handleKeyPress} onChange={(e)=>setQuery(e.target.value)} />
        </div>
    );
}

export default Input;
