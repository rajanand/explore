"use client";

import React, { useState } from "react";
import { CONFIG_EXAMPLES } from "@/lib/mcp-servers/content";

export default function ConfigInteractive() {
  const [idx, setIdx] = useState(0);
  const ex = CONFIG_EXAMPLES[idx];

  return (
    <>
      <div className="controls">
        {CONFIG_EXAMPLES.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={`btn ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <pre className="panel mono mcp-pre mcp-config">{ex.config}</pre>
      <p className="git-callout mcp-callout">{ex.note}</p>

      <p className="note">
        Exact file location depends on the host (Cursor: MCP settings / project config). The
        shape is the same: <strong>how to start</strong> or <strong>where to connect</strong>.
      </p>
    </>
  );
}
