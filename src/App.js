import React from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <Projects />
      <AboutMe />
      <ContactMe />
    </React.Fragment>
  );
};

export default App;
