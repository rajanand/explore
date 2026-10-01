"use client";

import React, { useMemo, useState } from "react";
import { CANDIDATES, QUERY } from "@/lib/reranking/content";

export default function RankCompareInteractive() {
  const [mode, setMode] = useState<"bi" | "cross">("bi");

  const ranked = useMemo(() => {
    const key = mode === "bi" ? "bi" : "cross";
    return [...CANDIDATES].sort((a, b) => b[key] - a[key]);
  }, [mode]);

  return (
    <>
      <p className="mono">Query: &quot;{QUERY}&quot;</p>
      <div className="pw-toggle-row">
        <button
          type="button"
          className={`pw-chip ${mode === "bi" ? "on" : ""}`}
          onClick={() => setMode("bi")}
        >
          Bi-encoder (retrieval)
        </button>
        <button
          type="button"
          className={`pw-chip ${mode === "cross" ? "on" : ""}`}
          onClick={() => setMode("cross")}
        >
          Cross-encoder (rerank)
        </button>
      </div>
      <ol className="pw-rank">
        {ranked.map((d, i) => (
          <li key={d.id}>
            <span className="mono">{i + 1}.</span> {d.title}
            <span className="pw-score">{Math.round((mode === "bi" ? d.bi : d.cross) * 100)}%</span>
          </li>
        ))}
      </ol>
      <p className="pw-verdict">
        {mode === "bi"
          ? "Fast but wrong #1 — VPN doc looks similar in embedding space."
          : "Reranker promotes escalation doc — worth latency on top 20–50 candidates."}
      </p>
    </>
  );
}
