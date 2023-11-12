import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ShelciaMemoji from "../../assets/images/images/shelcia-memoji.webp";
import { Link } from "react-router-dom";

const WorkWithMeBanner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #17181A 0%, #363636 100%)",
        display: "flex",
        justifyContent: "space-between",
        py: 4,
        px: { xs: 2, md: 6 },
        position: "relative",
        mt: { md: 10, xs: 1 },
      }}
    >
      <Container>
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "'Migra', serif",
            fontSize: { md: "3.75rem", xs: "2.5rem" },
            fontWeight: 800,
          }}
        >
          Interested in Working with me ?
        </Typography>
        <Link to="/contact">
          <Button
            sx={{
              borderRadius: "0.5rem",
              boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
            }}
            color="secondary"
            variant="contained"
          >
            Connect with Me
          </Button>
        </Link>
      </Container>
      <Box sx={{ width: 240, display: { md: "block", xs: "none" } }}>
        <img
          src={ShelciaMemoji}
          alt="shelcia"
          style={{ position: "absolute", right: 60, top: -60 }}
          height={240}
        />
      </Box>
    </Box>
  );
};

export default WorkWithMeBanner;
