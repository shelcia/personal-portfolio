import React from "react";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/common/Topbar";

import "./styles/style.css";
import routes from "./router";
import { ProjectsProvider } from "./context/ProjectContext";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const allPages = useRoutes(routes);

  return (
    <React.Fragment>
      <ProjectsProvider>
        <TopBar />
        {allPages}
      </ProjectsProvider>
    </React.Fragment>
  );
};

export default App;
