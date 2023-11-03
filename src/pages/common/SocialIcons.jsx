import React from "react";
import { IconButton, Link, Tooltip, useMediaQuery } from "@mui/material";
import Github from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Behance from "../../assets/icons/behance.svg";
import Medium from "../../assets/icons/medium.svg";

const SocialIcons = () => {
  const icons = [
    {
      icon: Github,
      link: "https://github.com/shelcia",
      alt: "Check out my works on github",
    },
    {
      icon: LinkedIn,
      link: "https://github.com/shelcia",
      alt: "Connect with me on linkedin",
    },
    {
      icon: Behance,
      link: "https://github.com/shelcia",
      alt: "Check out my works on behance",
    },
    {
      icon: Medium,
      link: "https://github.com/shelcia",
      alt: "Follow my work on medium",
    },
  ];

  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      {icons.map((icon) => (
        <Tooltip key={icon.alt} title={icon.alt}>
          <Link href={icon.link} target="_blank">
            <IconButton
              sx={{ p: "0.75rem", ml: { xs: 0.5, md: 2 } }}
              className="social-icons"
            >
              {matches ? (
                <img src={icon.icon} alt={icon.alt} height={24} width={24} />
              ) : (
                <img src={icon.icon} alt={icon.alt} height={16} width={16} />
              )}
            </IconButton>
          </Link>
        </Tooltip>
      ))}
    </>
  );
};

export default SocialIcons;
