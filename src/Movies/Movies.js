import React from "react";
import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = ({ movies, clearInput }) => {
  return (
    <section className="movies-container" role="main" aria-label="all movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} clearInput={clearInput} />
      ))}
    </section>
  );
};

export default Movies;
