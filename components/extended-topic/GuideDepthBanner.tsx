"use client";

import React from "react";
import Link from "next/link";
import type { TopicConfig } from "@/lib/extended-topics/types";
import { findTrackForSlug } from "@/lib/curriculum";

export default function GuideDepthBanner({ config }: { config: TopicConfig }) {
  const track = findTrackForSlug(config.slug);
  const isGuide = track?.topics.find((t) => t.slug === config.slug)?.tier === "guide";

  return (
    <div className="panel ext-guide-meta">
      <p className="ext-outcome">
        <strong>After this module:</strong> {config.outcomeForUser}
      </p>
      {config.prerequisites && config.prerequisites.length > 0 && (
        <p className="ext-prereq">
          <strong>Read first:</strong>{" "}
          {config.prerequisites.map((p, i) => (
            <span key={p}>
              {i > 0 && " · "}
              <Link href={p}>{p.replace("/topics/", "")}</Link>
            </span>
          ))}
        </p>
      )}
      {isGuide && (
        <p className="ext-guide-note">
          This is a <span className="learn-tier-badge">guide</span> — scenario +
          quizzes. Full workshops (more interactives) live under Production in the
          Learn menu.
        </p>
      )}
    </div>
  );
}
