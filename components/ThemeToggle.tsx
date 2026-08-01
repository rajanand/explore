"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="theme-toggle-btn w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn p-2 flex items-center justify-center w-9 h-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--walk-amber)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--walk-bg)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
