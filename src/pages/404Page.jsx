import React from "react";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <h1 data-shadow="404" className="error">
          404
        </h1>
        <br />

        <p data-shadow="Page not found!" className="error">
          Page not found!
        </p>
        <p>Either I screwed up</p>
        <p>OR</p>
        <p>You tried kinky links</p>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
