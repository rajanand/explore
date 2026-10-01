"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LearnMenu from "@/components/nav/LearnMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-navbar ${isHome ? "site-navbar--home" : ""}`}>
      <div className="site-navbar-inner">
        <Link href="/" className="navbar-brand">
          <span className="navbar-logo" aria-hidden="true">
            <span className="navbar-logo-core" />
            <span className="navbar-logo-ring" />
          </span>
          <span className="navbar-brand-text">
            Explore<em>: AI</em>
          </span>
        </Link>

        <nav className="navbar-desktop" aria-label="Main">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <LearnMenu />
          <Link
            href="/#paths"
            className={`nav-link ${pathname === "/" ? "" : ""}`}
          >
            Paths
          </Link>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            type="button"
            className="navbar-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`navbar-menu-icon ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`navbar-mobile-panel ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar-mobile-nav" aria-label="Mobile">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <LearnMenu mobile onNavigate={() => setMenuOpen(false)} />
          <Link
            href="/#paths"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Learning paths
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
