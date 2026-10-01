"use client";

import React, { useState } from "react";
import { SCALE_SCENARIOS, type IndexChoice } from "@/lib/vector-databases/content";

const CHOICES: { id: IndexChoice; label: string }[] = [
  { id: "flat", label: "Flat / exact" },
  { id: "hnsw", label: "HNSW (ANN)" },
  { id: "ivf", label: "IVF / partitioned" },
];

export default function IndexPickerInteractive() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [pick, setPick] = useState<IndexChoice | null>(null);
  const scenario = SCALE_SCENARIOS[scenarioIdx];
  const ok = pick === scenario.best;

  return (
    <>
      <div className="controls">
        {SCALE_SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${scenarioIdx === i ? "active" : ""}`}
            onClick={() => {
              setScenarioIdx(i);
              setPick(null);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mono">
        {scenario.qps} · {scenario.team}
      </p>
      <div className="pw-toggle-row">
        {CHOICES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`pw-chip ${pick === c.id ? "on" : ""}`}
            onClick={() => setPick(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      {pick && (
        <p className={`pw-verdict ${ok ? "" : "warn"}`}>
          {ok ? "Good fit for this scale." : "Possible, but reconsider — "}
          {scenario.note}
        </p>
      )}
    </>
  );
}
