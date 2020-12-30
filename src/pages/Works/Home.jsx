import React from "react";
import Github from "./Github";
import Intro from "./Intro";
import Works from "./Works";

const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <Github />
      <Works />
    </React.Fragment>
  );
};

export default Home;
