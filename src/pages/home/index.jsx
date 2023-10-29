import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
// import Github from "../../assets/icons/github.svg";
// import LinkedIn from "../../assets/icons/linkedin.svg";
// import Behance from "../../assets/icons/behance.svg";
// import Medium from "../../assets/icons/medium.svg";
import SelectedWorks from "./components/SelectedWorks";

const HomePage = () => {
  //   const icons = [
  //     {
  //       icon: Github,
  //       link: "https://github.com/shelcia",
  //       alt: "github",
  //     },
  //     {
  //       icon: LinkedIn,
  //       link: "https://github.com/shelcia",
  //       alt: "linkedin",
  //     },
  //     {
  //       icon: Behance,
  //       link: "https://github.com/shelcia",
  //       alt: "behance",
  //     },
  //     {
  //       icon: Medium,
  //       link: "https://github.com/shelcia",
  //       alt: "medium",
  //     },
  //   ];

  return (
    <Container>
      <Typography
        className="text-serif"
        sx={{
          fontSize: "10rem",
          fontWeight: "bold",
          fontStyle: "italic",
          lineHeight: 1.3,
        }}
      >
        Shelcia David
      </Typography>

      <Typography
        // className="text-serif"
        sx={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        Full Stack Developer and Designer living in US
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
          width: "100%",
        }}
      >
        {/* {icons.map((icon) => (
          <Tooltip key={icon.alt} title={icon.alt}>
            <Link href={icon.link}>
              <IconButton>
                <img src={icon.icon} alt={icon.alt} height={20} width={20} />
              </IconButton>
            </Link>
          </Tooltip>
        ))} */}

        <Button
          variant="contained"
          color="secondary"
          sx={{
            boxShadow: "inset -2px -5px 0 0 rgba(0,0,0,.25)",
            borderRadius: "0.75rem",
            padding: "14px 18px",
          }}
        >
          Check out my Work
        </Button>
      </Box>
      <SelectedWorks />
    </Container>
  );
};

export default HomePage;
