"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React, { useState, useRef, useEffect } from "react";
import Mockup1 from "@/assets/images/mocker/1-1.webp";
import Mockup2 from "@/assets/images/mocker/2.webp";
import Mockup3 from "@/assets/images/mocker/3.webp";
import Mockup4 from "@/assets/images/mocker/4.webp";
import Mockup5 from "@/assets/images/mocker/5.webp";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";

const ProjectImages = () => {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const ContentTitle = () => (
  <div>
    <p
      className={cn(
        "font-bold text-xl md:text-3xl text-white",
        calsans.className
      )}
    >
      Screen title
    </p>
    <p className="font-normal text-base text-white"></p>
    <p
      className={cn(
        "font-normal text-base my-4 max-w-lg text-neutral-200",
        dmsans.className
      )}
    >
      screen Descripption
    </p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <ContentTitle />,
    className: "col-span-6",
    thumbnail: Mockup1,
  },
  {
    id: 2,
    content: <ContentTitle />,
    className: "col-span-6",
    thumbnail: Mockup2,
  },
  {
    id: 3,
    content: <ContentTitle />,
    className: "col-span-6",
    thumbnail: Mockup3,
  },
  {
    id: 4,
    content: <ContentTitle />,
    className: "col-span-6",
    thumbnail: Mockup4,
  },
];

export default ProjectImages;
