import React, { useContext } from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Arrow from "../../assets/icons/toprightarrow.svg";
import { FeaturedProjectsContext } from "../../context/FeaturedProjectsContext";
import { designs } from "../../context/DesignContext";
import { Link } from "react-router-dom";

const Works = () => {
  const projects = useContext(FeaturedProjectsContext);
  return (
    <Container>
      <Typography component={"h1"} className="section-title">
        Development Works
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {projects.map((project) => (
          <Grid item xs={6} sm={4} md={3} key={project.id}>
            <Box>
              <Card
                sx={{
                  maxWidth: "100%",
                  position: "relative",
                  backgroundColor: "transparent",
                  boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
                  borderRadius: { xs: "8px", md: "28.92px" },
                  transform: "perspective(400px)",
                  transition: ".2s ease",
                }}
                className="featured-project-card"
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={project.image}
                  alt="project"
                />
              </Card>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box>
                  <Typography className="project-title">
                    {project.name}
                  </Typography>
                  <Typography className="project-desc">
                    {project.desc}
                  </Typography>
                </Box>
                <Box>
                  <Link to={`/works/${project.id}`}>
                    <IconButton sx={{ border: "1.25px solid #000" }}>
                      <img src={Arrow} alt="Arrow" width={20} height={20} />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Design Works
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {designs.items.map((design, idx) => (
          <Grid item xs={6} sm={4} md={3} key={idx}>
            <Box>
              <Card
                sx={{
                  maxWidth: "100%",
                  position: "relative",
                  backgroundColor: "transparent",
                  boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
                  borderRadius: { xs: "8px", md: "28.92px" },
                  transform: "perspective(400px)",
                  transition: ".2s ease",
                }}
                className="featured-project-card"
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={design.thumbnail}
                  alt="project"
                />
              </Card>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box>
                  <Typography className="project-title">
                    {design.title}
                  </Typography>
                  {/* <Typography className="project-desc">
                    {design.description}
                  </Typography> */}
                </Box>
                <Box>
                  <MuiLink href={design.link} target="_blank">
                    <IconButton sx={{ border: "1.25px solid #000" }}>
                      <img src={Arrow} alt="Arrow" width={20} height={20} />
                    </IconButton>
                  </MuiLink>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Typography component={"h2"} className="section-title">
        Photography
      </Typography> */}
    </Container>
  );
};

export default Works;
