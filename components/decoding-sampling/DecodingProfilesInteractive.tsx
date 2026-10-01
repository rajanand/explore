"use client";

import React, { useState } from "react";
import { PROFILES, PROMPT } from "@/lib/decoding-sampling/content";

export default function DecodingProfilesInteractive() {
  const [idx, setIdx] = useState(0);
  const p = PROFILES[idx];

  return (
    <>
      <p className="mono">Prompt: {PROMPT}</p>
      <div className="controls">
        {PROFILES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mono">temperature={p.temperature} · top_p={p.topP}</p>
      <div className="panel">{p.sample}</div>
      <p className="pw-verdict">
        {p.id === "support"
          ? "Use for runbooks, policy, and incident comms."
          : p.id === "creative"
            ? "High variance risks invented timelines — avoid for factual IT summaries."
            : "Default for internal drafts with human review."}
      </p>
    </>
  );
}
