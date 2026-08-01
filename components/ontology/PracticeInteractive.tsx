"use client";

import React, { useState } from "react";

const FORMATS = [
  {
    id: "light",
    label: "Lightweight",
    tech: "JSON Schema · OpenAPI · custom YAML",
    when: "Fast iteration, tool definitions, product ontologies",
    pros: "Easy for engineers, version in Git",
    cons: "Less automated reasoning, informal constraints",
  },
  {
    id: "formal",
    label: "Formal",
    tech: "OWL · RDF · SHACL",
    when: "Regulated domains, research, semantic web integrations",
    pros: "Logic-based validation, standard tooling",
    cons: "Steep learning curve, heavier governance",
  },
] as const;

const PRACTICE_TIPS = [
  "Start with a bounded domain — HR + API docs, not the whole company.",
  "Co-design with domain experts; ontologies fail when engineers invent terms alone.",
  "Prefer stable class names; instances and properties change more often.",
  "Link ontology IDs to RAG chunk metadata for hybrid search.",
  "Document mappings when merging ontologies from acquired products.",
];

export default function PracticeInteractive() {
  const [formatIdx, setFormatIdx] = useState(0);
  const format = FORMATS[formatIdx];

  return (
    <>
      <div className="controls">
        {FORMATS.map((f, i) => (
          <button
            key={f.id}
            type="button"
            className={`btn ${formatIdx === i ? "active" : ""}`}
            onClick={() => setFormatIdx(i)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="panel ont-practice-card">
        <p className="mono ont-section-label">{format.tech}</p>
        <p><strong>When:</strong> {format.when}</p>
        <p><strong>Pros:</strong> {format.pros}</p>
        <p><strong>Cons:</strong> {format.cons}</p>
      </div>

      <div className="panel">
        <p className="mono ont-section-label">Engineering checklist</p>
        <ul className="ont-checklist">
          {PRACTICE_TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>

      <p className="note">
        Pair with the RAG walkthrough for retrieval pipelines and Introduction to
        LLMs for the model layer — ontology is the semantic glue between them.
      </p>
    </>
  );
}
