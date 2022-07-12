import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Route } from 'react-router-dom';


class App extends Component {

  state = {
      loading: false,
      movies: [],
      selectedMovie: 0,
      error: "",
    };

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

  selectMovie = (movie) => {
    this.setState({ loading: true });
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/" + movie.id)
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
        <Route exact path="/" render={() => <Movies movies={this.state.movies} selectMovie={this.selectMovie} /> } />
      </>
    );
  }
}

export default App;
