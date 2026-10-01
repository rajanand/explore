"use client";

import React, { useState } from "react";
import { TIMEOUT_CHOICES } from "@/lib/streaming-apis/content";

export default function TimeoutQuizInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const q = TIMEOUT_CHOICES[idx];
  const ok = pick === q.best;

  return (
    <>
      <div className="controls">
        {TIMEOUT_CHOICES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => {
              setIdx(i);
              setPick(null);
            }}
          >
            Scenario {i + 1}
          </button>
        ))}
      </div>
      <p className="lede">{q.situation}</p>
      <div className="pw-toggle-row">
        {q.options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`pw-chip ${pick === o.id ? "on" : ""}`}
            onClick={() => setPick(o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? "Solid — " : "Risky — "}{q.why}</p>
      )}
    </>
  );
}
