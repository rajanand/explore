"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CURRICULUM_TRACKS,
  topicHref,
} from "@/lib/curriculum";

type LearnMenuProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function LearnMenu({ mobile, onNavigate }: LearnMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const isTopicActive = CURRICULUM_TRACKS.some((track) =>
    track.topics.some((t) => pathname === topicHref(t.slug))
  );

  if (mobile) {
    return (
      <div className="learn-menu-mobile">
        <p className="learn-menu-mobile-heading">Learn</p>
        {CURRICULUM_TRACKS.map((track) => (
          <div key={track.id} className="learn-menu-mobile-track">
            <p className="learn-menu-track-label">{track.menuLabel}</p>
            <ul>
              {track.topics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={topicHref(t.slug)}
                    className={`nav-link ${pathname === topicHref(t.slug) ? "active" : ""}`}
                    onClick={onNavigate}
                  >
                    {t.shortTitle}
                    {t.tier === "guide" && (
                      <span className="learn-tier-badge">guide</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="learn-menu" ref={wrapRef}>
      <button
        type="button"
        className={`nav-link learn-menu-trigger${isTopicActive ? " active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Learn
        <span className="learn-menu-chevron" aria-hidden />
      </button>
      {open && (
        <div className="learn-menu-panel" role="menu">
          <div className="learn-menu-grid">
            {CURRICULUM_TRACKS.map((track) => (
              <div key={track.id} className="learn-menu-column">
                <p className="learn-menu-track-label">{track.menuLabel}</p>
                <p className="learn-menu-track-desc">{track.description}</p>
                <ul className="learn-menu-links">
                  {track.topics.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={topicHref(t.slug)}
                        className={`learn-menu-link${pathname === topicHref(t.slug) ? " active" : ""}`}
                        role="menuitem"
                        onClick={() => {
                          setOpen(false);
                          onNavigate?.();
                        }}
                      >
                        {t.shortTitle}
                        {t.tier === "guide" && (
                          <span className="learn-tier-badge">guide</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
