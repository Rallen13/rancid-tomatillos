import React from 'react';
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
      <h3>{movie.title}</h3>
    </div>
  )
}


export default MovieCard;
