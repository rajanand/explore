"use client";

import React, { useState } from "react";
import { CREATION_STEPS } from "@/lib/ontology/graph";

export default function OntologyCreationInteractive() {
  const [stepIdx, setStepIdx] = useState(0);
  const step = CREATION_STEPS[stepIdx];

  return (
    <>
      <p className="step-detail-note">
        Walk through building the <strong>Acme Analytics IT ontology</strong> —
        the same domain as our RAG demo (HR policy, API guide, incident runbook).
      </p>

      <div className="controls ont-create-controls">
        {CREATION_STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${stepIdx === i ? "active" : ""}`}
            onClick={() => setStepIdx(i)}
          >
            {i + 1}. {s.title.replace(/^\d+\.\s*/, "")}
          </button>
        ))}
      </div>

      <div className="panel ont-create-panel">
        <div className="ont-create-header">
          <h4>{step.title}</h4>
          <span className="ont-create-who mono">Owner: {step.who}</span>
        </div>

        <div className="ont-create-progress">
          {CREATION_STEPS.map((s, i) => (
            <div
              key={s.id}
              className={`ont-create-dot ${i <= stepIdx ? "done" : ""} ${i === stepIdx ? "current" : ""}`}
              title={s.title}
            />
          ))}
        </div>

        <p className="ont-create-action"><strong>Do:</strong> {step.action}</p>
        <p className="ont-create-output"><strong>Output:</strong> {step.output}</p>

        <div className="ont-create-artifact">
          <p className="mono ont-section-label">Concrete artifact</p>
          <pre>{step.artifact}</pre>
        </div>
      </div>

      <p className="legend">
        Ontologies are not discovered in a lab — they are{" "}
        <strong>designed in workshops</strong>, iterated with domain experts, and
        published like an API schema your AI stack depends on.
      </p>
    </>
  );
}
