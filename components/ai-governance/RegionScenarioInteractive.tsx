"use client";

import React, { useState } from "react";
import { REGION_SCENARIOS } from "@/lib/ai-governance/content";

export default function RegionScenarioInteractive() {
  const q = REGION_SCENARIOS[0];
  const [pick, setPick] = useState<string | null>(null);
  const ok = pick === q.best;

  return (
    <>
      <p className="lede">{q.title}</p>
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
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>{ok ? "Reasonable — " : "Revisit — "}{q.why}</p>
      )}
    </>
  );
}
