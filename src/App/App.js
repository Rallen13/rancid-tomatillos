import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Route } from "react-router-dom";
import { getAllMovies } from "../apiCalls";
import Loading from "../Loading/Loading";

class App extends Component {
  state = {
    loading: false,
    movies: [],
    error: "",
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

  render() {
    return (
      <>
        <nav className="navbar">
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.loading && (
          <Loading />
        )}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route
          exact
          path="/:id"
          render={({ match }) => <MovieDetails id={match.params.id} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Movies movies={this.state.movies} />
          )}
        />
      </>
    );
  }
}

export default App;
