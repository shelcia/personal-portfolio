import React, { useContext, useEffect, useState } from "react";
import { Box, Chip, Container, Grid, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";

const Work = () => {
  const { id } = useParams();

  const projectDetails = useContext(ProjectsContext);
  const [details, setDetails] = useState({
    name: "",
    description: "",
    techstack: [],
    deploy: true,
    deployment: "",
    code: "",
    imageURL: "",
  });

  useEffect(() => {
    const filterResults = projectDetails.filter((project) => project.id === id);
    setDetails(filterResults[0]);
  }, [projectDetails, id]);

  return (
    <>
      <Box
        sx={{
          //   background: "linear-gradient(180deg, #625FFF 0%, #FF6CF0 100%)",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          height: "12rem",
          textAlign: "center",
          mb: 4,
          mx: -3,
          mt: -3,
        }}
      >
        <Typography
          className="text-serif"
          sx={{
            color: "rgba(255, 255, 255, 0.20)",
            fontSize: "12rem",
            fontWeight: 800,
          }}
        >
          {details.name}
        </Typography>
      </Box>
      <Container>
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: "160%" }}
        >
          {details.description}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <WorkWidget title="Tech Stack">
              {details?.techstack?.map((tech) => (
                <Chip key={tech} label={tech} sx={{ mr: 1 }} />
              ))}
            </WorkWidget>
            <WorkWidget title="Github">
              <Link href={details.code} target="_blank">
                {details.code}
              </Link>
            </WorkWidget>
            {details.deploy && (
              <WorkWidget title="Deployment">
                <Link href={details.deployment} target="_blank">
                  {details.deployment}
                </Link>
              </WorkWidget>
            )}
          </Grid>
        </Box>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <img src={details.imageURL} alt="" width={"50%"} />
        </Box>
      </Container>
    </>
  );
};

export default Work;

const WorkWidget = ({ title, children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          borderRadius: "0.75rem",
          border: "1px dashed #E8E8E8",
          backgroundColor: "#fff",
          padding: 1,
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Grid>
  );
};
