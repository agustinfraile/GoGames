import React from 'react';
import profile from '../../images/profile.png';
import IconMedia from '../IconMedia/IconMedia';

import github from '../../images/github-logo.png';
import linkedin from '../../images/linkedin-logo..png';

import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-container_info'>
            <div className='contact-container_info--picture'>
                {/* AQUI VA LA FOTO */}
                <img src={ profile } alt="Imagen de perfil" />
            </div>

            <div className='contact-container_info--description'>
                <p>
                    Hola, mi nombre es Agustin Fraile y soy desarrollador web. Tengo experiencia en maquetado con HTML y CSS para el front-end, y me especializo en el desarrollo de aplicaciones con React. En el back-end, trabajo principalmente con Node.js y Express, y tengo experiencia en trabajar con bases de datos MongoDB y PostgreSQL.
                </p>
                <p>
                    Me gusta trabajar en proyectos desafiantes y me aseguro de cumplir con los estándares de calidad y las necesidades. Estoy emocionado de poder aplicar mis habilidades y conocimientos para ayudar todos en sus proyectos web.
                </p>
            </div>

            <div className='contact-container_info--social'>
                <div className='social-list'>
                    <IconMedia 
                        logo={github}
                        link={'https://github.com/agustinfraile'} 
                        />
                    <IconMedia 
                        logo={linkedin}
                        link={'https://www.linkedin.com/in/agustinfraile/'} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact