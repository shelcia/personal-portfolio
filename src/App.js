import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProjectsProvider } from "./context/ProjectContext";

import TopBar from "./partials/Topbar";
import Loader from "./partials/Loading";

import "./styles/style.css";

const Home = lazy(() => import("./pages/Works/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Resume"));
const Project = lazy(() => import("./pages/Works/Project"));
const ErrorPage = lazy(() => import("./partials/404Page"));

const App = () => {
  return (
    <React.Fragment>
      <ProjectsProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <TopBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/project/:id" component={Project} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ProjectsProvider>
    </React.Fragment>
  );
};

export default App;
