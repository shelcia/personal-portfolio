import React from "react";
import Link from "next/link";
import { calsans } from "@/utils/fonts";

// Renders a link when `href` is given, so it never ends up nested inside one.
export const ShimmerButton = ({
  title,
  onclick,
  href,
  external = false,
}: {
  title: string;
  onclick?: () => void;
  href?: string;
  external?: boolean;
}) => {
  const className = `inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size-[200%_100%] px-6 font-medium text-base text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${calsans.className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {title}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onclick}>
      {title}
    </button>
  );
};
