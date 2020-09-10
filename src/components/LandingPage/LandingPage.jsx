import React from "react";
import HomeContent from "./HomeContent";
import Work from "./Work";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landingPage" id="home">
        <HomeContent />
        <Work />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
