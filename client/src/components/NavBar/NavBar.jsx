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

  return (
    <div className='navbar-cnt'>

        <div className='navbar-cnt--box'>
          <Link to='/'>
            <div className='navbar-cnt_logo'>
                <img src={logo} alt="Logo" />
            </div>
          </Link>

          <div className='navbar-cnt_menu'  onClick={toggleMenu}>
            <img src={isToggled ? close : menu} alt="Menu" />
          </div>
        </div>

        <div className={`navbar-toggle ${isToggled ? '' : 'invisible'}`}>
            <ul>
              
              <Link 
                to='/'
                className='navbar-link'
              >
                <li>
                  Inicio
                </li>
              </Link>

              <Link 
                to='/home'
                className='navbar-link'
              >
                <li>
                  Libreria de juegos
                </li>
              </Link>

              <Link 
                to='/game'
                className='navbar-link'
              >
                <li>
                  Crear videojuego
                </li>
              </Link>

              <Link 
                to='/contact'
                className='navbar-link'
              >
                <li>
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