import { DM_Sans } from "next/font/google";
import localFont from "@next/font/local";

export const dmsans = DM_Sans({ subsets: ["latin"] });
export const calsans = localFont({
  src: "../assets/cal-sans/CalSans-SemiBold.woff2",
});
