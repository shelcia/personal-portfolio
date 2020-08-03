import React from "react";
import "./styles/style.css";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <Projects />
    </React.Fragment>
  );
};

export default App;
