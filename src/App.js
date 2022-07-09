import React, { Component } from "react";
import "./App.css";
import movieData from "./MovieData";
import Movies from "./Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }
  render() {
    return (
      <>
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        <Movies movies={this.state.movies} />
      </>
    );
  }
}

export default App;
