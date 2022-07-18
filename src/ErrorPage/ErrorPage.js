import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = ({errorNumber}) => {
  return (
    <section data-testid="error-page-element" className="error-page app">
      <Link to="/" className="link-style">
        <div className="close-btn-error">
          <span className="material-icons close" onClick={() => this.props.clearInput()}>close</span> 
        </div>
      </Link>
      <h1 className="error-header">Oops! {errorNumber} error!</h1>
      <h3 className="error-text"> 
        {errorNumber >= 500 && ` Our servers need some time to catch up so let's try that again.`}
        {errorNumber === 404 && ` We can't find this movie. `}
        <p>Click <Link to="/" className="error-link">here</Link> to {errorNumber === 404 ? 'go back to the home' : 'refresh the'} page.</p>
      </h3>
    </section>
  );
};

export default ErrorPage;
