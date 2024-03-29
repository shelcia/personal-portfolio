import React, { lazy, useRef } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Shelcia from "../../assets/images/images/me.webp";
import Journey from "./components/Journey";
import Scroller from "../common/Scroller";
import Skills from "./components/Skills";
import { CustomLoadable } from "../common/CustomPartLoader";

const AboutMe: React.FC = () => {
  const journeyToRef = useRef<HTMLDivElement>(null);
  const skillsToRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (scrollToRef: React.RefObject<HTMLDivElement>) => {
    if (scrollToRef.current) {
      // Step 3: Use the scrollIntoView method to scroll to the element
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Photography = CustomLoadable(
    lazy(() => import("./components/Photography"))
  );

  return (
    <>
      <Container sx={{ position: "relative" }} data-aos="fade-up">
        <Typography component={"h2"} className="section-title" sx={{ mt: 5 }}>
          About Me
        </Typography>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography className="about-desc">
              I am a confident and results-driven individual who thrives in
              problem-solving. With a strong focus on JavaScript, React and a
              passion for the MERN stack, I excel at tackling challenges
              head-on.
              <br />
              <br />
              With over three years of experience at companies like NASDAQ,
              HIRA, NYX Wolves, Solera, and Guvi, I&apos;ve honed my
              problem-solving skills. I&apos;m committed to open-source
              contributions and hold a Bachelor&apos;s degree from IIIT Chennai.
              Currently, I&apos;m pursuing a Master&apos;s in Information at UW
              Madison. I welcome collaboration and feedback to deliver excellent
              results.
              <br />
              <br />
              Let&apos;s connect and explore opportunities to collaborate or
              discuss how my skills can benefit your projects.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img src={Shelcia} alt="Shelcia" width={"100%"} height={"auto"} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 2 }}
            onClick={() => scrollToElement(journeyToRef)}
          >
            My Experience
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => scrollToElement(skillsToRef)}
            // sx={{ mt: { xs: 2, md: 0 } }}
          >
            My Skills
          </Button>
        </Box>
        <Scroller />
      </Container>

      <Journey journeyToRef={journeyToRef} />

      <Skills skillsToRef={skillsToRef} />

      <Photography />
    </>
  );
};

export default AboutMe;
