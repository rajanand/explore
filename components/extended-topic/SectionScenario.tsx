"use client";

import React, { useState } from "react";
import type { TopicScenario } from "@/lib/extended-topics/types";

export default function SectionScenario({ scenario }: { scenario: TopicScenario }) {
  const [step, setStep] = useState(0);
  const s = scenario.steps[step];

  return (
    <div className="panel ext-scenario">
      <p className="ext-scenario-title">{scenario.title}</p>
      <p className="ext-scenario-context">{scenario.context}</p>
      <div className="ext-scenario-steps">
        {scenario.steps.map((st, i) => (
          <button
            key={st.label}
            type="button"
            className={`ext-scenario-step${i === step ? " active" : ""}`}
            onClick={() => setStep(i)}
          >
            {st.label}
          </button>
        ))}
      </div>
      <p className="ext-scenario-detail">{s.detail}</p>
    </div>
  );
}
