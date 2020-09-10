import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
