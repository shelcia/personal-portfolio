import { experience } from "@/context/ExperienceContext";
import { cn } from "@/utils/cn";
import { calSans, dmsans } from "@/utils/fonts";
import React from "react";

const Experience = () => {
  return (
    <>
      <h1 className={cn("text-5xl text-bold mb-8", calSans.className)}>
        Experience
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experience.map((itm) => (
          <li className="mb-10 ms-6" key={itm.date}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Icon />
              {/* <ExperienceIcon /> */}
            </span>
            <h3
              className={cn(
                "flex items-center mb-1 text-lg font-semibold text-zinc-800 dark:text-white",
                calSans.className
              )}
            >
              {itm.designation}-{itm.name}{" "}
            </h3>
            <time
              className={cn(
                "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                dmsans.className
              )}
            >
              {itm.date}
            </time>
            <p
              className={cn(
                "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
                dmsans.className
              )}
            >
              {itm.desc}
            </p>
            <div>
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
    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
  </svg>
);

const ExperienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <line
      x1="112"
      y1="112"
      x2="144"
      y2="112"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    />
    <rect
      x="32"
      y="64"
      width="192"
      height="144"
      rx="8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    />
    <path
      d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    />
    <path
      d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    />
  </svg>
);

const Badge = ({ title }: { title: string }) => (
  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
    {title}
  </span>
);
