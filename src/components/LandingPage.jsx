import React from "react";
import Navbar from "./Navbar";
import ProfilePic from "../assets/profile.png";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ flexDirection: "column" }}>
            <h1>Shelcia.</h1>
            <p>
              Hi ! I am an MERN stack Website Developer and Designer based in
              Chennai.
            </p>
            <br></br>
            <p>Check out my work !!</p>
          </div>
          <div className="col-sm-6">
            <img src={ProfilePic} alt="shelcia" id="profile" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
