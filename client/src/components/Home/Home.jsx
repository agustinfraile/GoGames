import React, { useEffect, useState } from 'react';

import "./home.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getGames } from '../../redux/actions';

const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games);

    useEffect(() => {
        dispatch(getGames());
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getGames());
    }

    return (
        <div>
            <Link to='/home'>
                Crear juego
            </Link>
            <h1>Titulo de la pagina</h1>
            <button onClick={handleClick}>
                Cargar personajes
            </button>
        </div>
    )
}

export default Home