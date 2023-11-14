import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectsProvider } from "./context/ProjectContext";

import "@fontsource-variable/figtree";
import { FeaturedProjectsProvider } from "./context/FeaturedProjectsContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <FeaturedProjectsProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </FeaturedProjectsProvider>
  </BrowserRouter>
);
