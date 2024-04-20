import React from "react";
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
        {skills.map((skill, index) => (
          <Badge
            title={skill.name}
            key={index} // Use index as key since skill names might not be unique
            icon={skill.img}
            bgClass={skill.bgClass}
            color={skill.colorClass}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;

const Badge = ({
  title,
  icon,
  bgClass,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  bgClass: string;
  color: string;
}) => (
  <span
    style={{ backgroundColor: bgClass, color: color }}
    className="text-sm font-medium px-4 py-2.5 rounded dark:text-blue-300 flex items-center"
  >
    <span className="h-4 w-4 inline-block me-2">{icon}</span>
    {title}
  </span>
);
