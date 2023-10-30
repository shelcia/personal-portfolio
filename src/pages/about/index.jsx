import { Grid, Typography } from "@mui/material";
import React from "react";
import Shelcia from "../../assets/images/me.png";
import Journey from "./components/Journey";

const AboutMe = () => {
  return (
    <>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        About Me
      </Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography className="about-desc">
            I am a confident and results-driven individual who thrives in
            problem-solving. With a strong focus on JavaScript, React and a
            passion for the MERN stack, I excel at tackling challenges head-on.
            <br />
            <br />
            With over three years of experience at companies like NASDAQ, HIRA,
            NYX Wolves, Solera, and Guvi, I&apos;ve honed my problem-solving
            skills. I&apos;m committed to open-source contributions and hold a
            Bachelor&apos;s degree from IIIT Chennai. Currently, I&apos;m
            pursuing a Master&apos;s in Design and Innovation at UW Madison. I
            welcome collaboration and feedback to deliver excellent results.
            <br />
            <br />
            Let&apos;s connect and explore opportunities to collaborate or
            discuss how my skills can benefit your projects.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <img src={Shelcia} alt="Shelcia" width={"auto"} height={"200px"} />
        </Grid>
      </Grid>
      <Journey />
    </>
  );
};

export default AboutMe;
