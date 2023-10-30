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
        <Grid item xs={12} md={6}>
          I am a confident and results-driven individual who thrives in
          problem-solving. With a strong focus on JavaScript, React and a
          passion for the MERN stack, I excel at tackling challenges head-on.
          <br />
          <br />
          With over three years of experience at companies like NASDAQ, HIRA,
          NYX Wolves, Solera, and Guvi, I&apos;ve honed my problem-solving
          skills. I&apos;m committed to open-source contributions and hold a
          Bachelor&apos;s degree from IIIT Chennai. Currently, I&apos;m pursuing
          a Master&apos;s in Design and Innovation at UW Madison. I welcome
          collaboration and feedback to deliver excellent results.
          <br />
          <br />
          Let&apos;s connect and explore opportunities to collaborate or discuss
          how my skills can benefit your projects.
          {/* I am a confident and results-driven individual who thrives in
        problem-solving. With a strong focus on JavaScript, React and a passion
        for the MERN stack, I excel at tackling challenges head-on.
        <br />
        <br />
        I have a keen ability to make informed decisions and anticipate
        potential issues. With over three years of experience as a software
        developer and designer, I have contributed my expertise to a range of
        companies, including established players like NASDAQ, as well as
        startups such as HIRA, NYX Wolves, Solera, and Guvi. My commitment to
        continuous improvement is evident in my open-source contributions; you
        can explore some of the tools I&apos;ve developed on my GitHub profile.
        I hold a Bachelor&apos;s degree from IIIT Chennai, where I laid the
        foundation for my career in the tech industry. Currently, I am pursuing
        a Master&apos;s in Design and Innovation at UW Madison, where I am
        further honing my skills and knowledge in the field. In addition to my
        academic pursuits, I also take on freelance projects when time permits,
        and I&apos;m delighted to hear that some clients find my work to exceed
        their expectations.
        <br />
        <br />I welcome constructive feedback and constantly strive for
        excellence in all that I do. Let&apos;s connect and explore
        opportunities to collaborate or discuss how my skills can benefit your
        projects. */}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Shelcia} alt="Shelcia" width={"auto"} height={"120px"} />
        </Grid>
      </Grid>
      <Journey />
    </>
  );
};

export default AboutMe;
