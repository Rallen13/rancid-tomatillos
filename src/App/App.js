import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import MovieDetails from "../MovieDetails/MovieDetails";
import { Link, Route } from "react-router-dom";
import { getAllMovies } from "../apiCalls";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import Search from "../Search/Search"

class App extends Component {
  state = {
    loading: false,
    movies: [],
    error: null,
    searchValue: ''
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    getAllMovies()
      .then((data) => {
        this.setState({
          movies: data.movies,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  changeSearch = (newValue) => {
    this.setState({searchValue: newValue})
  }

  clearInput = () => {
    this.setState({searchValue: ''})
  }

  render() {
    let filteredMovies = this.state.movies.filter(movie => movie.title.includes(this.state.searchValue))
    if (this.state.error) {
      return <ErrorPage errorNumber={this.state.error}/>;
    } else if (this.state.loading) {
      return <Loading />;
    }
    return (
      <>
        <nav className="navbar">
          <span className="material-icons search" aria-label="rating">search</span>
          <Search searchValue={this.state.searchValue} changeSearch={this.changeSearch} />
          <Link to="/" className="link-style">
            <h1>Rancid Tomatillos</h1>
          </Link>
        </nav>
        <Route
          exact
          path="/:id"
          render={({ match }) => <MovieDetails clearInput={this.clearInput} id={match.params.id} />}
        />
        <Route
          exact
          path="/"
          render={() => <Movies movies={filteredMovies} clearInput={this.clearInput}  />}
        />
      </>
    );
  }
}

export default App;
