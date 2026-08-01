"use client";

import React, { useState } from "react";
import { AI_USE_CASES } from "@/lib/ontology/graph";

export default function OntologyInAiInteractive() {
  const [active, setActive] = useState(0);
  const item = AI_USE_CASES[active];

  return (
    <>
      <div className="controls">
        {AI_USE_CASES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={`btn ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="panel ont-ai-card">
        <h4>{item.title}</h4>
        <p>{item.detail}</p>
        <p className="ont-ai-example mono">{item.example}</p>
      </div>

      <div className="panel ont-stack-diagram">
        <p className="mono ont-section-label">Where ontology sits in the stack</p>
        <div className="ont-stack-layers">
          <div className="ont-stack-layer">Business domain (people agree on terms)</div>
          <div className="ont-stack-arrow">↓</div>
          <div className="ont-stack-layer highlight-teal">Ontology / knowledge graph</div>
          <div className="ont-stack-arrow">↓</div>
          <div className="ont-stack-layer">RAG indexes · vector DB · APIs</div>
          <div className="ont-stack-arrow">↓</div>
          <div className="ont-stack-layer highlight-amber">LLM (reasoning + language)</div>
        </div>
        <p className="legend">
          Ontology is not a replacement for RAG or LLMs — it <strong>structures</strong>{" "}
          the knowledge they consume and the actions they may take.
        </p>
      </div>
    </>
  );
}
