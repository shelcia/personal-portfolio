import React from "react";
import Navbar from "../Navbar";
import HomeContent from "./HomeContent";
import Work from "./Work";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="landingPage">
        <HomeContent />
        <Work />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
