"use client";

import React from "react";
import type { WorkshopDefinition } from "@/lib/workshop/types";

export default function WorkshopSidebar({
  config,
  activeId,
}: {
  config: WorkshopDefinition;
  activeId: string;
}) {
  const steps = [
    { id: "hero", num: "·", label: "Start" },
    ...config.sections.map((s) => ({ id: s.id, num: s.num, label: s.navLabel })),
    { id: "recap", num: "·", label: "Recap" },
  ];

  return (
    <aside className={`sidebar ${config.cssPrefix}-sidebar`}>
      <p className="brand">{config.brand}</p>
      <nav>
        {steps.map((step) => (
          <a
            key={step.id}
            className={`step-link ${activeId === step.id ? "active" : ""}`}
            href={`#${step.id}`}
          >
            <span className="num">{step.num}</span>
            {step.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
