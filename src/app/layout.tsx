import type { Metadata } from "next";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { dmsans } from "@/utils/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Shelcia's Portfolio",
  description:
    "Confident and results-driven Full Stack developer and designer. Contributed to NASDAQ and startups like HIRA, NYX Wolves, Solera, and Guvi. Pursuing a Master's in Information at the University of Wisconsin - Madison. Explore my portfolio for innovative solutions and designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait" initial={false}>
        <GoogleAnalytics gaId="G-CCSE78VCSN" />
        <body className={dmsans.className}>{children}</body>
      </AnimatePresence>
    </html>
  );
}
