import React from "react";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container page-fade">
        <div className="d-relative" style={{ zIndex: 10000 }}>
          <h1 className="d-relative">I am Shelcia</h1>
          <h4>Web Developer and Designer</h4>
        </div>

        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        ></Particles>
      </div>
    </React.Fragment>
  );
};

export default Home;
