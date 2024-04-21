import React from "react";
import "../../app/globals.css";

import Topbar from "@/components/common/Topbar";
import { dmsans, calsans } from "@/utils/fonts";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { articles } from "@/context/MediumContext";
import Footer from "@/components/common/Footer";
import ArticleSection from "../components/ArticleSection";
import Link from "next/link";

const Devlogs = () => {
  return (
    <>
      <Topbar />
      <main className="dark:bg-black bg-white mb-24">
        <div className="h-48 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1
            className={cn(
              "md:text-6xl text-3xl text-white relative z-20",
              calsans.className
            )}
          >
            Devlogs{" "}
          </h1>
          <p
            className={cn(
              "text-center mt-2 text-neutral-300 relative z-20",
              dmsans.className
            )}
          >
            Check out my tech articles on
            <Link
              href="https://shelcia.medium.com/"
              target="_blank"
              className="ms-1 hover:underline"
            >
              Medium!
            </Link>
          </p>
        </div>
        <div className="md:px-24 px-4 mt-4">
          <ArticleSection items={articles} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Devlogs;
