import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  const skills1 = [
    "React",
    "Javascript",
    "React Native",
    "Typescript",
    "NodeJs",
    "NextJs",
    "Python",
    "Vue",
    "GoLang",
    "SASS",
  ];
  const skills2 = [
    "Figma",
    "AdobeXD",
    "ExpressJs",
    "MUI",
    "Bootstrap",
    "GIT",
    "Docker",
    "MongoDB",
    "Tailwind",
  ];
  return (
    <Container>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Skills
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ul>
            {skills1.map((skill) => (
              <li key={skill} style={{ fontWeight: 600 }}>
                {skill}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul>
            {skills2.map((skill) => (
              <li key={skill} style={{ fontWeight: 600 }}>
                {skill}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
