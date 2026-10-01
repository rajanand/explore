"use client";

import React, { useState } from "react";
import { SAMPLE_GOLDEN } from "@/lib/llm-evals/content";

export default function GoldenSetInteractive() {
  const [ran, setRan] = useState(false);

  return (
    <>
      <button type="button" className="btn active" onClick={() => setRan(true)}>
        Run mock eval
      </button>
      {ran && (
        <table className="ev-table panel">
          <thead>
            <tr>
              <th>Question</th>
              <th>Expected</th>
              <th>Actual</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_GOLDEN.map((row) => (
              <tr key={row.q}>
                <td>{row.q}</td>
                <td>{row.expected}</td>
                <td>{row.actual}</td>
                <td className={row.pass ? "ev-pass" : "ev-fail"}>{row.pass ? "✓" : "✗"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p className="legend">Regression: re-run on every prompt or index change.</p>
    </>
  );
}
