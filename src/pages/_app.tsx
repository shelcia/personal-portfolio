import type { AppProps } from "next/app";
import { MotionConfig } from "motion/react";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg focus:outline-2 focus:outline-black"
      >
        Skip to content
      </a>
      <Component {...pageProps} />
    </MotionConfig>
  );
}
