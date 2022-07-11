import React, { Component } from "react";
import "./App.css";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: [],
      selectedMovie: 0,
      error: "",
    };
  }

  checkForError = (response) => {
    if (response.ok) {
      return response;
    } else {
      throw new Error(response.status);
    }
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => this.checkForError(response))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          movies: data.movies,
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  getSingleMovie(id) {
    this.setState({ loading: true });
    let fetchUrl =
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/" + id;
    fetch(fetchUrl)
      .then((response) => this.checkForError(response))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          selectedMovie: data.movie,
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  selectMovie = (movie) => {
    this.getSingleMovie(movie.id);
  };

  closeDetails = () => {
    this.setState({ selectedMovie: 0 });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.selectedMovie ? (
          <MovieDetails
            movie={this.state.selectedMovie}
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
