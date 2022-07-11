import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie, closeDetails }) => {
  const backgroundImage = {
    background: `url(${movie.backdrop_path}) no-repeat center center fixed`,
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
  };

  return (
    <div key={movie.id} style={backgroundImage} className="detail-container">
      <div className="detail-content">
        <div className="detail-close">
          <p className="detail-header">{movie.title}</p>
          <button onClick={() => closeDetails()} className="close-btn">
            <p>X</p>
          </button>
        </div>
        <div className="detail-card-container">
          <div className="detail-card">
            <h2> {movie.title}</h2>
            <p>
              {movie.release_date} {movie.average_rating} {movie.rating}
            </p>
            <div className="genre-container">
              {movie.genres.map((genre) => {
                return (
                  <div key={genre}>
                    <p>{genre}</p>
                  </div>
                );
              })}
            </div>
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
