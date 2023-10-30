import React from "react";
import { useRoutes } from "react-router-dom";

import "./styles/style.css";
import routes from "./router";

// import AOS from "aos";
// import "aos/dist/aos.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { customTheme } from "./theme";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

// AOS.init();

const App = () => {
  const allPages = useRoutes(routes);

  const appTheme = customTheme({
    theme: "light",
    direction: "ltr",
  });

  return (
    <React.Fragment>
      <Cursor isGelly={true} cursorBackgrounColor={"rgba(0,0,0,0.7)"} />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          {allPages}
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default App;
