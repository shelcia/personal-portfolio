import React from "react";
import Animation from "./Animations";
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
        <Animation />
      </div>
    </React.Fragment>
  );
};

export default Home;
