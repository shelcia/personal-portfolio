import { Box, CssBaseline, Divider, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import WorkWithMeBanner from "../pages/common/WorkWithMeBanner";

const Layout = () => {
  //   const location = useLocation();
  //   const currentRouteName = location.pathname;

  return (
    <>
      <Box
        // sx={{ display: "flex" }}
        // className={currentRouteName === "/" ? "home-body" : "body"}
        minHeight={"100%"}
      >
        <CssBaseline />
        <Topbar />
        <Box component="main" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Outlet />
        </Box>
        <WorkWithMeBanner />
        <Divider />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
