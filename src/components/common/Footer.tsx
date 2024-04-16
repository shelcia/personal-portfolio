import { dmsans } from "@/utils/fonts";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const Footer = () => {
  return (
    <footer
      className={`bg-zinc-50 rounded-lg dark:bg-gray-800 ${dmsans.className}`}
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Shelcia . Built with love and also Next.js and tailwind.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/shelcia"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <Separator orientation="vertical" className="text-slate-800" />
          <li>
            <a
              href="https://www.linkedin.com/in/shelcia/"
              className="hover:underline me-4 md:me-6"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@shelcia"
              className="hover:underline me-4 md:me-6"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/shelcia"
              className="hover:underline"
            >
              Behance
            </a>
          </li>
        </ul>
      </div>
    </footer>

    // <div>
    //   <div className="space-y-1">
    //     <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    //     <p className="text-sm text-muted-foreground">
    //       An open-source UI component library.
    //     </p>
    //   </div>
    //   <Separator className="my-4" />
    //   <div className="flex h-5 items-center space-x-4 text-sm">
    //     <div>Blog</div>
    //     <Separator orientation="vertical" />
    //     <div>Docs</div>
    //     <Separator orientation="vertical" />
    //     <div>Source</div>
    //   </div>
    // </div>
  );
};

export default Footer;
