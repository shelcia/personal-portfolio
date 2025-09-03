import React from "react";
import { skills /*, skillSlug */ } from "@/context/SkillsContext";
import { cn } from "@/utils/cn";
import { calsans } from "@/utils/fonts";
// import { IconCloud } from "@/components/ui/icon-cloud";

const Skills = () => {
  // const images = skillSlug.map(
  //   (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  // );

  return (
    <>
      <h1
        className={cn("md:text-5xl text-3xl text-bold mb-8", calsans.className)}
      >
        Skills
      </h1>
      <div className="relative lg:h-full md:h-full sm:h-full h-full min-h-[75vh] lg:min-h-[50vh] md:min-h-[30vh]">
        {/* <div className="absolute bg-[rgba(255,255,255,0.95)] w-full opacity-35">
          <IconCloud images={images} />
        </div> */}
        <div className="absolute flex gap-2 flex-wrap w-full z-10">
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
    className={cn(
      "text-sm font-medium px-4 py-2.5 rounded flex items-center",
      calsans.className
    )}
  >
    <span className="h-4 w-4 inline-block me-2">{icon}</span>
    {title}
  </span>
);
