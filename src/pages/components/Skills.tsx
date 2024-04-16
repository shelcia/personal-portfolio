import React, { ReactNode } from "react";
import { skills } from "@/context/SkillsContext";
import { cn } from "@/utils/cn";
import { calSans } from "@/utils/fonts";

const Skills = () => {
  return (
    <>
      <h1 className={cn("text-5xl text-bold mb-8", calSans.className)}>
        Skills
      </h1>
      <div className="flex gap-2 flex-wrap w-full">
        {skills.map((skill) => (
          <Badge title={skill.name} key={skill.name} icon={skill.img} />
        ))}
      </div>
    </>
  );
};

export default Skills;

const Badge = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-4 py-2.5 rounded dark:bg-blue-900 dark:text-blue-300 flex items-center">
    <span className="h-4 w-4 inline-block me-2">{icon}</span>
    {title}
  </span>
);
