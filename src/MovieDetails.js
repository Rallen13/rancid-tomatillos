import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie, closeDetails }) => {
  return (
    <>
      <button onClick={() => closeDetails()}>
        <p>X</p>
      </button>
      <div className="detail-card">
        <h2> {movie.title}</h2>
        <p>
          {movie.release_date} {movie.average_rating} {movie.rating}
        </p>
        {/* {movie.genres.map((genre) => {
        <div id={genre.id}>
          <p>{genre}</p>
        </div>;
      })}
      <h3>{movie.tagline}</h3>
      <p>{movie.overview}</p>
      <p>
        {movie.budget} {movie.revenue}
      </p> */}
      </div>
    </>
  );
};

export default MovieDetails;
