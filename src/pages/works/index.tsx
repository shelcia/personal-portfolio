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
import { ProjectsContext } from "../../context/ProjectContext";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import { DesignItem, Project } from "../../types";
import { designs } from "../../context/DesignContext";

const Works: React.FC = () => {
  const projects: Project[] = useContext(ProjectsContext);

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
          <DevCard key={project.id} project={project} idx={idx} />
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
        {designs.items.map((project, idx) => (
          <DesignCard key={project.guid} project={project} idx={idx} />
        ))}
        {/* Render design works */}
      </Grid>
    </Container>
  );
};

export default Works;

interface DevCardProps {
  project: Project;
  idx: number;
}

const DevCard: React.FC<DevCardProps> = ({ project, idx }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef?.current) {
      VanillaTilt.init(tiltRef?.current, {
        max: 10,
        speed: 500,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any)?.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <Grid item xs={12} sm={4} md={3} key={project.id} ref={tiltRef}>
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
              <Typography className="project-title">{project.name}</Typography>
              <Typography className="project-desc">{project.desc}</Typography>
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

interface DesignCardProps {
  project: DesignItem;
  idx: number;
}

const DesignCard: React.FC<DesignCardProps> = ({ project, idx }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef?.current) {
      VanillaTilt.init(tiltRef?.current, {
        max: 10,
        speed: 500,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any)?.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <Grid item xs={12} sm={4} md={3} key={project.guid} ref={tiltRef}>
      <MuiLink
        href={project.link}
        target="_blank"
        data-aos={idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
        sx={{ color: "#000", textDecoration: "none" }}
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
              image={project.thumbnail}
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
              <Typography className="project-title">{project.title}</Typography>
              {/* <Typography className="project-desc">{project.}</Typography> */}
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
  );
};
