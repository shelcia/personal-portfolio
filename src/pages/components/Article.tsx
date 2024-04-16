"use client";
import Image from "next/image";
import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative z-20 h-full">
      <a href={link} target="_blank">
        <div className="relative w-full h-40">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            alt=""
          />
        </div>
      </a>
      <div className="p-5">
        <a href={link} target="_blank">
          <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden line-clamp-2">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <Icon />
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;

const Icon = () => {
  return (
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
    // <svg
    //   width="15"
    //   height="15"
    //   viewBox="0 0 15 15"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
    //     fill="currentColor"
    //     fill-rule="evenodd"
    //     clip-rule="evenodd"
    //   ></path>
    // </svg>
  );
};
