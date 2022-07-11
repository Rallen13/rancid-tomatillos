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
    <div key={movie.id} style={backgroundImage}>
      <div className="detail-content">
        <div className="detail-close">
          <p className="detail-header">{movie.title}</p>
          <button onClick={() => closeDetails()} className="close-btn">
            <span className="material-icons close">close</span>
          </button>
        </div>
        <div className="detail-card-container">
          <div className="detail-card">
            <h2 className="detail-title"> {movie.title}</h2>
            <p className="detail-date-rating">
              {movie.release_date.slice(0, 4)}{" "}
              <span className="seperator">|</span>{" "}
              <span className="material-icons star">star</span>{" "}
              {movie.average_rating.toFixed(1)}{" "}
              <span className="seperator">|</span>{" "}
              <span className="material-icons schedule">schedule</span>
              {movie.runtime} min
            </p>
            <div className="genre-container">
              {movie.genres.map((genre) => {
                return (
                  <div key={genre} className="genre-tag">
                    <p>{genre}</p>
                  </div>
                );
              })}
            </div>
            <h3>{movie.tagline}</h3>
            <p className="detail-overview">{movie.overview}</p>
            <div className="detail-money-container">
              <p className="detail-money">
                Budget: ${movie.budget} <span className="seperator">|</span>{" "}
                Revenue: ${movie.revenue} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
