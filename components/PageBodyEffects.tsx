"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageBodyEffects() {
  const pathname = usePathname();
  const isWalkthrough = pathname?.startsWith("/topics/");

  useEffect(() => {
    if (isWalkthrough) {
      document.documentElement.setAttribute("data-page", "walkthrough");
    } else {
      document.documentElement.removeAttribute("data-page");
    }
  }, [isWalkthrough]);

  return null;
}
