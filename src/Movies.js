import React from 'react';
import './Movies.css'
import MovieCard from './MovieCard'

const Movies = ({movies}) => {
  console.log(movies)
  return (
    <section className='movies-area'>
    <h2>Full Movie List</h2>
    <div className='movies-container'>
          {movies.map(movie => <MovieCard movie={movie} />)}
    </div>
    </section>
  )
}


export default Movies;
