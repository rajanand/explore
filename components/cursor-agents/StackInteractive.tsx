"use client";

import React, { useState } from "react";

type LayerId = "rules" | "skills" | "agent" | "hooks" | "tools" | "subagent";

const LAYERS: { id: LayerId; title: string; body: string }[] = [
  {
    id: "rules",
    title: "Rules & user instructions",
    body: "Always-on preferences: style, safety, repo conventions (.cursor/rules, AGENTS.md).",
  },
  {
    id: "skills",
    title: "Skills (on demand)",
    body: "Loaded when the task matches a skill description — playbooks for commits, SEO, hooks, etc.",
  },
  {
    id: "agent",
    title: "Parent agent",
    body: "Plans the turn: answer, call tools, or spawn a subagent.",
  },
  {
    id: "hooks",
    title: "Hooks (guardrails)",
    body: "Observe or gate events: shell, edits, MCP, subagent start, prompts.",
  },
  {
    id: "tools",
    title: "Tools & MCP",
    body: "Terminal, file edits, search, browser, external APIs via MCP servers.",
  },
  {
    id: "subagent",
    title: "Subagents",
    body: "Isolated specialists (explore, review, deploy) that report back to the parent.",
  },
];

export default function StackInteractive() {
  const [active, setActive] = useState<LayerId | null>(null);
  const [run, setRun] = useState(false);

  return (
    <>
      <div className={`ca-stack${run ? " ca-stack--run" : ""}`}>
        {LAYERS.map((layer, i) => (
          <button
            key={layer.id}
            type="button"
            className={`ca-stack-layer${active === layer.id ? " active" : ""}`}
            style={{ "--i": i } as React.CSSProperties}
            onClick={() => setActive(layer.id)}
          >
            <span className="ca-stack-title">{layer.title}</span>
          </button>
        ))}
        <div className="ca-stack-flow mono" aria-hidden>
          prompt ↓ context ↑ results
        </div>
      </div>

      {active && (
        <div className="panel ca-loop-detail">
          <p className="ca-loop-detail-title">
            {LAYERS.find((l) => l.id === active)?.title}
          </p>
          <p>{LAYERS.find((l) => l.id === active)?.body}</p>
        </div>
      )}

      <button
        type="button"
        className="btn active"
        onClick={() => {
          setRun(true);
          window.setTimeout(() => setRun(false), 2200);
        }}
      >
        Animate one turn
      </button>

      <div className="panel step-mechanics">
        <p className="step-mechanics-lead">
          <strong>Mental model:</strong> rules and skills shape <em>what the agent knows</em>;
          hooks shape <em>what it may do</em>; tools and subagents shape <em>how work gets done</em>.
          None of them replace the others — they stack.
        </p>
      </div>
    </>
  );
}
