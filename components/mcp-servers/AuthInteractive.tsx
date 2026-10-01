"use client";

import React, { useState } from "react";
import { AUTH_STATES } from "@/lib/mcp-servers/content";

export default function AuthInteractive() {
  const [state, setState] = useState<string>("needsAuth");

  const info = AUTH_STATES.find((s) => s.id === state)!;

  return (
    <>
      <p className="legend">
        Remote MCP servers often need OAuth or API keys. The host surfaces status so you know
        whether tools are usable.
      </p>

      <div className="controls">
        {AUTH_STATES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`btn mono ${state === s.id ? "active" : ""}`}
            onClick={() => setState(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className={`panel mcp-auth-panel mcp-auth-panel--${state}`}>
        <p className="mcp-role-title">{info.label}</p>
        <p>{info.detail}</p>
        {state === "needsAuth" && (
          <button
            type="button"
            className="btn active"
            onClick={() => setState("ok")}
          >
            Simulate authenticate (mcp_auth)
          </button>
        )}
      </div>
    </>
  );
}
