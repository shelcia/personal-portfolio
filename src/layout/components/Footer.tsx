import React from "react";
import { Box, Typography } from "@mui/material";
import SocialIcons from "../../pages/common/SocialIcons";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        p: 4,
        justifyContent: "space-between",
        gap: 2,
        flexDirection: { xs: "column", md: "row" },
      }}
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
