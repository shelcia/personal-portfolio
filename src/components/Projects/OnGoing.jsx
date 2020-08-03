import React from "react";
import Countries from "../../assets/countries.JPG";
import Samgatha from "../../assets/samgatha.png";
import ScrollAnimation from "react-animate-on-scroll";

const FullStack = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="col-sm-2">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="nav">
            <p onClick={() => setView("fullstack")}>Full Stack</p>
            <p onClick={() => setView("uidesign")}>UI Design</p>
            <p className="active">On Going</p>
            <p onClick={() => setView("design")}>Design</p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-sm-10">
        <ScrollAnimation animateIn="fadeInRight">
          <div className="container">
            <div className="row">
              <div className="card">
                <img src={Countries} alt="" />
                <div className="text-container">
                  <h2>REST API Countries</h2>
                  <p>Project built using REST Countries API</p>
                  <a href="https://github.com/shelcia/auv">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={Samgatha} alt="" />
                <div className="text-container">
                  <h2>Samgatha</h2>
                  <p>
                    I was commisioned to build website for college cultural fest
                  </p>
                  <a href="https://github.com/shelcia/rasanluinterface">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={Samgatha} alt="" />
                <div className="text-container">
                  <h2>Samgatha</h2>
                  <p>
                    I was commisioned to build website for college cultural fest
                  </p>
                  <a href="https://github.com/shelcia/soleflowintern">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={Samgatha} alt="" />
                <div className="text-container">
                  <h2>Samgatha</h2>
                  <p>
                    I was commisioned to build website for college cultural fest
                  </p>
                  <a href="https://github.com/shelcia/social-web">Code</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default FullStack;
