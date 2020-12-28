import React from "react";
import Shelcia from "../../assets/shelcia.gif";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4">
          <img
            src={Shelcia}
            alt="gif"
            className="img-fluid"
            title="Happy Shelcia !!"
          />
        </div>
        <div className="col-sm-8">
          <h1 className="glitch" data-text="About">
            About
          </h1>
          <p className="mt-12">
            I am a final year engineering graduate working with Design and web
            development for past two years.
          </p>
          <p className="mt-3">
            I have a passion for learning and building interesting things. I
            love how technologies evolve and have a major impact on our day to
            day lives.
          </p>
          <button className="btn">
            <div className="btn-text">Add me trouble</div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
