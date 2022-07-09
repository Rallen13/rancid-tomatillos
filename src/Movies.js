import React from "react";
import "./Movies.css";
import MovieCard from "./MovieCard";

const Movies = ({ movies, selectMovie }) => {
  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <MovieCard movie={movie} selectMovie={selectMovie} />
      ))}
    </section>
  );
};

export default Movies;
