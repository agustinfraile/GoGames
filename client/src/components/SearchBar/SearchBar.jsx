import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGameName, GET_GAME_NAME } from '../../redux/actions'
import "./searchBar.css"

const SearchBar = () => {
  
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    };
  
    const handleButtonSubmit = (e) => {
        e.preventDefault();
        dispatch(getGameName(name));
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Buscar videojuego...'
                onChange={e => handleInputChange(e)}
            />
            <button 
                type='submit'
                onClick={e => handleButtonSubmit(e)}
            >
                Buscar
            </button>
        </div>
    )
}

export default SearchBar