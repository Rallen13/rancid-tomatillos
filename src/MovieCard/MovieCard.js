import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const linkStyle = {
  textDecoration: "none",
};

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`} style={linkStyle}>
      <article className="movieCard">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="moviePoster"
        />
        <h3>{movie.title}</h3>
        <p className="detail-date-rating">
          {movie.release_date.slice(0, 4)} <span className="seperator">|</span>{" "}
          <span className="material-icons star">star</span>
          {movie.average_rating.toFixed(1)}
        </p>
      </article>
    </Link>
  );
};

export default MovieCard;
