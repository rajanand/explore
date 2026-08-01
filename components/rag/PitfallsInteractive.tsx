"use client";

import React, { useState } from "react";

const PITFALLS = [
  {
    id: "retrieval",
    title: "Bad retrieval = bad answers",
    detail:
      "If the right chunk isn't retrieved, the LLM cannot magically know your policy. Monitor recall@k and human eval on retrieval.",
    fix: "Better chunking, hybrid search (BM25 + vectors), rerankers",
  },
  {
    id: "injection",
    title: "Prompt injection via documents",
    detail:
      "Malicious text in a PDF can instruct the model to ignore policies — same class of risk as LLM security.",
    fix: "Sanitize sources, separate system vs user context, output filters",
  },
  {
    id: "stale",
    title: "Stale index",
    detail:
      "RAG answers reflect indexed data, not live systems. Deploys and policy changes need re-indexing pipelines.",
    fix: "Event-driven index updates, version tags in chunks",
  },
  {
    id: "vs-finetune",
    title: "RAG vs fine-tuning",
    detail:
      "RAG injects facts at query time — great for changing docs. Fine-tuning bakes behavior/style into weights — expensive to update.",
    fix: "Use RAG for knowledge; fine-tune for tone, format, or task skill",
  },
] as const;

export default function PitfallsInteractive() {
  const [active, setActive] = useState(0);
  const item = PITFALLS[active];

  return (
    <>
      <div className="controls">
        {PITFALLS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className={`btn ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="panel rag-pitfall-card">
        <h4>{item.title}</h4>
        <p>{item.detail}</p>
        <p className="rag-pitfall-fix mono">Mitigation: {item.fix}</p>
      </div>

      <div className="panel step-mechanics">
        <p className="step-mechanics-lead">
          <strong>Engineering checklist:</strong> chunk strategy, embedding model,
          top-k, prompt template, access control on the vector store, logging of
          retrieved chunks for debugging, and eval sets with real internal
          questions.
        </p>
      </div>
    </>
  );
}
