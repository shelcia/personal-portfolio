import React, { useRef } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Shelcia from "../../assets/images/me.png";
import Journey from "./components/Journey";
import Scroller from "../common/Scroller";
import Skills from "./components/Skills";
import Photography from "./components/Photography";

const AboutMe = () => {
  const journeyToRef = useRef(null);
  const skillsToRef = useRef(null);

  const scrollToElement = (scrollToRef) => {
    if (scrollToRef.current) {
      // Step 3: Use the scrollIntoView method to scroll to the element
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container sx={{ position: "relative" }}>
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
              Currently, I&apos;m pursuing a Master&apos;s in Design and
              Innovation at UW Madison. I welcome collaboration and feedback to
              deliver excellent results.
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
        <Box sx={{ mt: 4 }}>
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
