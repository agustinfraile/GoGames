import React, { useState } from 'react';

import './Button.css';

const Button = ({ text }) => {

    const [hover, setHover] = useState(false);

    const determineColor = (text) => {
        if (text === 'Crear juego') {
            return {backgroundColor: '#FFE600', textColor: '#707070', boxShadow: '0px 0px 5px 2px #FFE600'};
        } else if (text === 'Libreria') {
            return {backgroundColor: '#7000FF', textColor: '#FFF', boxShadow: '0px 0px 5px 3px #7000FF'};
        } else {
            return {backgroundColor: '#7000FF', textColor: '#FFF', boxShadow: '0px 0px 5px 2px #7000FF'};
        }
    }

    const color = determineColor(text);

    return (
        <button 
            className='btn_container' 
            style=
            {
                { 
                    backgroundColor: color.backgroundColor, color: color.textColor, 
                    boxShadow: hover ? color.boxShadow : 'none', transition: '.4s'
                }
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {text}
        </button>
    )
}

export default Button