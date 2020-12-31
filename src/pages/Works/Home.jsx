import React from "react";
import Animation from "./Animations";
import Github from "./Github";
import Intro from "./Intro";
import Works from "./Works";

const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <Github />
      <Works />
      <Animation />
    </React.Fragment>
  );
};

export default Home;
