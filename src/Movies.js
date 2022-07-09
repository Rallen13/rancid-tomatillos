import React from "react";
import "./Movies.css";
import MovieCard from "./MovieCard";

const Movies = ({ movies }) => {
  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </section>
  );
};

export default Movies;
