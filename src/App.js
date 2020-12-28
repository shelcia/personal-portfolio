import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TopBar from "./partials/Topbar";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
