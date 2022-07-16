import React, { Component } from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { getSingleMovie } from "../apiCalls";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movie: null,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getSingleMovie(this.props.id)
      .then((data) => {
        this.setState({
          loading: false,
          movie: data.movie,
        });
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    } else if (this.state.loading || !this.state.movie) {
      return <Loading />;
    }
    const {
      backdrop_path,
      title,
      release_date,
      average_rating,
      runtime,
      genres,
      tagline,
      overview,
      budget,
      revenue,
    } = this.state.movie;

    const renderedGenres = genres.map((genre) => {
      return (
        <div key={genre} className="genre-tag">
          <p>{genre}</p>
        </div>
      );
    });

    const backgroundImage = {
      background: `url(${backdrop_path}) no-repeat center center fixed`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
    };

    return (
      <div style={backgroundImage} className="detail-container">
        <div className="detail-content">
          <div className="detail-close">
            <p className="detail-header" tabIndex={0}>{title}</p>
            <Link to="/">
              <div className="close-btn">
                <span className="material-icons close">close</span>
              </div>
            </Link>
          </div>
          <div className="detail-card-container">
            <div className="detail-card">
              <h2 className="detail-title" aria-label={`movie title ${title}`} tabIndex={0}>{title}</h2>
              <p className="detail-date-rating" tabIndex={0}>
                {release_date.slice(0, 4)} <span className="seperator">|</span>{" "}
                <span className="material-icons star" aria-label="rating">
                  star
                </span>{" "}
                {average_rating.toFixed(1)} <span className="seperator">|</span>{" "}
                <span className="material-icons schedule" aria-label="runtime">schedule</span>
                {runtime} min
              </p>
              <div className="genre-container" tabIndex={0} aria-label={`genres: ${genres}`}>{renderedGenres}</div>
              <h3 className="detail-tagline" aria-label={`tagline: ${tagline}`} tabIndex={0}>{tagline}</h3>
              <p className="detail-overview" aria-label={`overview: ${overview}`} tabIndex={0}>{overview}</p>
              <div className="detail-money-container">
                <p className="detail-money" tabIndex={0}>
                  Budget:{" "}
                  {budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  <span className="seperator">|</span> Revenue:{" "}
                  {revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
