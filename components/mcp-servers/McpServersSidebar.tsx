"use client";

import React from "react";

const PARTS = [
  {
    title: "Part 1 · Basics",
    steps: [
      { id: "hero", num: "·", label: "Start" },
      { id: "why-mcp", num: "01", label: "Why MCP?" },
      { id: "architecture", num: "02", label: "Architecture" },
    ],
  },
  {
    title: "Part 2 · Using servers",
    steps: [
      { id: "discovery", num: "03", label: "Tools & schemas" },
      { id: "config", num: "04", label: "Configuration" },
      { id: "call-flow", num: "05", label: "One tool call" },
    ],
  },
  {
    title: "Part 3 · Operations",
    steps: [
      { id: "auth", num: "06", label: "Auth & health" },
      { id: "when-mcp", num: "07", label: "MCP vs built-in" },
      { id: "recap", num: "08", label: "Recap" },
    ],
  },
] as const;

export const MCP_SERVERS_SECTION_IDS = PARTS.flatMap((p) =>
  p.steps.map((s) => s.id)
);

type McpServersSidebarProps = {
  activeId: string;
};

export default function McpServersSidebar({ activeId }: McpServersSidebarProps) {
  return (
    <aside className="sidebar mcp-sidebar">
      <p className="brand">MCP servers</p>
      <nav>
        {PARTS.map((part) => (
          <div key={part.title} className="sidebar-part">
            <p className="sidebar-part-title">{part.title}</p>
            {part.steps.map((step) => (
              <a
                key={step.id}
                className={`step-link ${activeId === step.id ? "active" : ""}`}
                href={`#${step.id}`}
              >
                <span className="num">{step.num}</span>
                {step.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
