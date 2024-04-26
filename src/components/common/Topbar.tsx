"use client";
import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon, MixIcon } from "@radix-ui/react-icons";
import "../../app/globals.css";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  return (
    <header
      className={cn(
        "bg-transparent w-full rounded-lg px-4 sm:px-24 md:py-6 py-3 sticky z-40",
        dmsans.className
      )}
    >
      <nav className="bg-transparent border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto py-0">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <MixIcon className="h-6 w-6 stroke-2" />
            <span className="sr-only">Shelcia</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <HamburgerMenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((nav) => (
                <li key={nav.name}>
                  <Link
                    href={nav.link}
                    className={cn(
                      "block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500",
                      pathname === nav.link
                        ? "text-blue-500"
                        : "text-muted-foreground",
                      calsans.className
                    )}
                    aria-current="page"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
