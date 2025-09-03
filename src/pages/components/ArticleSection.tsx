import { cn } from "@/utils/cn";
import { MediumArticle } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ArticleCard from "./Article";
import { dmsans } from "@/utils/fonts";

const ArticleSection = ({
  items,
  className,
}: {
  items: MediumArticle[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        // "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        "grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4",
        dmsans.className,
        className
      )}
    >
      {items &&
        items?.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-100 block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <ArticleCard
              key={item.pubDate}
              title={item.title}
              description={item.content}
              image={item.thumbnail}
              link={item.link}
            />
          </div>
        ))}
    </div>
  );
};

export default ArticleSection;
