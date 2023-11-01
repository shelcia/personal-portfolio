import React from "react";
import { IconButton, Link, Tooltip } from "@mui/material";
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

  return (
    <>
      {icons.map((icon) => (
        <Tooltip key={icon.alt} title={icon.alt}>
          <Link href={icon.link}>
            <IconButton sx={{ p: "0.75rem", ml: 2 }} className="social-icons">
              <img src={icon.icon} alt={icon.alt} height={24} width={24} />
            </IconButton>
          </Link>
        </Tooltip>
      ))}
    </>
  );
};

export default SocialIcons;
