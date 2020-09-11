import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/LandingPage/ProjectPage";
import { ProjectsProvider } from "./components/Projectcontext/ProjectContext.jsx";
import { OnGoingProvider } from "./components/Projectcontext/OnGoingContext";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <ProjectsProvider>
          <OnGoingProvider>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/about" exact component={About} />
              <Route path="/project/:id" component={ProjectPage} />
            </Switch>
          </OnGoingProvider>
        </ProjectsProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
