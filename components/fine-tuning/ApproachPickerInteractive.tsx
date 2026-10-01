"use client";

import React, { useState } from "react";
import { APPROACH_SCENARIOS } from "@/lib/fine-tuning/content";

export default function ApproachPickerInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const s = APPROACH_SCENARIOS[idx];
  const correct = pick === s.answer;

  return (
    <div className="panel">
      <p>{s.story}</p>
      <div className="controls">
        {(["rag", "finetune", "prompt"] as const).map((k) => (
          <button
            key={k}
            type="button"
            className={`btn ${pick === k ? "active" : ""}`}
            onClick={() => setPick(k)}
          >
            {k}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`ft-verdict ${correct ? "ok" : "warn"}`}>
          {correct ? s.why : `Better: ${s.answer}. ${s.why}`}
        </p>
      )}
      <div className="controls" style={{ marginTop: 12 }}>
        {APPROACH_SCENARIOS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => {
              setIdx(i);
              setPick(null);
            }}
          >
            Case {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
