import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProjectsProvider } from "./context/ProjectContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Home from "./pages/Works/Home";
import Project from "./pages/Works/Project";
import TopBar from "./partials/Topbar";
import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <ProjectsProvider>
        <BrowserRouter>
          <TopBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/:id" component={Project} />
          </Switch>
        </BrowserRouter>
      </ProjectsProvider>
    </React.Fragment>
  );
};

export default App;
