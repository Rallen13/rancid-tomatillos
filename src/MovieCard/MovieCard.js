import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, selectMovie }) => {
  return (
    <article className="movieCard" onClick={() => selectMovie(movie)}>
      <img src={movie.poster_path} alt={movie.title} className="moviePoster" />
      <h3>{movie.title}</h3>
      <p>Star Rating: {movie.average_rating.toFixed(1)}</p>
    </article>
  );
};

export default MovieCard;
