import React from "react";
import Footer from "../../partials/Footer";
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
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
