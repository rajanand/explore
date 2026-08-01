"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-navbar sticky top-0 z-50 w-full">
      <Link href="/" className="navbar-brand">
        {siteConfig.title}
      </Link>

      <nav className="flex items-center gap-4 md:gap-6">
        <Link
          href="/"
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>

        {siteConfig.topics.map((topic) => {
          const href = `/topics/${topic.slug}`;
          const isActive = pathname === href;
          return (
            <Link
              key={topic.slug}
              href={href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {topic.title}
            </Link>
          );
        })}

        <ThemeToggle />
      </nav>
    </header>
  );
}
