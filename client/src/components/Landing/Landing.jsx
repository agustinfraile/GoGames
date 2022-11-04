import "./landing.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
import { Home } from '../Home/Home'
import React from 'react'

const Landing = () => {
  return (
    <div>
        <h1>
            Bem vindos
        </h1>
        <Link to={Home}>
            <button>Ingresar</button>
        </Link>
    </div>
  )
}

export default Landing