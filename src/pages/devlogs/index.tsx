import React from "react";
import "../../app/globals.css";

import Topbar from "@/components/common/Topbar";
import { SparklesCore } from "@/components/ui/sparkles";
import ArticleCard from "../components/Article";
import { dmsans } from "@/utils/fonts";
import { calSans } from "../contact";

const Devlogs = () => {
  return (
    <>
      <Topbar />
      <main className="dark:bg-black bg-white mt-24">
        <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1
            className={`md:text-6xl text-3xl lg:text-6xl font-bold text-center dark:text-white relative z-20 ${calSans.className}`}
          >
            Devlogs
          </h1>
          <div className="w-[20rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000"
            />

            {/* Radial Gradient to prevent sharp edges */}
            {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
          </div>
        </div>
        <div className="px-24">
          <div
            className={`grid grid-cols-1 lg:grid-cols-4 gap-2 ${dmsans.className}`}
          >
            {/* <ArticleCard />
            <ArticleCard />
            <ArticleCard /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Devlogs;
