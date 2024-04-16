import { cn } from "@/utils/cn";
import { calSans } from "@/utils/fonts";
import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className={cn("text-5xl text-bold mb-8", calSans.className)}>
        Skills
      </h1>
    </>
  );
};

export default Skills;
