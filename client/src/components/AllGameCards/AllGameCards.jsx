import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import GameCard from '../GameCard/GameCard';
import Loading from '../Loading/Loading';
import SearchBar from '../SearchBar/SearchBar';


import "./allGameCards.css"



const AllGameCards = ({currentGame, allGames, isLoading}) => {
    

  return (
    <div className='allGames'>
        {isLoading ? <Loading /> : null}
        <div className='allGames-cnt'>
            {
                currentGame.length > 0 ? (
                    currentGame?.map( game => {
                        return (
                            <Link 
                                className='allGames-cnt--link'
                                to={`/game/${game.id}`}
                                key = {game.id}
                            >
                                <GameCard
                                    id = {game.id} 
                                    key = {game.id}
                                    name = {game.name}
                                    image = {game.image}
                                    genres = {game.genres}
                                    rating = {game.rating}
                                    createInDb = {game.createInDb}
                                />
                            </Link>
                        )
                    })
                ) : (
                    <p>No hay juegos disponibles</p>
                )

            }   
        </div>
    </div>
  )
}

export default AllGameCards