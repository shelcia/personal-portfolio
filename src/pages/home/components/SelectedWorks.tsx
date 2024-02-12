import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Arrow from "../../../assets/icons/toprightarrow.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { ProjectsContext } from "../../../context/ProjectContext";

interface Project {
  id: string;
  mockup?: string | undefined;
  name: string;
  desc?: string | undefined;
}

const SelectedWorks: React.FC = () => {
  const projects = useContext(ProjectsContext);

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
        {[...projects?.slice(0, 4)]?.map((project: Project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <ProjectCard
              id={project.id}
              mockup={project.mockup}
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

interface ProjectCardProps {
  id: string;
  mockup?: string;
  name: string;
  desc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  mockup,
  name,
  desc,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 500,
        glare: true,
        "max-glare": 0.5,
      });

      return () => {
        // Cleanup Tilt.js when the component unmounts
        (tiltRef.current as any)?.current?.vanillaTilt?.destroy();
      };
    }
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
            image={mockup}
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
