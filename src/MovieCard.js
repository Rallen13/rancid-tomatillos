import React from 'react';
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <article className='movieCard'>
      <img src={movie.poster_path} className="moviePoster" />
      <h3>{movie.title}</h3>
      <p>{movie.average_rating}</p>
    </article>
  )
}


export default MovieCard;
