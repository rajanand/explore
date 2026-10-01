"use client";

import React, { useState } from "react";
import { AGENT_LOOP_STEPS } from "@/lib/cursor-agents/content";

export default function AgentLoopInteractive() {
  const [stepIdx, setStepIdx] = useState(0);
  const step = AGENT_LOOP_STEPS[stepIdx];

  return (
    <>
      <div className="ca-loop-track" aria-live="polite">
        {AGENT_LOOP_STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`ca-loop-node${i === stepIdx ? " active" : ""}${i < stepIdx ? " done" : ""}`}
            onClick={() => setStepIdx(i)}
          >
            <span className="ca-loop-num mono">{i + 1}</span>
            <span className="ca-loop-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="panel ca-loop-detail">
        <p className="ca-loop-detail-title">{step.label}</p>
        <p>{step.detail}</p>
      </div>

      <div className="controls">
        <button
          type="button"
          className="btn"
          disabled={stepIdx === 0}
          onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
        >
          Previous step
        </button>
        <button
          type="button"
          className="btn active"
          disabled={stepIdx >= AGENT_LOOP_STEPS.length - 1}
          onClick={() => setStepIdx((i) => Math.min(AGENT_LOOP_STEPS.length - 1, i + 1))}
        >
          Next step
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setStepIdx(0);
            let i = 0;
            const tick = () => {
              i += 1;
              if (i < AGENT_LOOP_STEPS.length) {
                setStepIdx(i);
                window.setTimeout(tick, 700);
              }
            };
            window.setTimeout(tick, 700);
          }}
        >
          Auto-play loop
        </button>
      </div>
    </>
  );
}
