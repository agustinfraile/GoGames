import React from 'react'

const GameCard = ({ name, image, genres, rating, id, createInDb }) => {

  return (
    <div>
        <h2>{name}</h2>
        <h6>id:{id}</h6>
        <img src={image} alt={`Imagen de ${name}`} width="200px"/>
        <h4>
          {
            createInDb ?
            genres?.map(gen => gen.name)
            : genres 
          }
        </h4>
        <h5>{rating}⭐</h5>
    </div>
  )
  
}

export default GameCard 