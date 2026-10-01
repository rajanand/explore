"use client";

import React, { useState } from "react";
import { TOOL_SCENARIOS } from "@/lib/ai-agents/content";

export default function ToolPickerInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const sc = TOOL_SCENARIOS[idx];

  return (
    <>
      <div className="controls">
        {TOOL_SCENARIOS.map((t, i) => (
          <button key={t.id} type="button" className={`btn ${idx === i ? "active" : ""}`} onClick={() => { setIdx(i); setPick(null); }}>
            Task {i + 1}
          </button>
        ))}
      </div>
      <div className="panel">
        <p>{sc.task}</p>
        <div className="controls">
          {(["search", "api", "human"] as const).map((k) => (
            <button key={k} type="button" className={`btn ${pick === k ? "active" : ""}`} onClick={() => setPick(k)}>
              {k === "search" ? "Search" : k === "api" ? "API tool" : "Human gate"}
            </button>
          ))}
        </div>
        {pick && (
          <p className={`aa-verdict ${pick === sc.answer ? "ok" : "warn"}`}>
            {pick === sc.answer ? `Good — ${sc.label}.` : `Better fit: ${sc.label}.`}
          </p>
        )}
      </div>
    </>
  );
}
