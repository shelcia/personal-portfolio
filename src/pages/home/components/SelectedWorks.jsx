import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FeaturedProjectsContext } from "../../../context/FeaturedProjectsContext";
import Arrow from "../../../assets/icons/toprightarrow.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";
// import gsap from "gsap";
// import GitStars from "../../../assets/icons/git-star.svg";
// import GitForks from "../../../assets/icons/git-fork.svg";

const SelectedWorks = () => {
  const projects = useContext(FeaturedProjectsContext);
  //   const ANGLE = 40;
  //   const cardRef = React.useRef(null);

  //   const handleHover = () => {
  //     const card = cardRef.current;
  //     gsap.to(card, {
  //       rotateX: -ANGLE,
  //       rotateY: ANGLE,
  //       transformOrigin: "center",
  //       boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.1)",
  //       duration: 0.2,
  //     });
  //   };

  //   const handleHoverExit = () => {
  //     const card = cardRef.current;
  //     gsap.to(card, {
  //       rotateX: 0,
  //       rotateY: 0,
  //       transformOrigin: "center",
  //       boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
  //       duration: 0.2,
  //     });
  //   };

  //   const ANGLE = 40;

  //   const handleHover = (event) => {
  //     const card = event.currentTarget;
  //     // console.log(card);
  //     let w = card.clientWidth;
  //     let h = card.clientHeight;
  //     let y = ((w * 0.5) / w) * ANGLE;
  //     let x = ((1 - h * 0.5) / h) * ANGLE;

  //     console.log({ y, x });

  //     gsap.to(card, {
  //       rotateX: `${x}deg`,
  //       rotateY: `${y}deg`,
  //       boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.1)",
  //       duration: 0.2, // Animation duration
  //     });
  //   };

  //   const handleHoverExit = (event) => {
  //     const card = event.currentTarget;
  //     gsap.to(card, {
  //       rotateX: 0,
  //       rotateY: 0,
  //       rotateZ: 0,
  //       boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
  //       duration: 0.2, // Animation duration
  //     });
  //   };

  return (
    <>
      <Typography component={"h2"} className="section-title" sx={{ mt: 10 }}>
        Selected Works
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <Box>
              <Card
                // ref={cardRef}
                sx={{
                  maxWidth: "100%",
                  position: "relative",
                  backgroundColor: "transparent",
                  boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
                  borderRadius: { xs: "16px", md: "28.92px" },
                  transform: "perspective(400px)",
                  //   transition: "all, 0.2s ease-in",
                  transition: ".2s ease",

                  //   "&:hover": {
                  //     transform: "rotate(50deg, 50deg)",
                  //   },
                  //   transformStyle: "preserve-3d", // Enable 3D transforms
                  //   transformOrigin: "center", // Set the pivot point to the center
                }}
                // onMouseEnter={handleHover}
                // onMouseLeave={handleHoverExit}
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
                  <Typography className="featured-project-title">
                    {project.name}
                  </Typography>
                  <Typography className="featured-project-desc">
                    {project.desc}
                  </Typography>
                </Box>
                <Box>
                  <IconButton sx={{ border: "1.5px solid #000" }}>
                    <img src={Arrow} alt="Arrow" width={34} height={34} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
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
            />
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SelectedWorks;
