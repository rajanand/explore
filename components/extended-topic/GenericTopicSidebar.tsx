"use client";

import React from "react";
import type { TopicConfig } from "@/lib/extended-topics/types";

export default function GenericTopicSidebar({
  config,
  activeId,
}: {
  config: TopicConfig;
  activeId: string;
}) {
  return (
    <aside className="sidebar ext-sidebar">
      <p className="brand">{config.brand}</p>
      <nav>
        <a className={`step-link ${activeId === "hero" ? "active" : ""}`} href="#hero">
          <span className="num">·</span>
          Start
        </a>
        {config.sections.map((s) => (
          <a
            key={s.id}
            className={`step-link ${activeId === s.id ? "active" : ""}`}
            href={`#${s.id}`}
          >
            <span className="num">{s.step}</span>
            {s.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
