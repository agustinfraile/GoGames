import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getGameDetails, clearGameDetail } from '../../redux/actions'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import "./gameDetail.css"



const GameDetail = () => {
  
    const dispatch = useDispatch();
    let detailGame = useSelector(state => state.game);
    const { id } = useParams();
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        dispatch(getGameDetails(id)).then(() => setLoader(false));
        dispatch(clearGameDetail());
    }, [dispatch, id])



    if(loader) {
        return <Loading />
    }

    return (
    <div className='gameDetail-cnt'>


        {
           
            detailGame ?
            
                <div className='detail-cnt--general'>

                    <div className='detail-cnt-name'>
                        <h1>{detailGame.name}</h1>
                    </div>

                    <div className='detail-cnt-info'>
                        <div>
                            <img src={detailGame.image} alt={`Imagen de ${detailGame.name}`} title={`Imagen de ${detailGame.name} `} width='600px'/>
                        </div>

                        <div className='detail-cnt-info--desc'>
                            <div>
                                <h2>Generos:</h2>

                                <div>
                                    {
                                        <p>
                                            {   
                                                detailGame.createInDb
                                                ? detailGame.genres.map(gen => gen.name).join(" | ")
                                                : detailGame.genres.join(" | ")
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
                                        <p>{detailGame.platforms.join(" | ")}</p>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='detail-cnt-back'>
                        <Link className='detail-back-link' to='/home'>
                            <div>🔙</div>
                        </Link>
                    </div>                  
                </div>
            
            : <Error />
            
        }
    </div>
  )
}

export default GameDetail