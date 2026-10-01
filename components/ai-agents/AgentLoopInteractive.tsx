"use client";

import React, { useState } from "react";
import { AGENT_STEPS } from "@/lib/ai-agents/content";

export default function AgentLoopInteractive() {
  const [step, setStep] = useState(0);
  const s = AGENT_STEPS[step];

  return (
    <>
      <div className="aa-loop">
        {AGENT_STEPS.map((st, i) => (
          <button
            key={st.id}
            type="button"
            className={`aa-loop-step${i === step ? " active" : ""}`}
            onClick={() => setStep(i)}
          >
            {st.label}
          </button>
        ))}
      </div>
      <div className="panel">
        <p className="aa-step-title">{s.label}</p>
        <p>{s.detail}</p>
      </div>
      <div className="controls">
        <button type="button" className="btn" disabled={step === 0} onClick={() => setStep(step - 1)}>
          Back
        </button>
        <button
          type="button"
          className="btn active"
          disabled={step >= AGENT_STEPS.length - 1}
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
