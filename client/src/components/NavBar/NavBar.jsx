import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import "./navBar.css";

const NavBar = () => {
  return (
    <div className='navbar-cnt'>
      <div className='navbar-cnt_logo'>
        <img src="" alt="Logo" />
      </div>

      <div className='navbar-cnt_search'>
        <SearchBar />
      </div>
    </div>
  )
}

export default NavBar