import React from 'react';
import { Link } from 'react-router-dom';
import SelectGenres from '../SelectGenres/SelectGenres';
import "./filter.css";

const Filters = ({ handleOrder, handleFilteredCreates, handleFilteredGenres, allGenres }) => {
  return (
    <div className='filter-cnt'>
      <div className='select-order'>
        <select className='select-order--group' onChange={e => handleOrder(e)}>
            <option value="">Ordenar por...</option>
            <option value="Asc">Ordenar de la A-Z</option>
            <option value="Des">Ordenar de la Z-A</option>
            <option value="Mejor">Mejor Ranking</option>
            <option value="Peor">Peor Ranking</option>
        </select>
      </div>

      <div className='select-filter-create'>
        <select className='select-order--group'  onChange={e => handleFilteredCreates(e)}>
            <option value="Todos">Todos los juegos</option>
            <option value="Creados">Creados</option>
            <option value="API">Existentes</option>
        </select>
      </div>

      <div className='select-filter-genres'>
        <select className='select-order--group' onChange={e => handleFilteredGenres(e)}>
            <option value="Todos">Todos los generos</option>
            <SelectGenres allGenres = {allGenres} />
        </select>
      </div>

      <div className='navbar-cnt_create'>
        <Link className='navbar-cnt_create--link' to='/game'>
            <button className='navbar-cnt--button'>Crear videojuego🎮</button>
        </Link>
      </div>

      <div className='navbar-cnt_clear'>
        <Link className='navbar-cnt_create--link' to='/game'>
            <button className='navbar-cnt--button'>Limpiar filtros🔃</button>
        </Link>
      </div>
    </div>
  )
}

export default Filters