"use client";

import React, { useState } from "react";
import { STREAM_STEPS, type StreamState } from "@/lib/streaming-apis/content";

export default function StreamStateInteractive() {
  const [state, setState] = useState<StreamState>("idle");
  const current = STREAM_STEPS.find((s) => s.state === state)!;

  return (
    <>
      <div className="controls">
        {STREAM_STEPS.map((s) => (
          <button
            key={s.state}
            type="button"
            className={`btn ${state === s.state ? "active" : ""}`}
            onClick={() => setState(s.state)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="panel">
        <p className="pw-col-title">{current.label}</p>
        <p>{current.detail}</p>
      </div>
    </>
  );
}
