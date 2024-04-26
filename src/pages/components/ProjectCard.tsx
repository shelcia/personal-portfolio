"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { calsans, dmsans } from "@/utils/fonts";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  title: string;
  image?: string | StaticImageData;
  link: string | undefined;
  desc: string | undefined;
  name: string;
}

export const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
  title = "",
  image = "",
  link = "",
  desc = "",
  name = "",
}) => {
  return (
    <CardContainer
      className={`${dmsans.className} w-full flex flex-wrap justify-center`}
    >
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className={cn(
            "text-xl font-bold text-black dark:text-white",
            calsans.className
          )}
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className={cn(
            "text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",
            calsans.className
          )}
        >
          {desc}
        </CardItem>
        <Link href={`works/${name}`}>
          <CardItem
            translateZ="300"
            // rotateX={20}
            rotateZ={-2}
            className="w-full mt-4"
          >
            <Image
              src={image}
              height="750"
              width="750"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              priority={name === "mocker"}
            />
          </CardItem>
        </Link>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            translateX={-40}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-base font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <Link href={`works/${name}`}>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-sm bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              View Project
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "",
  image = "",
  link = "",
  desc = "",
  name = "",
}) => {
  return (
    <CardContainer
      className={`${dmsans.className} w-full flex flex-wrap justify-center`}
    >
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className={cn(
            "text-xl font-bold text-black dark:text-white",
            calsans.className
          )}
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <Link href={`works/${name}`}>
          <CardItem
            translateZ="300"
            // rotateX={20}
            rotateZ={-2}
            className="w-full mt-4"
          >
            <Image
              src={image}
              height="500"
              width="750"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              priority={true}
            />
          </CardItem>
        </Link>
        {/* <Link href={`works/${name}`}>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              height="500"
              width="750"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              priority={true}
            />
          </CardItem>
        </Link> */}

        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-md text-base font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <Link href={`works/${name}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-md dark:text-black text-white text-xs font-bold animate-shimmer-sm bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors"
            >
              View Project
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
