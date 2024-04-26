import type { Metadata } from "next";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { dmsans } from "@/utils/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// export const metadata: Metadata = {
//   title: "Shelcia's Portfolio",
//   description:
//     "Confident and results-driven Full Stack developer and designer. Contributed to NASDAQ and startups like HIRA, NYX Wolves, Solera, and Guvi. Pursuing a Master's in Information at the University of Wisconsin - Madison. Explore my portfolio for innovative solutions and designs",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Shelcia David&apos; Portfolio</title>
      </head>
      <AnimatePresence mode="wait" initial={false}>
        <GoogleAnalytics gaId="G-CCSE78VCSN" />
        <body className={dmsans.className}>
          {children}
          <SpeedInsights />
        </body>
      </AnimatePresence>
    </html>
  );
}
