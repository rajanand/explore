"use client";

import React, { useState } from "react";
import { SUBAGENT_SCENARIOS } from "@/lib/cursor-agents/content";

const AGENT_CARDS = [
  {
    id: "explore",
    title: "explore",
    blurb: "Fast codebase search — patterns, folders, “where is X?”",
  },
  {
    id: "generalPurpose",
    title: "generalPurpose",
    blurb: "Broad research and multi-step work when no specialist fits.",
  },
  {
    id: "bugbot",
    title: "bugbot",
    blurb: "Defect-first review of local diffs (when explicitly requested).",
  },
  {
    id: "deployment-expert",
    title: "deployment-expert",
    blurb: "Vercel deploys, CI/CD, env vars, preview URLs.",
  },
  {
    id: "security-review",
    title: "security-review",
    blurb: "Security-focused pass on branch or uncommitted changes.",
  },
] as const;

export default function SubagentsInteractive() {
  const [taskIdx, setTaskIdx] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const task = SUBAGENT_SCENARIOS[taskIdx];
  const correct = choice === task.agent;

  return (
    <>
      <p className="legend">
        The main agent can <strong>delegate</strong> with the Task tool — a subagent runs in its
        own context with a focused prompt and tool set. You choose the type; the parent merges
        the result back into the conversation.
      </p>

      <div className="ca-agent-grid">
        {AGENT_CARDS.map((a) => (
          <div key={a.id} className="ca-agent-card panel">
            <p className="mono ca-agent-id">{a.title}</p>
            <p>{a.blurb}</p>
          </div>
        ))}
      </div>

      <div className="panel ca-hook-challenge">
        <p className="ca-chat-label">Task for the parent agent</p>
        <p>{task.task}</p>
        <div className="controls" style={{ marginTop: 12 }}>
          {SUBAGENT_SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`btn ${taskIdx === i ? "active" : ""}`}
              onClick={() => {
                setTaskIdx(i);
                setChoice(null);
              }}
            >
              Task {i + 1}
            </button>
          ))}
        </div>
        <p className="ca-chat-label" style={{ marginTop: 16 }}>Which subagent type?</p>
        <div className="controls">
          {AGENT_CARDS.map((a) => (
            <button
              key={a.id}
              type="button"
              className={`btn mono ${choice === a.id ? "active" : ""}`}
              onClick={() => setChoice(a.id)}
            >
              {a.title}
            </button>
          ))}
        </div>
        {choice && (
          <p className={`ca-skill-verdict ${correct ? "on" : "off"}`}>
            {correct ? (
              <>
                <strong>Good match.</strong> {task.why}
              </>
            ) : (
              <>
                <span className="mono">{task.label}</span> is a better fit — {task.why}
              </>
            )}
          </p>
        )}
      </div>
    </>
  );
}
