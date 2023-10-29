import { Grid } from "@mui/material";
import React from "react";
import Shelcia from "../../assets/images/me.png";

const AboutMe = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        I am a confident and results-driven individual who thrives in
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
        projects.
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Shelcia} alt="Shelcia" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
