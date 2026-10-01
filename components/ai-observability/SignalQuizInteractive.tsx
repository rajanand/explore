"use client";

import React, { useState } from "react";
import { SIGNAL_QUIZ } from "@/lib/ai-observability/content";

export default function SignalQuizInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const q = SIGNAL_QUIZ[idx];
  const ok = pick === q.best;

  return (
    <>
      <div className="controls">
        {SIGNAL_QUIZ.map((item, i) => (
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
      <p className="lede">{q.prompt}</p>
      <div className="pw-toggle-row">
        {(["ret", "gen", "guard"] as const).map((id) => (
          <button
            key={id}
            type="button"
            className={`pw-chip ${pick === id ? "on" : ""}`}
            onClick={() => setPick(id)}
          >
            {id === "ret" ? "Retrieval span" : id === "gen" ? "Generation span" : "Guardrail span"}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? "Yes — " : "Consider again — "}{q.why}</p>
      )}
    </>
  );
}
