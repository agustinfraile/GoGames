import React, { useEffect, useState } from 'react';
import * as actions from '../../redux/actions/index';
import "./home.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games);

    useEffect(() => {
        dispatch(actions.getGames());
    }, []);

    const handleClick = () => {
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