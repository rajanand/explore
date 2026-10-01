"use client";

import React, { useState } from "react";
import { STOP_SCENARIOS } from "@/lib/decoding-sampling/content";

export default function StopStrategyInteractive() {
  const q = STOP_SCENARIOS[0];
  const [pick, setPick] = useState<string | null>(null);
  const ok = pick === q.best;

  return (
    <>
      <p className="lede">{q.need}</p>
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
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? "Yes — " : "Weak — "}{q.why}</p>
      )}
    </>
  );
}
