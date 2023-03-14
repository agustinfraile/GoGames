import React from 'react';

import './iconMedia.css';

const IconMedia = ({ logo, link }) => {
  return (
    <div 
      className='social-list--icon'
      onClick={() => window.open(link)}
    >
        {/* AQUI VA LA IMG DE LA RED SOCIAL */}
        <img src={logo} alt="Logo de" />
    </div>
  )
}

export default IconMedia