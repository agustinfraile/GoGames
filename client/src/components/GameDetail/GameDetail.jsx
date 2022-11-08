import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getGameDetails, clearGameDetail } from '../../redux/actions'
import Loading from '../Loading/Loading'
import "./gameDetail.css"



const GameDetail = () => {
  
    const dispatch = useDispatch();
    let detailGame = useSelector(state => state.game);
    const { id } = useParams();

    useEffect(() => {
        setLoader(true)
        dispatch(getGameDetails(id));
        dispatch(clearGameDetail());
    }, [dispatch, id])

    const [loader, setLoader] = useState(true);

    // if(loader) {

    //     return <Loading />
    // }

    return (
    <>
        <div>
            <Link to='/home'>
                <button>Volver al inicio</button>
            </Link>
        </div>

        {
            detailGame.name?

            <div>
                <div>
                    <h1>{detailGame.name}</h1>
                </div>

                <div>
                    <img src={detailGame.image} alt={`Imagen de ${detailGame.name}`} title={`Imagen de ${detailGame.name} `} width='600px'/>
                </div>

                <div>
                    <h2>Generos:</h2>
                        {console.log(detailGame.genres)}
                    <div>
                        {
                            <p>
                                {   
                                    detailGame.createInDb
                                    ? detailGame.genres.map(gen => gen.name)
                                    : detailGame.genres
                                }
                            </p>
                        }
                    </div>
                </div>

                <div>
                    <h2>Descripcion:</h2>
                    <p>
                        {
                            detailGame.description
                        }
                    </p>
                </div>

                <div>
                    {
                        detailGame.released ?
                        <h3>Fecha de lanzamiento: <span>{detailGame.released}</span></h3>
                        : <p>Sin datos sobre la fecha de lanzamiento del juego</p>
                    }
                </div>

                <div>
                    {
                        detailGame.released ?
                        <h3>Rating: <span>{detailGame.rating}⭐</span></h3>
                        : <p>Sin datos sobre el rating del juego</p>
                    }
                </div>

                <div>
                    <h3>Plataformas:</h3>
                    <div>
                        {
                            <p>{detailGame.platforms}</p>
                        }
                    </div>
                </div>
            </div>
        
            : <Loading />
        }
    </>
  )
}

export default GameDetail