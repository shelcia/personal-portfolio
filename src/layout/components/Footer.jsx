import { Box, Typography } from "@mui/material";
import React from "react";
import SocialIcons from "../../pages/common/SocialIcons";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ display: "flex", p: 4, justifyContent: "space-between" }}
    >
      <Typography sx={{ fontWeight: 500 }}>
        Developed & Designed by Shelcia.
      </Typography>
      <Box>
        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Footer;
