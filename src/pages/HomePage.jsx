import React from "react";
import Intro from "../components/home/Intro";
import Github from "../components/home/Github";
import Works from "../components/home/Works";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="page-fade">
        <Intro />
        <Github />
        <Works />
        <Footer />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
