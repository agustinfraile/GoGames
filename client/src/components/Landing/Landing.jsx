import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CarouselComponent from "../Carousel/Carousel";



const Landing = () => {
  return (
    <div className="landing-cnt">

      <div className="landing-tit_cnt">
        <h1>Go Games</h1>
      </div>

      <div className="landing-cnt_images">
        <CarouselComponent />
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