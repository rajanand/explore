"use client";

import React, { useState } from "react";

const TOOLS = [
  {
    name: "search_issues",
    description: "Search GitHub issues in a repository",
    inputSchema: `{ "type": "object", "properties": { "query": { "type": "string" } }, "required": ["query"] }`,
  },
  {
    name: "get_file_contents",
    description: "Read a file path from the repo",
    inputSchema: `{ "type": "object", "properties": { "path": { "type": "string" } }, "required": ["path"] }`,
  },
];

export default function DiscoveryInteractive() {
  const [discovered, setDiscovered] = useState(false);
  const [selected, setSelected] = useState(0);
  const tool = TOOLS[selected];

  return (
    <>
      <p className="legend">
        Before calling anything, the client asks the server what it offers. Each tool has a
        <strong> name</strong>, <strong>description</strong> (for the model), and an{" "}
        <strong>input schema</strong> (JSON Schema).
      </p>

      <button
        type="button"
        className="btn active"
        onClick={() => setDiscovered(true)}
        disabled={discovered}
      >
        Simulate tools/list
      </button>

      {discovered && (
        <>
          <div className="controls" style={{ marginTop: 16 }}>
            {TOOLS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                className={`btn mono ${selected === i ? "active" : ""}`}
                onClick={() => setSelected(i)}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="panel mcp-tool-card">
            <p className="mono mcp-tool-name">{tool.name}</p>
            <p>{tool.description}</p>
            <p className="mcp-schema-label">inputSchema</p>
            <pre className="mono mcp-pre">{tool.inputSchema}</pre>
          </div>

          <p className="note">
            In Cursor, agents discover MCP tools by namespace (e.g.{" "}
            <span className="mono">plugin-vercel-vercel</span>) and must read the schema before
            calling — same idea as OpenAPI for REST.
          </p>
        </>
      )}
    </>
  );
}
