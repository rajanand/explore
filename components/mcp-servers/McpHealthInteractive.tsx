"use client";

import React, { useState } from "react";

const STATES = [
  { id: "ok", label: "Connected", fix: "Tools ready — run discovery before calls." },
  { id: "auth", label: "needsAuth", fix: "Run OAuth / mcp_auth; do not retry tools until green." },
  { id: "err", label: "error", fix: "Check transport, command path, and server logs." },
] as const;

export default function McpHealthInteractive() {
  const [state, setState] = useState<(typeof STATES)[number]["id"]>("auth");

  const info = STATES.find((s) => s.id === state)!;

  return (
    <div className="panel mcp-health">
      <div className="controls">
        {STATES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`btn ${state === s.id ? "active" : ""}`}
            onClick={() => setState(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mcp-health-fix">{info.fix}</p>
    </div>
  );
}
