// components/Header.js
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { calSans, dmsans } from "@/utils/fonts";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
// import { IconBrandBehance, IconBrandMedium } from "@tabler/icons-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    // {
    //   Icon: IconBrandBehance,
    //   link: "https://www.behance.net/shelcia",
    //   alt: "Check out my works on behance",
    // },
    // {
    //   Icon: IconBrandMedium,
    //   link: "https://medium.com/@shelcia",
    //   alt: "Follow my work on medium",
    // },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div
          className={`text-3xl md:text-7xl font-bold dark:text-white text-center ${calSans.className}`}
        >
          Shelcia David
        </div>
        <div
          className={`font-extralight text-base md:text-3xl dark:text-neutral-200 py-4 px-10 text-center ${dmsans.className}`}
        >
          Confident and results-driven Full Stack developer and designer.
          Contributed to NASDAQ and startups like HIRA, NYX Wolves, Solera, and
          Guvi. Pursuing a Master&apos;s in Information at University of
          Wisconsin - Madison.
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
          <button
            className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${calSans.className}`}
          >
            Hire Me
          </button>
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
        <TooltipTrigger>
          <a href={link} target="_blank">
            <div className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
              {children}
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className={calSans.className}>{alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
