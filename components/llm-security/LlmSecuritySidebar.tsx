"use client";

import React from "react";

const STEPS = [
  { id: "hero", num: "·", label: "Start" },
  { id: "threat", num: "01", label: "Threat model" },
  { id: "injection", num: "02", label: "Injection lab" },
  { id: "acl", num: "03", label: "Chunk ACLs" },
  { id: "agents", num: "04", label: "Agent blast radius" },
  { id: "recap", num: "05", label: "Recap" },
] as const;

export const LLM_SECURITY_SECTION_IDS = STEPS.map((s) => s.id);

export default function LlmSecuritySidebar({ activeId }: { activeId: string }) {
  return (
    <aside className="sidebar sec-sidebar">
      <p className="brand">LLM security</p>
      <nav>
        {STEPS.map((step) => (
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
