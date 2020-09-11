import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/LandingPage/ProjectPage";
import { ProjectsProvider } from "./components/Projectcontext/ProjectContext.jsx";
import { OnGoingProvider } from "./components/Projectcontext/OnGoingContext";
import ErrorPage from "./components/Error";
import Loader from "./components/Loader.jsx";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let isLoading = null;
    isLoading = setTimeout(() => setLoading(false), 6000);
    return () => clearInterval(isLoading);
  });
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {!isLoading && (
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
      )}
    </React.Fragment>
  );
};

export default App;
