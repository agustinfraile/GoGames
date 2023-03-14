import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getGameDetails } from '../../redux/actions'
import Button from '../Button/Button'
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
    }, [dispatch, id]);


    if(loader) {
        return <Loading />
    }

    let filter;
    const filterId = () => {
        if(detailGame.createInDb) {
            filter = detailGame.id
        } else {
            filter = Number(id);
        }
        return filter
    }

    function convertDateFormat(string) {
        let info = string.split('-').reverse().join('/');
        return info;
   }

   function removeTagHTML (html){
    return html.replace(/<[^>]*>/g, '');
   }

    {   
        return (
            filterId() ?
                <div className='gameDetail-cnt'>           
                    <div className='detail-cnt--general'>



                        
                        <div className='detail-cnt-img'>
                            <img src={detailGame.image} alt={`Imagen de ${detailGame.name}`} title={`Imagen de ${detailGame.name} `} width='600px'/>
                        </div>

                        <div className='detail-cnt-name'>
                            <h1>{detailGame.name}</h1>
                        </div>


                        <div className='detail-cnt-genres'>
                            <h2>Generos:</h2>

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

                        <div className='detail-cnt-description'>
                            <h2>Descripcion:</h2>
                            <p>
                                { removeTagHTML(detailGame.description) }
                            </p>
                        </div>

                        <div className='detail-cnt-released'>
                            {
                                detailGame.released ?
                                <div>

                                    <h3>
                                        Fecha de lanzamiento: 
                                    </h3>
                                    <span>
                                        {convertDateFormat(detailGame.released)}
                                    </span>
                                    
                                </div>
                                : 
                                <p>
                                    Sin datos sobre la fecha de lanzamiento del juego
                                </p>
                            }
                        </div>

                        <div className='detail-cnt-rating'>
                            {
                                detailGame.released ?
                                
                                <div>

                                    <h3>
                                        Rating: 
                                    </h3>

                                    <span>
                                        {detailGame.rating}⭐
                                    </span>

                                </div>
                                : <p>Sin datos sobre el rating del juego</p>
                            }
                        </div>

                        <div className='detail-cnt-platforms'>
                            <h3>Plataformas:</h3>
                            <div>
                                {
                                    <p>{detailGame.platforms.join(" | ")}</p>
                                }
                            </div>
                        </div>
                        
                        <Link to='/home'>
                            <Button text={'Volver'} />
                        </Link>
                    </div>
                </div>   
            :
            <Error />
        )
    }
}

export default GameDetail