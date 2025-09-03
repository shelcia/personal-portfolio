import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ children }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      {children}
    </div>
  );
};

export default GridBackground;
