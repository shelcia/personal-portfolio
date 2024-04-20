"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Project } from "@/types";
import { calSans } from "@/utils/fonts";
import { StarIcon } from "@radix-ui/react-icons";
import ExternalIcon from "@/assets/icons/ExternalIcon";
import Link from "next/link";

const ProjectInfoCards = ({ project }: { project: Project }) => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      <BentoGridItem
        header={
          <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
          >
            <motion.div
              variants={first}
              className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
              <h3 className={cn("sm:text-base text-sm", calSans.className)}>
                Tech Stack
              </h3>
              {/* <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
              Just code in Vanilla Javascript
            </p> */}
              <div className="flex gap-1 flex-wrap w-full justify-center mt-4">
                {project?.techstack?.map?.((tech) => (
                  <span
                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
              <h3 className={cn("sm:text-base text-sm", calSans.className)}>
                Github
              </h3>
              <Link
                href={project.code}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
              >
                Link
                <ExternalIcon />
              </Link>

              {project.deployment && (
                <>
                  <h3 className={cn("sm:text-base text-sm", calSans.className)}>
                    Deployment
                  </h3>
                  <Link
                    href={project.deployment}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex"
                  >
                    Link
                    <ExternalIcon />
                  </Link>
                </>
              )}
            </motion.div>
            <motion.div
              variants={second}
              className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
              <h3 className={cn("sm:text-base text-sm", calSans.className)}>
                On Github
              </h3>

              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <StarIcon />
                  12
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <StarIcon />
                  30
                </button>
              </div>
            </motion.div>
          </motion.div>
        }
        className={cn("[&>p:text-lg]", "md:col-span-4")}
      />
    </BentoGrid>
  );
};

export default ProjectInfoCards;
