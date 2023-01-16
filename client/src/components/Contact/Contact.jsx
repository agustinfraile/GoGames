import React from 'react';

import './contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-container_info'>
            <div className='contact-container_info--picture'>
                {/* AQUI VA LA FOTO */}
            </div>

            <div className='contact-container_info--description'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error quaerat tempore, non in dolorum adipisci quo! Tempora repellendus ex earum culpa beatae explicabo, maxime saepe nihil, enim aspernatur quas?
                    Tenetur aspernatur maiores mollitia, impedit placeat exercitationem quidem culpa nulla, libero id, quis ea. Cum consequuntur rem sequi, magni excepturi pariatur earum repellendus fuga dignissimos minus est repudiandae! Suscipit, optio.
                </p>
            </div>

            <div className='contact-container_info--social'>
                <div className='social-list'>
                    <div className='social-list--icon'>
                        {/* AQUI VA LA IMG DE LA RED SOCIAL */}
                    </div>
                    <div className='social-list--icon'>
                        {/* AQUI VA LA IMG DE LA RED SOCIAL */}
                    </div>
                    <div className='social-list--icon'>
                        {/* AQUI VA LA IMG DE LA RED SOCIAL */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact