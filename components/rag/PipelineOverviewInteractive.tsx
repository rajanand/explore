"use client";

import React, { useState } from "react";

const STAGES = [
  {
    id: "index",
    label: "Index",
    phase: "offline",
    detail:
      "Documents are chunked, embedded, and stored before any user asks a question.",
  },
  {
    id: "retrieve",
    label: "Retrieve",
    phase: "online",
    detail:
      "The user query is embedded and matched against the vector index (cosine similarity).",
  },
  {
    id: "augment",
    label: "Augment",
    phase: "online",
    detail:
      "Top chunks are inserted into a prompt template: system rules + context + user question.",
  },
  {
    id: "generate",
    label: "Generate",
    phase: "online",
    detail:
      "The LLM reads the augmented prompt and produces an answer grounded in retrieved text.",
  },
] as const;

export default function PipelineOverviewInteractive() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <>
      <p className="step-detail-note">
        Click each stage — this is the <strong>query-time half</strong> of the RAG
        data flow you saw in Step 01. Indexing (offline) happens separately.
      </p>

      <div className="controls">
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.label}
            <span className="mono rag-phase-tag">
              {s.phase === "offline" ? "offline" : "online"}
            </span>
          </button>
        ))}
      </div>

      <div className="panel rag-pipeline-viz">
        <div className="rag-pipeline-track-diagram">
          <div className="rag-pipeline-track-label mono offline">Offline</div>
          <div
            className={`rag-pipeline-track-step ${active === 0 ? "active" : ""} ${active > 0 ? "done" : ""}`}
          >
            Index
          </div>
          <div className="rag-pipeline-track-spacer" />
          <div className="rag-pipeline-track-label mono online">Online</div>
          {STAGES.slice(1).map((s, i) => (
            <div
              key={s.id}
              className={`rag-pipeline-track-step ${active === i + 1 ? "active" : ""} ${active > i + 1 ? "done" : ""}`}
            >
              {s.label}
            </div>
          ))}
        </div>

        <p className="legend rag-pipeline-detail">{stage.detail}</p>
        <div className="step-formula mono">
          RAG = Retrieve(context) + Augment(prompt) + Generate(LLM)
        </div>
      </div>
    </>
  );
}
