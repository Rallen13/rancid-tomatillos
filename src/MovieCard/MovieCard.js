import React from "react";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, selectMovie }) => {
  return (
    <NavLink to={`/${movie.id}`} >
      <article className="movieCard" onClick={() => selectMovie(movie)}>
        <img src={movie.poster_path} alt={movie.title} className="moviePoster" />
        <h3>{movie.title}</h3>
        <p>Star Rating: {movie.average_rating.toFixed(1)}</p>
      </article>
    </NavLink>
  );
};

export default MovieCard;
