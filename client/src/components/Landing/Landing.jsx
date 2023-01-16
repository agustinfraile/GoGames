import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const Landing = () => {
  return (
    <div className="landing-cnt">

      <div className="landing-tit_cnt">
        <h1>Games web</h1>
      </div>

      <div className="landing-cnt_images">

      </div>

      <div className="landing-cnt_button">
        <Link to='/home' >
          <Button 
            text={'Libreria'}   
          />
        </Link>
        <Link to={'/game'}>
          <Button text={'Crear juego'} />
        </Link>
      </div>
    </div>
  )
}

export default Landing