import { experience } from "@/context/ExperienceContext";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";
import React from "react";

const Experience = () => {
  return (
    <>
      <h1
        className={cn("md:text-5xl text-3xl text-bold mb-8", calsans.className)}
      >
        Experience
      </h1>
      <ol className="relative border-s border-gray-200">
        {experience.map((itm) => (
          <li className="mb-10 ms-6" key={itm.desc}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
              <Icon />
              {/* <ExperienceIcon /> */}
            </span>
            <h3
              className={cn(
                "flex items-center mb-1 text-lg font-semibold text-zinc-800",
                calsans.className
              )}
            >
              {itm.designation}-{itm.name}{" "}
            </h3>
            <time
              className={cn(
                "block mb-2 text-sm font-normal leading-none text-gray-500",
                dmsans.className
              )}
            >
              {itm.year}
            </time>
            <p
              className={cn(
                "mb-4 text-base font-normal text-gray-500",
                dmsans.className
              )}
            >
              {itm.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {itm.skills.map((skill) => (
                <Badge key={skill} title={skill} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Experience;

const Icon = () => (
  <svg
    className="w-2.5 h-2.5 text-blue-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

export const Badge = ({ title }: { title: string }) => (
  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
    {title}
  </span>
);
