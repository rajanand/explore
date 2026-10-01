"use client";

import React, { useState } from "react";
import { DATASET_CHECKS } from "@/lib/fine-tuning/content";

export default function DatasetChecklistInteractive() {
  const [on, setOn] = useState<Record<string, boolean>>({});

  const score = DATASET_CHECKS.filter((c) => on[c.id] === c.good).length;

  return (
    <>
      <ul className="ft-checklist">
        {DATASET_CHECKS.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              className={`ft-check${on[c.id] ? " on" : ""}`}
              onClick={() => setOn((prev) => ({ ...prev, [c.id]: !prev[c.id] }))}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
      <p className="mono ft-score">
        Dataset readiness: {score} / {DATASET_CHECKS.length} aligned with good practice
      </p>
    </>
  );
}
