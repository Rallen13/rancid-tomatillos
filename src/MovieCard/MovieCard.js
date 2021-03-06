import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const linkStyle = {
  textDecoration: "none",
};

const MovieCard = ({ movie, clearInput }) => {
  return (
    <Link to={`/${movie.id}`} style={linkStyle}>
      <article className="movie-card" onClick={() => clearInput()}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="card-detail">
          <p className="card-date-rating">
            {movie.release_date.slice(0, 4)}{" "}
            <span className="seperator">|</span>{" "}
            <span className="material-icons star" aria-label="rating">
              star
            </span>
            {movie.average_rating.toFixed(1)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
