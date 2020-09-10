import React from "react";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="landingPage">
        <HomeContent />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
