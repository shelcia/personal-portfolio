"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";
import { Card, ImgContentProps } from "@/types";

const ProjectImages = ({ images }: { images: Card[] }) => {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={images} />
    </div>
  );
};

export const ContentTitle: React.FC<ImgContentProps> = ({
  title,
  description,
}) => (
  <div>
    <p
      className={cn(
        "font-bold text-xl md:text-3xl text-white",
        calsans.className
      )}
    >
      {title}
    </p>
    <p className="font-normal text-base text-white"></p>
    {description && (
      <p
        className={cn(
          "font-normal text-base my-4 max-w-lg text-neutral-200",
          dmsans.className
        )}
      >
        {description}
      </p>
    )}
  </div>
);

export default ProjectImages;
