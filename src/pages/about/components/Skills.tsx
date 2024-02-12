import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { skills1, skills2 } from "../../../context/SkillsContext";

type Skill = {
  name: string;
  img: string;
};

type SkillsProps = {
  skillsToRef: React.RefObject<HTMLDivElement>;
};

const Skills: React.FC<SkillsProps> = ({ skillsToRef }) => {
  return (
    <Container ref={skillsToRef}>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Skills
      </Typography>
      <Grid container>
        <SkillSection skills={skills1} />
        <SkillSection skills={skills2} />
      </Grid>
    </Container>
  );
};

export default Skills;

type SkillSectionProps = {
  skills: Skill[];
};

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  return (
    <Grid item xs={12} md={6}>
      <ul style={{ listStyle: "none" }}>
        {skills.map((skill: Skill) => (
          <li
            key={skill.name}
            style={{
              fontWeight: 600,
              display: "flex",
              gap: 5,
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50ex",
                background: "#ffffff",
                boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                width="20px"
                height="20px"
              />
            </Box>{" "}
            <Typography sx={{ display: "inline-block" }}>
              {skill.name}
            </Typography>
          </li>
        ))}
      </ul>
    </Grid>
  );
};
