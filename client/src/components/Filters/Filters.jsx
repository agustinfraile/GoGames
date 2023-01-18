import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import SelectGenres from '../SelectGenres/SelectGenres';

import filterIcon from '../../images/filtrar.png';
import FilterModal from '../FilterModal/FilterModal';

import "./filter.css";

const Filters = ({ handleOrder, handleFilteredCreates, handleFilteredGenres, allGenres, reset }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='filter-cnt'>

      <div 
        className='filter-cnt-group' 
        onClick={() => setShowModal(true)}
      >
        <div className='filter-cnt-group--button'>

          <div className='filter--icon'>
            <img src={ filterIcon } alt="Icono de filtro" />
          </div>

          <h3>Filtrar</h3>

        </div>
      </div>

      <FilterModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        handleOrder={handleOrder} 
        handleFilteredCreates = {handleFilteredCreates}
        handleFilteredGenres = {handleFilteredGenres}
        allGenres = {allGenres}
        reset = {reset}  
      />
            
    </div>
  )
}

export default Filters