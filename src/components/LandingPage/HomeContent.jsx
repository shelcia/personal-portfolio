import React from "react";
import ProfilePic from "../../assets/profile.png";
import DownArrow from "../../assets/icons/arrow_down.png";
import ScrollAnimation from "react-animate-on-scroll";

const HomeContent = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ flexDirection: "column" }}>
            <ScrollAnimation animateIn="fadeInUp">
              <h1>Shelcia.</h1>
              <p>
                Hi ! I am an MERN stack Website Developer and Designer based in
                Chennai.
              </p>
              <br></br>
              <p>
                Check out my work !!
                <a href="#works">
                  <img src={DownArrow} alt="arrow" id="downarrow" />
                </a>
              </p>
            </ScrollAnimation>
          </div>
          <div className="col-sm-6">
            <ScrollAnimation animateIn="fadeInUp">
              <img src={ProfilePic} alt="shelcia" id="profile" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
