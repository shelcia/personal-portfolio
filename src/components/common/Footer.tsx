import React from "react";
import Link from "next/link";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/cn";
import { dmsans } from "@/utils/fonts";

const links = [
  { href: "https://github.com/shelcia", label: "Github" },
  { href: "https://www.linkedin.com/in/shelcia/", label: "Linkedin" },
  { href: "https://medium.com/@shelcia", label: "Medium" },
  { href: "https://www.behance.net/shelcia", label: "Behance" },
];

const Footer = () => {
  return (
    <footer className={cn(`bg-zinc-50 rounded-lg`, dmsans.className)}>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center flex gap-1 flex-wrap items-center">
          <span>© 2025 Shelcia. Built with love </span>
          <HeartFilledIcon color="rgb(219 39 119)" />
          <span>using Next.js and Tailwind.</span>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={
                  index === links.length - 1
                    ? "hover:underline"
                    : "hover:underline me-4 md:me-6"
                }
                target="_blank"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
