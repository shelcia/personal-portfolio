"use client";
import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HamburgerMenuIcon,
  MixIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import "../../app/globals.css";
import { cn } from "@/utils/cn";
import { dmsans } from "@/utils/fonts";

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add logic here to save the dark mode preference to localStorage or cookies
  };

  const navItems = [
    {
      name: "Works",
      link: "/works",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Devlogs",
      link: "/devlogs",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    // <header
    //   className={`sticky top-0 flex h-16 items-center gap-4 border-b bg-${
    //     theme === "light" ? "background" : "dark-bg"
    //   } px-4 md:px-6`}
    // >
    <header
      className={cn(
        `
  bg-transparent absolute  top-0 z-30 w-full
      rounded-lg px-6 py-8 ring-1 ${
        darkMode ? "ring-slate-900/5" : "ring-gray-300/5"
      } `,
        dmsans.className
      )}
      //   className={`flex h-16 items-center gap-4 border-b bg-${
      //     theme === "light" ? "background" : "dark-bg"
      //   } px-4 md:px-6`}
    >
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <MixIcon className="h-6 w-6" />
          <span className="sr-only">Shelcia</span>
        </Link>
        {navItems.map((nav) => (
          <Link
            href={nav.link}
            className="text-foreground transition-colors hover:text-foreground"
            key={nav.name}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shrink-0 md:hidden">
            <HamburgerMenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">Shelcia.</span>
            </Link>
            {navItems.map((nav) => (
              <Link
                href={nav.link}
                className="text-muted-foreground hover:text-foreground"
                key={nav.name}
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <button onClick={toggleDarkMode}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div> */}
    </header>
  );
};

export default Topbar;
