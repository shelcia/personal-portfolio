import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  //   CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { FeaturedProjectsContext } from "../../../context/FeaturedProjectsContext";
import GitStars from "../../../assets/icons/git-star.svg";
import GitForks from "../../../assets/icons/git-fork.svg";

const SelectedWorks = () => {
  const [mode, setMode] = useState("dev");
  const projects = useContext(FeaturedProjectsContext);
  console.log(projects);
  return (
    <>
      <Typography component={"h2"} className="section-title" sx={{ mt: 20 }}>
        Selected Works
      </Typography>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={(e) => setMode(e.target.value)}
          aria-label="text alignment"
        >
          <ToggleButton value="dev" aria-label="development">
            Development
          </ToggleButton>
          <ToggleButton value="design" aria-label="design">
            Design
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {projects.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <Card
              sx={{ maxWidth: "100%", boxShadow: "none", position: "relative" }}
            >
              {/* <CardActionArea> */}
              <CardMedia
                component="img"
                height="100%"
                image={project.image}
                alt="green iguana"
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(255, 255, 255, 0.3)",
                  color: "#000",
                  backdropFilter: "blur(5px)",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography gutterBottom variant="p">
                  {project.desc}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Box>
                    <Chip
                      icon={
                        <img src={GitForks} alt="" width={16} height={16} />
                      }
                      label={project.forks}
                      variant="outlined"
                      color="secondary"
                    />
                    <Chip
                      icon={
                        <img src={GitStars} alt="" width={16} height={16} />
                      }
                      label={project.stars}
                      variant="outlined"
                      color="secondary"
                    />
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ padding: "3px 4px", borderRadius: "50ex" }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
              {/* </CardActionArea> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SelectedWorks;
