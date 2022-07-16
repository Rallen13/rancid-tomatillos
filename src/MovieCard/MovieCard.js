import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const linkStyle = {
  textDecoration: "none",
};

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`} style={linkStyle}>
      <article className="movie-card">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="card-detail">
          <p className="card-date-rating">
            {movie.release_date.slice(0, 4)}{" "}
            <span className="seperator">|</span>{" "}
            <span className="material-icons star">star</span>
            {movie.average_rating.toFixed(1)}
          </p>
        </div>
        {/* <h2 className="card-title">{movie.title}</h2> */}
      </article>
    </Link>
  );
};

export default MovieCard;
