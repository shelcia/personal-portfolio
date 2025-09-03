import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface DotBackgroundProps {
  children: ReactNode;
}

const DotBackground: React.FC<DotBackgroundProps> = ({ children }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
       */}
      {children}
    </div>
  );
};

export default DotBackground;
