"use client";

import React, { useState } from "react";
import { ERROR_PAYLOADS } from "@/lib/tool-calling/content";

export default function ErrorPayloadInteractive() {
  const [pick, setPick] = useState<string | null>(null);
  const chosen = ERROR_PAYLOADS.find((e) => e.id === pick);

  return (
    <>
      <p className="lede">Which HTTP 400 body helps the agent self-correct?</p>
      {ERROR_PAYLOADS.map((e) => (
        <button
          key={e.id}
          type="button"
          className={`pw-chip ${pick === e.id ? "on" : ""}`}
          style={{ display: "block", width: "100%", marginBottom: 8, textAlign: "left" }}
          onClick={() => setPick(e.id)}
        >
          <span className="mono">{e.text}</span>
        </button>
      ))}
      {chosen && (
        <p className={`pw-verdict ${chosen.good ? "" : "warn"}`}>{chosen.note}</p>
      )}
    </>
  );
}
