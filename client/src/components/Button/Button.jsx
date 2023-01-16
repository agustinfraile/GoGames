import React from 'react';

import './Button.css';

const Button = ({ text }) => {

    const determineColor = (text) => {
        if (text === 'Crear juego') {
            return {backgroundColor: '#FFE600', textColor: '#707070'};
        } else if (text === 'Libreria') {
            return {backgroundColor: '#7000FF', textColor: '#FFF'};
        } else {
            return {backgroundColor: '#7000FF', textColor: '#FFF'};
        }
    }

    const color = determineColor(text);

    return (
        <button 
            className='btn_container' 
            style={{ backgroundColor: color.backgroundColor, color: color.textColor }}
        >
            {text}
        </button>
    )
}

export default Button