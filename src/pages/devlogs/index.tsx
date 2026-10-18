import React from "react";
import "../../app/globals.css";

import Topbar from "@/components/common/Topbar";
import { calsans } from "@/utils/fonts";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { articles } from "@/context/MediumContext";
import Footer from "@/components/common/Footer";
import ArticleSection from "@/components/sections/ArticleSection";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/common/CustomButtons";
import Seo from "@/components/common/Seo";

const Devlogs = () => {
  return (
    <>
      <Seo
        title="Devlogs | Shelcia David"
        description="Articles by Shelcia David on React, TypeScript, Node.js, contract testing and UX research, published on Medium."
        path="/devlogs"
      />
      <Topbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none bg-white mb-24"
      >
        <div className="h-48 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
          <span className="hidden md:block">
            <Boxes />
          </span>
          <h1
            className={cn(
              "md:text-6xl text-3xl text-white relative z-20",
              calsans.className,
            )}
          >
            Devlogs{" "}
          </h1>
          <p
            className={cn(
              "text-center mt-2 text-neutral-300 relative z-20",
              calsans.className,
            )}
          >
            Check out my tech articles on
            <Link
              href="https://shelcia.medium.com/"
              target="_blank"
              className="ms-1 hover:underline inline-flex items-center gap-1"
            >
              Medium! <ExternalLinkIcon />
            </Link>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="md:px-24 px-4 mt-4">
            <h2
              className={cn(
                "text:xl md:text-3xl font-bold text-black my-4",
                calsans.className,
              )}
            >
              Selected Articles
            </h2>
            <ArticleSection items={articles} />
            <div className="mt-4 w-full text-end">
              <ShimmerButton
                title="Read More on Medium"
                href="https://shelcia.medium.com/"
                external
              />
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Devlogs;
