import React, { useEffect, useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import {postGame, getGameGenre, getGames} from "../../redux/actions/index";
import {useDispatch, useSelector} from "react-redux";
import "./createGame.css";

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



  const validateInputs = (input) => {
    // let regularExpRating = /[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/; 
    let regularExpNameDescription = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9-()]+$/;
    let errorInput = {};
  
    if(!input.name) {
      errorInput.name = "El nombre es obligatorio";
    } else if(!regularExpNameDescription.test(input.name)){ 
      errorInput.name = "Solo es valido usar letras (incluida la ñ-ü y acentos), numeros, guiones medios y parentesis"
    } else if(!input.description) {
      errorInput.description = "La descripcion es obligatoria"
    } else if(!regularExpNameDescription.test(input.description)) {
      errorInput.description = "Solo es valido usar letras (incluida la ñ-ü y acentos), numeros, guiones medios y parentesis"
    }
    
    return errorInput; 
  }


  const [errorIn, setErrorIn] = useState({});
  console.log(errorIn)
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
    });
    setErrorIn(validateInputs({
      ...input,
      [e.target.name]:[e.target.value]
    }))
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

    const nameRepeat = games.filter(game => game.name === input.name);
    if(nameRepeat.length !== 0) {
      // TODO: SACAR EL ALERT ES SOLO PRUEBA!!!!!!
      alert('Ya existe un juego con ese nombre, por favor elija otro')
      return
    } else {
      let resultError = Object.keys(validateInputs(input));
      if(resultError.length !== 0 || !input.genres.length || !input.platforms.length) {
        alert('Lleno los campos correctamente');
        return
      } else {
        dispatch(postGame(input));

    
        setInput({
          name: "",
          description: "",
          released: "",
          rating: "",
          genres: [],
          platforms: [],
          image: "",
        });

        // TODO: SACAR EL ALERT ES SOLO PRUEBA!!!!!!
        alert("VideoGame creado con exito");
      }

  
      history.push('/home');
    }

  }
  

  return (
    <div>
      <Link to="/home">
        <button>Volver al inicio</button>
      </Link>

      <h1>Crear videojuego</h1>

      <form onSubmit={e => handleFormSubmit(e)}>
        <div>
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
          {
            errorIn.name && (
              <p>{errorIn.name}</p>
            )
          }
        </div>

        <div>
          <label>Fecha de lanzamiento:</label>
          <input 
            type='date' 
            value={input.released}
            name='released'
            required
            autoComplete='off'
            onChange={e => handleChange(e)}
          />
        </div>

        <div>
          <label>Puntaje: {`${range}`}</label>
          <input
            type='range' 
            value={range}
            min='0'
            max='5'
            step='0.1'
            onChange={e=>setRange(e.target.value)}
          />
        </div>
        
        <div>
          <label>Descripcion</label>
          <textarea 
            name="description"
            value={input.description}
            placeholder='Escribe aqui una descripcion del juego'
            maxLength='401'
            required
            onChange={e => handleChange(e)}
          />
          {
            errorIn.description && (
              <p>{errorIn.description}</p>
            )
          }
        </div>

        <div>
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
                  <button onClick={()=> handleSelectGenresDelete(e)}>X</button>
                  <span>{e}</span>
              </div>
            )
          }
        </div>
        
        <div>
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
                  <button onClick={()=> handleSelectPlatformsDelete(e)}>X</button>
                  <span>{e}</span>
              </div>
            )
          }
        </div>

        <div>
          <label>Imagen</label>
          <input 
            value={input.image}
            type="url" 
            name="image" 
            placeholder='Agrega tu imagen'
            onChange={e => handleChange(e)}
          />
        </div>

        <button type='submit'>Crear videojuego</button>
      </form>
       
    </div>
  )
}

export default CreateGame