import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const linkStyle = {
  textDecoration: "none",
};

const MovieCard = ({ movie, selectMovie }) => {
  return (
    <Link to={`/${movie.id}`} style={linkStyle} >
      <article className="movieCard" onClick={() => selectMovie(movie)}>
        <img src={movie.poster_path} alt={movie.title} className="moviePoster" />
        <h3>{movie.title}</h3>
        <p>Star Rating: {movie.average_rating.toFixed(1)}</p>
      </article>
    </Link>
  );
};

export default MovieCard;
