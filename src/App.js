import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route to="/" exact component={LandingPage} />
          <Route to="/" exact component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
