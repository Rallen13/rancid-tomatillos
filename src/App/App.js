import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Route, Link } from 'react-router-dom';
import { getAllMovies } from "../apiCalls";


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
    getAllMovies()
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
        this.setState({
          loading: false,
          selectedMovie: data.movie,
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  closeDetails = () => {
    <Link to='/' />
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route exact path="/:id" render={({match}) => <MovieDetails id={match.params.id} selectMovie={this.selectMovie} /> } />
        <Route exact path="/" render={() => <Movies movies={this.state.movies} selectMovie={this.selectMovie} /> } />
      </>
    );
  }
}

export default App;
