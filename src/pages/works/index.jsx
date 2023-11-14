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
// import { FeaturedProjectsContext } from "../../context/FeaturedProjectsContext";
import { designs } from "../../context/DesignContext";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";

const Works = () => {
  const projects = useContext(ProjectsContext);
  return (
    <Container data-aos="fade-up">
      <Typography component={"h1"} className="section-title">
        Development Works
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ mt: { xs: 0, md: 3 } }}
        data-aos="fade-up"
      >
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={4} md={3} key={project.id}>
            <Link
              to={`/works/${project.id}`}
              data-aos={idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
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
                    image={project.mockup}
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
                    <IconButton sx={{ border: "1.25px solid #000" }}>
                      <img src={Arrow} alt="Arrow" width={20} height={20} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Design Works
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ mt: { xs: 0, md: 3 } }}
        data-aos="fade-up"
      >
        {designs.items.map((design, idx) => (
          <Grid item xs={12} sm={4} md={3} key={idx}>
            <MuiLink
              href={design.link}
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
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
                    <Typography
                      className="project-title"
                      sx={{
                        color: "#17181a",
                      }}
                    >
                      {design.title}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton sx={{ border: "1.25px solid #000" }}>
                      <img src={Arrow} alt="Arrow" width={20} height={20} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Works;
