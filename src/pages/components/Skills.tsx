import React from "react";
import { skillGroups } from "@/context/SkillsContext";
import { cn } from "@/utils/cn";
import { calsans } from "@/utils/fonts";

const Skills = () => {
  return (
    <>
      <h1
        className={cn("md:text-5xl text-3xl text-bold mb-8", calsans.className)}
      >
        Skills
      </h1>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h2
              className={cn(
                "text-xl md:text-2xl text-neutral-800 mb-3",
                calsans.className,
              )}
            >
              {group.title}
            </h2>
            <div className="flex gap-2 flex-wrap">
              {group.skills.map((skill) => (
                <Badge
                  title={skill.name}
                  key={skill.name}
                  icon={skill.img}
                  bgClass={skill.bgClass}
                  color={skill.colorClass}
                />
              ))}
            </div>
          </section>
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
  icon?: React.ReactNode;
  bgClass: string;
  color: string;
}) => (
  <span
    style={{ backgroundColor: bgClass, color: color }}
    className={cn(
      "text-sm font-medium px-4 py-2.5 rounded flex items-center",
      calsans.className,
    )}
  >
    {icon && <span className="h-4 w-4 inline-block me-2">{icon}</span>}
    {title}
  </span>
);
