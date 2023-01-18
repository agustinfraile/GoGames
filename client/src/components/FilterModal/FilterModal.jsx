import React from 'react';
import { Link } from 'react-router-dom';
import FilterInfo from '../FilterInfo/FilterInfo';
import SelectGenres from '../SelectGenres/SelectGenres';

import './filterModal.css';

const FilterModal = ({ show, onClose, handleOrder, handleFilteredCreates, handleFilteredGenres, allGenres, reset }) => {
    return (
      <div className={`modal ${show ? 'is-open' : ''}`}>

        <div className="modal-content">
            
            <FilterInfo 
                handleOrder={handleOrder} 
                handleFilteredCreates = {handleFilteredCreates}
                handleFilteredGenres = {handleFilteredGenres}
                allGenres = {allGenres}
                reset = {reset}   
            />

            <button 
                className="modal-close-button" 
                onClick={onClose}
            >
                X
            </button>

        </div>
      </div>
    )
  }

export default FilterModal