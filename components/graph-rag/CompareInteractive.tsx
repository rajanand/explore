"use client";

import React, { useState } from "react";
import { GRAPH_PATH, VECTOR_ONLY_MISS } from "@/lib/graph-rag/content";

export default function CompareInteractive() {
  const [mode, setMode] = useState<"vector" | "graph">("vector");

  return (
    <>
      <div className="controls">
        <button
          type="button"
          className={`btn ${mode === "vector" ? "active" : ""}`}
          onClick={() => setMode("vector")}
        >
          Vector only
        </button>
        <button
          type="button"
          className={`btn ${mode === "graph" ? "active" : ""}`}
          onClick={() => setMode("graph")}
        >
          Graph traversal
        </button>
      </div>
      <div className="panel gr-compare">
        <p className="mono">Q: Which escalation policy applies to INC-1042?</p>
        {mode === "vector" ? (
          <p>{VECTOR_ONLY_MISS}</p>
        ) : (
          <p className="mono gr-path">{GRAPH_PATH}</p>
        )}
      </div>
    </>
  );
}
