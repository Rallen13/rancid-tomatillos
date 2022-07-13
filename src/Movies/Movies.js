import React from "react";
import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";

const Movies = ({ movies }) => {
  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default Movies;
