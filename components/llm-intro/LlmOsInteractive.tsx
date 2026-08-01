"use client";

import React, { useState } from "react";

const TOOLS = [
  { id: "browser", label: "Browser", desc: "Fetch live web pages" },
  { id: "calc", label: "Calculator", desc: "Exact arithmetic" },
  { id: "code", label: "Code interpreter", desc: "Run Python safely" },
  { id: "search", label: "Search API", desc: "Retrieve documents" },
] as const;

const SCENARIOS: Record<string, { task: string; steps: string[] }> = {
  browser: {
    task: "What is the current price of AAPL?",
    steps: [
      "LLM plans: need live data",
      "Calls browser tool → fetches quote page",
      "Reads result → answers user",
    ],
  },
  calc: {
    task: "What is 19% of 2,847,432?",
    steps: [
      "LLM recognizes fragile mental math",
      "Calls calculator → exact result",
      "Returns: 540,821.08",
    ],
  },
  code: {
    task: "Plot sales data from this CSV",
    steps: [
      "LLM writes Python script",
      "Code interpreter runs in sandbox",
      "Returns chart image to user",
    ],
  },
  search: {
    task: "Summarize our internal RFC-42",
    steps: [
      "LLM queries search index",
      "Retrieves relevant chunks",
      "Synthesizes answer with citations",
    ],
  },
};

export default function LlmOsInteractive() {
  const [activeTool, setActiveTool] = useState<string>("code");
  const scenario = SCENARIOS[activeTool];

  return (
    <>
      <div className="controls">
        {TOOLS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`btn ${activeTool === t.id ? "active" : ""}`}
            onClick={() => setActiveTool(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="panel llm-os-diagram">
        <div className="llm-os-center">
          <span className="llm-os-kernel mono">LLM kernel</span>
          <p className="legend">Orchestrates tools like an OS scheduler</p>
        </div>
        <div className="llm-os-tools">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`llm-os-tool ${activeTool === t.id ? "active" : ""}`}
              onClick={() => setActiveTool(t.id)}
            >
              <span className="mono">{t.label}</span>
              <span>{t.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p className="mono" style={{ color: "var(--ink)", marginBottom: 10 }}>
          Task: {scenario.task}
        </p>
        <ol className="llm-os-steps">
          {scenario.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="legend">
          Multimodal models extend this kernel — images, audio, and video become
          additional I/O streams the LLM can process.
        </p>
      </div>
    </>
  );
}
