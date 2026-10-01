"use client";

import React, { useState } from "react";
import { ATTACKS } from "@/lib/llm-evals/content";

export default function GuardrailInteractive() {
  const [attackIdx, setAttackIdx] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const attack = ATTACKS[attackIdx];
  const chosen = attack.mitigations.find((m) => m.id === pick);

  return (
    <>
      <div className="controls">
        {ATTACKS.map((a, i) => (
          <button key={a.id} type="button" className={`btn ${attackIdx === i ? "active" : ""}`} onClick={() => { setAttackIdx(i); setPick(null); }}>
            {a.title}
          </button>
        ))}
      </div>
      <div className="controls">
        {attack.mitigations.map((m) => (
          <button key={m.id} type="button" className={`btn ${pick === m.id ? "active" : ""}`} onClick={() => setPick(m.id)}>
            {m.label}
          </button>
        ))}
      </div>
      {chosen && (
        <p className={`ev-verdict ${chosen.ok ? "ok" : "bad"}`}>
          {chosen.ok ? "Solid layer — combine with others." : "Weak alone; add structural controls."}
        </p>
      )}
    </>
  );
}
