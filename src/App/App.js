import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Route } from "react-router-dom";
import { getAllMovies } from "../apiCalls";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage";

class App extends Component {
  state = {
    loading: false,
    movies: [],
    error: false,
  };

  componentDidMount() {
    getAllMovies()
      .then((data) => {
        this.setState({
          movies: data.movies,
        });
      })
      .catch((err) => this.setState({ error: true }));
  }

  render() {
    if (!this.state.movies && !this.state.error) {
      return <Loading />
    }

    if (this.state.error) {
      return <ErrorPage />
    }
    return (
      <>
        <nav className="navbar">
          <h1>Rancid Tomatillos</h1>
        </nav>
        <Route
          exact
          path="/:id"
          render={({ match }) => <MovieDetails id={match.params.id} />}
        />
        <Route exact path="/" render={() => (<Movies movies={this.state.movies} /> )} />
      </>
    );
  }
}

export default App;
