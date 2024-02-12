import React from "react";
import { Box, CssBaseline, Divider, Toolbar } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import WorkWithMeBanner from "../pages/common/WorkWithMeBanner";
// import LocomotiveScroll from "locomotive-scroll";

const Layout: React.FC = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;

  // const scrollRef = React.createRef();

  // React.useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current.children[0],
  //     smooth: true,
  //   });

  //   return () => {
  //     // Clean up Locomotive Scroll instance
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <>
      <Box
        // sx={{ display: "flex" }}
        // className={currentRouteName === "/" ? "home-body" : "body"}
        minHeight={"100%"}
        // ref={scrollRef}
      >
        <CssBaseline />
        <Topbar />
        <Box component="main" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Outlet />
        </Box>
        {currentRouteName !== "/contact" && <WorkWithMeBanner />}
        <Divider />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
