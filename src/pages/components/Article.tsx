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
    <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 relative z-20 h-full">
      <a href={link} target="_blank" aria-label="article-image">
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
          className="inline-flex px-4 py-2 rounded-sm bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          // className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          {/* <Icon /> */}
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
