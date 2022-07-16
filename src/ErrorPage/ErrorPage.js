import React from "react";

const ErrorPage = () => {
  return (
    <section data-testid="error-page-element" className="error-page app">
      <h2 className="error-header">Oops!</h2>
      <h3 className="error-text">
        Something went wrong. Our servers need some time to catch up!
      </h3>
    </section>
  );
};

export default ErrorPage;
