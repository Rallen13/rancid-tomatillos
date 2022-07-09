import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: [],
      selectedMovie: 0,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          movies: data.movies,
        });
      });
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie.id });
  };

  closeDetails = () => {
    this.setState({ selectedMovie: 0 });
  };

  render() {
    return (
      <>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.selectedMovie ? (
          <MovieDetails
            movie={this.state.movies[0]}
            closeDetails={this.closeDetails}
          />
        ) : (
          <Movies movies={this.state.movies} selectMovie={this.selectMovie} />
        )}
      </>
    );
  }
}

export default App;
