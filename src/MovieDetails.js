import React, { Component } from "react";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movie: {},
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
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movie}`
    )
      .then((response) => this.checkForError(response))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          movie: data.movie,
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    console.log(this.props);
    return (
      <>
        <button onClick={() => this.props.closeDetails()}>
          <p>X</p>
        </button>
        <div className="detail-card">
          <h2> {this.movie.title}</h2>
          <p>
            {this.movie.release_date} {this.movie.average_rating}{" "}
            {this.movie.rating}
          </p>
          {/* {movie.genres.map((genre) => {
          <div id={genre.id}>
            <p>{genre}</p>
          </div>;
        })}
        <h3>{movie.tagline}</h3>
        <p>{movie.overview}</p>
        <p>
          {movie.budget} {movie.revenue}
        </p> */}
        </div>
      </>
    );
  }
}

export default MovieDetails;
