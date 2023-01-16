import React, { useEffect, useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import {postGame, getGameGenre, getGames} from "../../redux/actions/index";
import {useDispatch, useSelector} from "react-redux";
import Button from '../Button/Button';
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
    let regularExpNameDescription = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9-(),.]+$/;
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

  };

  const handleSelectGenres = (e) => {
    if(!input.genres.includes(e.target.value)) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value]
      });
    }
  };

  const handleSelectGenresDelete = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter(gen => gen !== e)
    })
  }

  const handleSelectPlatforms = (e) => {
    if(!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
      });
    }
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

        alert("VideoGame creado con exito");
      }

  
      history.push('/home');
    }

  }
  

  return (
    <div className='createGame-cnt'>

      <div className='createGame-cnt-title'>
        <h1>Crear un videojuego</h1>
      </div>

      <form onSubmit={e => handleFormSubmit(e)}>
        
        <div className='form-name'>
          <label htmlFor='name'>Nombre</label>
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

        <div className='form-released'>
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

        <div className='form-rating'>
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
        
        <div className='form-description'>
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

        <div className='form-genres'>
          <label>Generos</label>
          <select onChange={e => handleSelectGenres(e)}>
            <option selected disabled value="generos">Generos</option>
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

          <div className='select-opt'>
          {
            input.genres.map(e =>
              <div 
              key={e}
              className='genres-opts'
              >
                
                  <button onClick={()=> handleSelectGenresDelete(e)}>X</button>
                  <span>{e}</span>
                
              </div>
            )
          }
          </div>
        </div>
        
        <div className='form-platforms'>
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

          <div className='select-opt'>
          {
            input.platforms.map(e =>
              <div 
                key={e}
                className='genres-opts'
              >
                  <button onClick={()=> handleSelectPlatformsDelete(e)}>X</button>
                  <span>{e}</span>
              </div>
            )
          }
          </div>
        </div>

        <div className='form-image'>
          <label>Imagen</label>
          <input 
            value={input.image}
            type="url" 
            name="image" 
            placeholder='Agrega tu imagen'
            onChange={e => handleChange(e)}
          />
        </div>

        <div className='form-buttons'>
          <Button text={'Crear juego'} type='submit'/>
          <Link to="/home">
            <Button text={'Volver al inicio'}/>
          </Link>
        </div>
      </form>
  
    </div>
  )
}

export default CreateGame;