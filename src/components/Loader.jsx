import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <div className="spinner-grow text-muted"></div>
        <div className="spinner-grow text-primary"></div>
        <div className="spinner-grow text-success"></div>
        <div className="spinner-grow text-info"></div>
        <div className="spinner-grow text-warning"></div>
        <div className="spinner-grow text-danger"></div>
        <div className="spinner-grow text-secondary"></div>
        <div className="spinner-grow text-dark"></div>
        <div className="spinner-grow text-light"></div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
