import React, { lazy } from "react";
import {
  Box,
  Button,
  Container,
  // Link as MuiLink,
  Typography,
} from "@mui/material";
// import SelectedWorks from "./components/SelectedWorks";
import SocialIcons from "../common/SocialIcons";
import Arrow from "../../assets/icons/toprightarrow.svg";
import { Link } from "react-router-dom";
import Scroller from "../common/Scroller";
import Unicorn from "../../assets/images/images/unicorn.webp";
import { CustomLoadable } from "../common/CustomPartLoader";

const HomePage = () => {
  const SelectedWorks = CustomLoadable(
    lazy(() => import("./components/SelectedWorks"))
  );

  return (
    <Container sx={{ position: "relative" }} data-aos="fade-up">
      <Typography
        className="name-title"
        // data-scroll
        // data-scroll-speed="4"
        // data-scroll-position="top"
        // data-scroll-direction="horizontal"
      >
        Shelcia David{" "}
        <img src={Unicorn} alt="unicorn emoji" width={"48px"} height={"48px"} />
      </Typography>

      <Typography
        sx={{ mt: 4 }}
        className="name-desc"
        // data-scroll
        // data-scroll-speed="2"
        // data-scroll-position="top"
        // data-scroll-direction="horizontal"
      >
        Confident and results-driven Full Stack developer and designer.
        Contributed to <b>NASDAQ</b> and startups like HIRA, NYX Wolves, Solera,
        and Guvi. Pursuing a Master&apos;s in <i>Information</i> at{" "}
        <b>University of Wisconsin - Madison</b>.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "flex-start", md: "center" },
          mt: 3,
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <SocialIcons />
        </Box>
        <Link to="/contact">
          <Button
            sx={{
              fontSize: { xs: "1rem", md: "1.75rem" },
              fontWeight: 600,
              textDecoration: "underline",
              pl: { xs: 0 },
            }}
          >
            Hire Me
            <img src={Arrow} alt="arrow" width={34} height={34} />
          </Button>
        </Link>
      </Box>
      <SelectedWorks />
      <Scroller />
    </Container>
  );
};

export default HomePage;
