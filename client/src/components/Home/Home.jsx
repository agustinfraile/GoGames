import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameGenre, getGames } from '../../redux/actions';
import GameCard from '../GameCard/GameCard'
import Paginate from '../Paginate/Paginate';
import SelectGenres from '../SelectGenres/SelectGenres';
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

    return (
        <div>
            
            <Paginate 
                gamesPage = {gamesPage} 
                allGames = {allGames.length} 
                paginate = {paginate} 
            />

            <select>
                <option selected disabled value="">Ordenar segun...</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Mejor Rating">Mejor Rating</option>
                <option value="Peor Rating">Peor Rating</option>
            </select>

            <select>
                <option value="Todos">Todos los juegos</option>
                <option value="Creados">Creados</option>
                <option value="API">Juegos de la API</option>
            </select>

            <select>
                <option selected disabled value="">Generos</option>
                <SelectGenres allGenres = {allGenres} />
            </select>


            {
                currentGame?.map( game => {
                    return (
                        <GameCard
                            id = {game.id} 
                            key = {game.id}
                            name = {game.name}
                            image = {game.image}
                            genres = {game.genres}
                            rating = {game.rating}
                        />
                    )
                })
            }

        </div>
    )
}

export default Home