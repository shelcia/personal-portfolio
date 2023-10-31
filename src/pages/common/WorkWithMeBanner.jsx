import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ShelciaMemoji from "../../assets/images/shelcia-memoji.png";
import { Link } from "react-router-dom";

const WorkWithMeBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#17181A",
        display: "flex",
        justifyContent: "space-between",
        py: 4,
        px: 6,
        position: "relative",
        mt: 10,
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
              // background: "#F0F0F0",
              boxShadow: "20px 20px 60px 0px rgba(0, 0, 0, 0.05)",
              // padding: "1.25rem 3.75rem",
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
