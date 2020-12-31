import React from "react";
import Github from "./Github";
import Intro from "./Intro";
import Works from "./Works";

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-fade">
        <Intro />
        <Github />
        <Works />
      </div>
    </React.Fragment>
  );
};

export default Home;
