import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/LandingPage/ProjectPage";
import { ProjectsProvider } from "./components/Projectcontext/ProjectContext.jsx";
import { OnGoingProvider } from "./components/Projectcontext/OnGoingContext";
import ErrorPage from "./components/Error";

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
              <Route component={ErrorPage} />
            </Switch>
          </OnGoingProvider>
        </ProjectsProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
