import React from "react";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <div className="spinner-grow text-muted"></div>
        <div className="spinner-grow text-primary mx-1"></div>
        <div className="spinner-grow text-success mx-1"></div>
        <div className="spinner-grow text-info mx-1"></div>
        <div className="spinner-grow text-warning mx-1"></div>
        <div className="spinner-grow text-danger mx-1"></div>
        <div className="spinner-grow text-secondary mx-1"></div>
        <div className="spinner-grow text-dark"></div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
