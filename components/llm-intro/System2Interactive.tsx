"use client";

import React, { useState } from "react";

export default function System2Interactive() {
  const [mode, setMode] = useState<"system1" | "system2">("system1");

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${mode === "system1" ? "active" : ""}`}
          onClick={() => setMode("system1")}
        >
          System 1 · fast token stream
        </button>
        <button
          type="button"
          className={`btn ${mode === "system2" ? "active" : ""}`}
          onClick={() => setMode("system2")}
        >
          System 2 · deliberate reasoning
        </button>
      </div>

      <div className="panel">
        <p className="mono" style={{ color: "var(--ink)", marginBottom: 10 }}>
          User: Is 17 × 24 greater than 400?
        </p>

        {mode === "system1" ? (
          <div className="llm-system-block">
            <p className="llm-system-label amber">Immediate answer (one forward pass)</p>
            <p>Yes, 17 × 24 is 408, which is greater than 400.</p>
            <p className="legend">
              Fast — but can slip on multi-step math without tools. Like human
              instinct.
            </p>
          </div>
        ) : (
          <div className="llm-system-block">
            <p className="llm-system-label teal">Chain-of-thought (more compute)</p>
            <pre className="llm-stage-example">
{`Let me compute step by step:
17 × 24 = 17 × (20 + 4)
        = 340 + 68
        = 408
408 > 400, so yes.`}
            </pre>
            <p className="legend">
              Models can &quot;think longer&quot; — more tokens generated before the
              final answer. Research explores allocating extra inference compute
              for harder problems.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
