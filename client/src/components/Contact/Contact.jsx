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
                    ¡Hola! Mi nombre es Agustin, soy un desarrollador web Full Stack.
                </p>
                <p>
                    Cuento con experiencia desde el 2020. Actualmente me encuentro en constante capacitación para estar al día con las últimas tecnologías web y ofrecer soluciones innovadoras y efectivas.
                </p>
                <p>
                    Recientemente, me gradué de Henry, lo cual me ha permitido ampliar mis habilidades y conocimientos en el desarrollo web. Además, tengo una base sólida en ingeniería industrial, lo cual me ha dado una perspectiva única y valiosa en el desarrollo de soluciones eficientes y efectivas.
                </p>
                <p>
                    Si está interesado en contratarme para un proyecto o simplemente deseas conocer más sobre mis habilidades y experiencia, no dudes en ponerte en contacto conmigo.
                </p>
                <p>
                    ¡Espero tener la oportunidad de trabajar juntos!
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