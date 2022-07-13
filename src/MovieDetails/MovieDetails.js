import React, { Component } from "react";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { getSingleMovie } from "../apiCalls";
import Loading from "../Loading/Loading";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: null,
    };
  }

  componentDidMount() {
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
    if (this.state.loading) {
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
            <p className="detail-header">{title}</p>
            <Link to="/">
              <button className="close-btn">
                <span className="material-icons close">close</span>
              </button>
            </Link>
          </div>
          <div className="detail-card-container">
            <div className="detail-card">
              <h2 className="detail-title">{title}</h2>
              <p className="detail-date-rating">
                {release_date.slice(0, 4)} <span className="seperator">|</span>{" "}
                <span className="material-icons star">star</span>{" "}
                {average_rating.toFixed(1)} <span className="seperator">|</span>{" "}
                <span className="material-icons schedule">schedule</span>
                {runtime} min
              </p>
              <div className="genre-container">
                {genres.map((genre) => {
                  return (
                    <div key={genre} className="genre-tag">
                      <p>{genre}</p>
                    </div>
                  );
                })}
              </div>
              <h3>{tagline}</h3>
              <p className="detail-overview">{overview}</p>
              <div className="detail-money-container">
                <p className="detail-money">
                  Budget: {budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} <span className="seperator">|</span>{" "}
                  Revenue: {revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
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
