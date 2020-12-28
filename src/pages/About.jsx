import React from "react";
import Shelcia from "../assets/shelcia.gif";

const About = () => {
  return (
    <React.Fragment>
      <div className="container page-fade">
        <div className="row">
          <img src={Shelcia} alt="gif" />
        </div>
        <h1>About</h1>
        <p>
          Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
          velit, quis faucibus libero congue et. Quisque convallis eu nisl et
          congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
          nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
          sollicitudin nibh lacus, ut bibendum risus elementum a.
        </p>
        <button className="btn btn-primary">Add me trouble</button>
      </div>
    </React.Fragment>
  );
};

export default About;
