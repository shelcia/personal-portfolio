import React, { useContext, useEffect, useRef } from "react";
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
import VanillaTilt from "vanilla-tilt";

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
          <DevCard
            key={project.id}
            id={project.id}
            idx={idx}
            mockup={project.mockup}
            name={project.name}
            desc={project.desc}
          />
        ))}
      </Grid>
      <Typography
        component={"h2"}
        className="section-title"
        sx={{ mt: 10 }}
        data-aos="fade-up"
      >
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
              data-aos="fade-up"
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
                    loading="lazy"
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

const DevCard = ({ id, idx, mockup, name, desc }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 500,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      // Cleanup Tilt.js when the component unmounts
      tiltRef?.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <Grid item xs={12} sm={4} md={3} key={id} ref={tiltRef}>
      <Link
        to={`/works/${id}`}
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
              image={mockup}
              alt="project"
              loading="lazy"
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
              <Typography className="project-title">{name}</Typography>
              <Typography className="project-desc">{desc}</Typography>
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
  );
};
