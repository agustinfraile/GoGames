import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGameGenre, getGames, gamesFiteredByGenres, gamesFilteredByCreation, orderGame } from '../../redux/actions';
import AllGameCards from '../AllGameCards/AllGameCards';
import Filters from '../Filters/Filters';

import Loading from '../Loading/Loading';
import NavBar from '../NavBar/NavBar';
import Paginate from '../Paginate/Paginate';

import "./home.css";

const Home = () => {

    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.games);

    const allGenres = useSelector((state) => state.genres);

    const [currentPage, setCurrentPage] = useState(1);

    const [gamesPage, setGamesPage] = useState(15);

    const indexOfLastGame = currentPage * gamesPage;

    const indexOfFirstGame = indexOfLastGame - gamesPage;

    const currentGame = allGames.slice(indexOfFirstGame, indexOfLastGame); 


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getGameGenre());
    }, [dispatch]);

    const handleFilteredGenres = (e) => {
        dispatch(gamesFiteredByGenres(e.target.value));
    };

    const handleFilteredCreates = (e) => {
        dispatch(gamesFilteredByCreation(e.target.value));
    }

    const handleOrder = (e) => {
        e.preventDefault();
        if(e.target.value === ''){
            dispatch(getGames());
        } else {
            dispatch(orderGame(e.target.value))
            setCurrentPage(1)
        }
    }

    return (
        <div >

            <NavBar />
            
            <Filters 
                handleOrder={handleOrder} 
                handleFilteredCreates = {handleFilteredCreates}
                handleFilteredGenres = {handleFilteredGenres}
                allGenres = {allGenres}
            />

            {   
                currentGame.length ?
                <AllGameCards 
                    currentGame = {currentGame}
                /> 
                : <Loading />
            }


            <Paginate 
                gamesPage = {gamesPage} 
                allGames = {allGames.length} 
                paginate = {paginate} 
            />
        </div>
    )
}

export default Home