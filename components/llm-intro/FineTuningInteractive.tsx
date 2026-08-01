"use client";

import React, { useState } from "react";

const STAGES = [
  {
    id: "pretrain",
    label: "Pre-training",
    output: "Document generator",
    example: "The trophy didn't fit in the suitcase because it was too big. The weather in",
    behavior: "Continues text — helpful but not an assistant.",
  },
  {
    id: "finetune",
    label: "Fine-tuning (SFT)",
    output: "Instruction follower",
    example: "User: What is TCP?\nAssistant: TCP is a transport-layer protocol that provides reliable, ordered delivery of bytes between applications.",
    behavior: "Trained on curated Q&A — learns the chat format and helpful tone.",
  },
  {
    id: "rlhf",
    label: "RLHF (optional)",
    output: "Preference-aligned",
    example: "User: Explain recursion simply.\nAssistant: A function that calls itself with a smaller problem until a base case stops it — like nested boxes.",
    behavior: "Humans rank answers — model learns what people prefer, not just what is correct.",
  },
] as const;

export default function FineTuningInteractive() {
  const [stageIdx, setStageIdx] = useState(1);
  const stage = STAGES[stageIdx];

  return (
    <>
      <div className="controls">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${stageIdx === i ? "active" : ""}`}
            onClick={() => setStageIdx(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="panel llm-pipeline-panel">
        <div className="llm-pipeline-track">
          {STAGES.map((s, i) => (
            <div
              key={s.id}
              className={`llm-pipeline-step ${i <= stageIdx ? "done" : ""} ${i === stageIdx ? "current" : ""}`}
            >
              <span className="llm-pipeline-dot" />
              <span className="mono">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="llm-stage-output">
          <p className="mono llm-stage-badge">{stage.output}</p>
          <pre className="llm-stage-example">{stage.example}</pre>
          <p className="legend">{stage.behavior}</p>
        </div>
      </div>
    </>
  );
}
