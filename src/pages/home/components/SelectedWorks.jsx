import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { FeaturedProjectsContext } from "../../../context/FeaturedProjectsContext";
import Arrow from "../../../assets/icons/toprightarrow.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

const SelectedWorks = () => {
  const projects = useContext(FeaturedProjectsContext);
  return (
    <>
      <Typography
        component={"h2"}
        className="section-title"
        sx={{ mt: { xs: 2, md: 10 } }}
      >
        Selected Works
      </Typography>
      <Grid container spacing={4} sx={{ mt: { xs: 0, md: 3 } }}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <ProjectCard
              id={project.id}
              image={project.image}
              name={project.name}
              desc={project.desc}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "right", my: 6 }}>
        <Link to="/works">
          <Button
            sx={{ fontSize: "2rem", fontWeight: 200 }}
            className="text-serif"
          >
            Look into more works
            <img
              src={ChevronRight}
              alt="chevron-right"
              style={{ marginLeft: 5 }}
              height={"20px"}
              width={"20px"}
              loading="lazy"
            />
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SelectedWorks;

const ProjectCard = ({ id, image, name, desc }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 5,
      speed: 500,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      // Cleanup Tilt.js when the component unmounts
      tiltRef?.current?.vanillaTilt?.destroy();
    };
  }, []);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Link to={`/works/${id}`}>
      <Box data-aos="flip-up" ref={tiltRef}>
        <Card
          sx={{
            maxWidth: "100%",
            position: "relative",
            backgroundColor: "transparent",
            boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
            borderRadius: { xs: "16px", md: "28.92px" },
            transform: "perspective(400px)",
            transition: ".2s ease",
          }}
          className="featured-project-card"
        >
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt="project"
            loading={matches && id === "mocker" ? "eager" : "lazy"}
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
            <Typography className="featured-project-title">{name}</Typography>
            <Typography className="featured-project-desc">{desc}</Typography>
          </Box>
          <Box>
            <IconButton sx={{ border: "1.5px solid #000" }}>
              <img
                src={Arrow}
                alt="Arrow"
                width={34}
                height={34}
                loading="lazy"
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
