import React, { useEffect, useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import {postGame, getGameGenre, getGames} from "../../redux/actions/index";
import {useDispatch, useSelector} from "react-redux";
import "./createGame.css"


const CreateGame = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(state => state.genres);
  const games = useSelector(state => state.games);
  const [range, setRange] = useState(5) 

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
    image: "",
  });

  const arrSet = [];

  games.map(games => games.platforms?.map(platfs => arrSet.push(platfs)))
  let newSet = [...new Set(arrSet)]

  useEffect(() => {
    dispatch(getGameGenre())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
      rating: range
    })
    console.log(input)
  };

  const handleSelectGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value]
    });
  };

  const handleSelectGenresDelete = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter(gen => gen !== e)
    })
  }

  const handleSelectPlatforms = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value]
    });
    console.log(input)
  };

  const handleSelectPlatformsDelete = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter(plat => plat !== e)
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();


    dispatch(postGame(input));
    // SACAR EL ALERT ES SOLO PRUEBA!!!!!!
    alert("VideoGame creado con exito");

    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      genres: [],
      platforms: [],
      image: "",
    });

    history.push('/home');
  }
  

  return (
    <div>
      <Link to="/home">
        <button>Volver al inicio</button>
      </Link>

      <h1>Crear videojuego</h1>

      <form onSubmit={e => handleFormSubmit(e)}>
        <label htmlFor='name'>Nombre:</label>
        <input 
          type='text'
          value={input.name}
          name='name'
          placeholder='Nombre del videojuego'
          maxLength='155'
          required
          onChange={e => handleChange(e)}
        />

        <label>Fecha de lanzamiento:</label>
        <input 
          type='date' 
          value={input.released}
          name='released'
          required
          autoComplete='off'
          onChange={e => handleChange(e)}
        />

        <label>Puntaje: {`${range}`}</label>
        <input
          type='range' 
          value={range}
          min='1'
          max='5'
          step='0.1'
          onChange={e=>setRange(e.target.value)}
        />

        <label>Descripcion</label>
        <textarea 
          name="description"
          value={input.description}
          placeholder='Escribe aqui una descripcion del juego'
          maxLength='600'
          required
          onChange={e => handleChange(e)}
        />

        <label>Generos</label>
        <select onChange={e => handleSelectGenres(e)}>
          <option value="generos">Generos</option>
          {
            genres.map( genre => (
              <option
                key={genre.id}
                value={genre.name}
              >
                {genre.name}
              </option>
            ))
          }
        </select>
        {
          input.genres.map(e =>
            <div key={e}>
                <p onClick={()=> handleSelectGenresDelete(e)}>{e}</p>
            </div>
          )
        }

        <label>Plataformas</label>
        <select onChange={e => handleSelectPlatforms(e)}>
          <option value="platforms">Plataformas</option>
          {
            newSet.map(plat => (
              <option
                key={plat}
                value={plat}
              >
                {plat}
              </option>
            ))
          }
        </select>
        {
          input.platforms.map(e =>
            <div key={e}>
                <p onClick={()=> handleSelectPlatformsDelete(e)}>{e}</p>
            </div>
          )
        }

        <label>Imagen</label>
        <input 
          value={input.image}
          type="url" 
          name="image" 
          placeholder='Agrega tu imagen'
          onChange={e => handleChange(e)}
        />

        <button type='submit'>Crear videojuego</button>
      </form>
       
    </div>
  )
}

export default CreateGame