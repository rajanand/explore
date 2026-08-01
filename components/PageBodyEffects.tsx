"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageBodyEffects() {
  const pathname = usePathname();
  const isWalkthrough = pathname?.startsWith("/topics/");
  const isHome = pathname === "/";

  useEffect(() => {
    if (isWalkthrough) {
      document.documentElement.setAttribute("data-page", "walkthrough");
    } else if (isHome) {
      document.documentElement.setAttribute("data-page", "hub");
    } else {
      document.documentElement.removeAttribute("data-page");
    }
  }, [isWalkthrough, isHome]);

  return null;
}
