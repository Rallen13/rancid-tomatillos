import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      isSelected: false,
    };
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie.id, isSelected: true });
  };

  render() {
    return (
      <>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.isSelected ? (
          <MovieDetails movie={this.state.movies[0]} />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </>
    );
  }
}

export default App;
