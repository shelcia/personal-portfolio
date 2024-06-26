// components/Header.js
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { calsans, dmsans } from "@/utils/fonts";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShimmerButton } from "@/components/common/CustomButtons";
import Topbar from "@/components/common/Topbar";

const Header = () => {
  const icons = [
    {
      id: 1,
      Icon: GitHubLogoIcon,
      link: "https://github.com/shelcia",
      alt: "Check out my works on github",
    },
    {
      id: 2,
      Icon: LinkedInLogoIcon,
      link: "https://www.linkedin.com/in/shelcia/",
      alt: "Connect with me on linkedin",
    },
  ];

  return (
    <AuroraBackground>
      <Topbar />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div
          className={`text-5xl md:text-7xl md:mt-16 mt-8 font-bold dark:text-white text-center ${calsans.className} `}
        >
          Shelcia David
        </div>
        <div
          className={`font-light text-base max-w-7xl md:text-3xl dark:text-neutral-200 py-4 px-4 md:px-10 text-center ${dmsans.className}`}
        >
          Experienced Full Stack developer and designer. Contributed to NASDAQ
          and startups like HIRA, NYX Wolves, Solera, and Guvi. Pursuing
          Master&apos;s in Information at University of Wisconsin - Madison.
        </div>
        <div className="gap-2 flex">
          {/* <AnimatedTooltip items={icons}></AnimatedTooltip> */}
          {icons.map((icon, idx: number) => (
            <div key={icon.alt}>
              <IconButton link={icon.link} alt={icon.alt} index={idx}>
                <icon.Icon />
              </IconButton>
            </div>
          ))}
        </div>
        <Link href="/contact">
          <ShimmerButton title="Connect with me" />
        </Link>
      </motion.div>
    </AuroraBackground>
  );
};

export default Header;

interface IconButtonProps {
  link: string;
  alt: string;
  index: number;
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  link,
  alt,
  index,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={link} target="_blank" aria-label={alt}>
            <div className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
              {children}
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className={calsans.className}>{alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
