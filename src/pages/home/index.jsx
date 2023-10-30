import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import SelectedWorks from "./components/SelectedWorks";
import SocialIcons from "../common/SocialIcons";
import Arrow from "../../assets/icons/toprightarrow.svg";
import Scroller from "../../assets/images/scroller.png";
// import LocomotiveScroll from "locomotive-scroll";

const HomePage = () => {
  const scrollRef = React.createRef();

  //   useEffect(() => {
  //     // eslint-disable-next-line no-unused-vars
  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //     });
  //   }, [scroll]);

  return (
    <Container sx={{ position: "relative" }} ref={scrollRef}>
      <Typography
        className="name-title"
        data-scroll
        data-scroll-speed="4"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >
        Shelcia David 🦄
      </Typography>

      <Typography
        sx={{ mt: 4 }}
        className="name-desc"
        data-scroll
        data-scroll-speed="2"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >
        Confident and results-driven Full Stack developer and designer.
        Contributed to <b>NASDAQ</b> and startups like HIRA, NYX Wolves, Solera,
        and Guvi. Pursuing a Master&apos;s in <i>Design and Innovation</i> at{" "}
        <b>UW Madison</b>.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <SocialIcons />
        </Box>
        <Button
          sx={{
            fontSize: "1.75rem",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Hire Me
          <img src={Arrow} alt="arrow" width={34} height={34} />
        </Button>
      </Box>

      <SelectedWorks />
      <img
        src={Scroller}
        alt="scroller"
        style={{ position: "absolute", top: 24, right: -15 }}
        height={300}
        width={30}
      />
    </Container>
  );
};

export default HomePage;
