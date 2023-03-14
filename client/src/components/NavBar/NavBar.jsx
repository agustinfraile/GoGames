import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from "../../images/logo.png"
import close from "../../images/x.png"
import menu from "../../images/menu.png"
import "./navBar.css";

const NavBar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  }

  const handleClick = () => {
    setIsToggled(false);
  }

  return (
    <div className='navbar-cnt'>

        <div className='navbar-cnt--box'>
          <Link to='/'>
            <div className='navbar-cnt_logo' onClick={handleClick}>
                <img src={logo} alt="Logo" />
            </div>
          </Link>

          <div 
            className='navbar-cnt_menu'  
            onClick={toggleMenu}
          >
            <img src={isToggled ? close : menu} alt="Menu" />
          </div>
        </div>

        <div 
          className={`navbar-toggle ${isToggled ? 'invisible' : ''}`}
        >
            <ul>
              
              <Link 
                to='/'
                className='navbar-link'
              >
                <li onClick={handleClick}>
                  Inicio
                </li>
              </Link>

              <Link 
                to='/home'
                className='navbar-link'
              >
                <li onClick={handleClick}>
                  Libreria
                </li>
              </Link>

              <Link 
                to='/game'
                className='navbar-link'
              >
                <li onClick={handleClick}>
                  Crear videojuego
                </li>
              </Link>

              <Link 
                to='/contact'
                className='navbar-link'
              >
                <li onClick={handleClick}>
                  Contacto
                </li>
              </Link>

            </ul>
        </div>

      {/* <div className='navbar-cnt_search'>
        <SearchBar />
      </div> */}
    </div>
  )
}

export default NavBar