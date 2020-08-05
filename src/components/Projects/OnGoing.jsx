import React from "react";
// import Countries from "../../assets/countries.JPG";
// import Samgatha from "../../assets/samgatha.png";
import AUV from "../../assets/auv.JPG";
import Bot from "../../assets/bot.JPG";
import Social from "../../assets/social.JPG";
import NLU from "../../assets/nlu.JPG";
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
                <img src={AUV} alt="" />
                <div className="text-container">
                  <h2>AUV- IIITDM</h2>
                  <p>
                    I was commisioned to build website for college AUV community
                  </p>
                  <a href="https://github.com/shelcia/auv">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={NLU} alt="" />
                <div className="text-container">
                  <h2>Rasa NLU</h2>
                  <p>
                    I was commisioned to build Frontend Interface For NLU
                    applications
                  </p>
                  <a href="https://github.com/shelcia/rasanluinterface">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={Bot} alt="" />
                <div className="text-container">
                  <h2>SoleFlow</h2>
                  <p>
                    I was commisioned to build website interface to create chat
                    bots
                  </p>
                  <a href="https://github.com/shelcia/soleflowintern">Code</a>
                </div>
              </div>
              <div className="card">
                <img src={Social} alt="" />
                <div className="text-container">
                  <h2>Social gram</h2>
                  <p>
                    As Part of Hobby Project i am builidng a social app in react
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
