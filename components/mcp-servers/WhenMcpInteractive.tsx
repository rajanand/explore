"use client";

import React, { useState } from "react";
import { MCP_VS_BUILTIN } from "@/lib/mcp-servers/content";

export default function WhenMcpInteractive() {
  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState<"builtin" | "mcp" | null>(null);
  const scenario = MCP_VS_BUILTIN[idx];
  const correct = pick === scenario.answer;

  return (
    <>
      <div className="panel mcp-hook-challenge">
        <p className="mcp-chat-label">Task</p>
        <p>{scenario.prompt}</p>
        <div className="controls" style={{ marginTop: 12 }}>
          {MCP_VS_BUILTIN.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`btn ${idx === i ? "active" : ""}`}
              onClick={() => {
                setIdx(i);
                setPick(null);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="controls" style={{ marginTop: 12 }}>
          <button
            type="button"
            className={`btn ${pick === "builtin" ? "active" : ""}`}
            onClick={() => setPick("builtin")}
          >
            Built-in tool
          </button>
          <button
            type="button"
            className={`btn ${pick === "mcp" ? "active" : ""}`}
            onClick={() => setPick("mcp")}
          >
            MCP server
          </button>
        </div>
        {pick && (
          <p className={`mcp-verdict ${correct ? "on" : "off"}`}>
            {correct ? (
              <>
                <strong>Yes.</strong> {scenario.why}
              </>
            ) : (
              <>
                <strong>Consider again.</strong> {scenario.why}
              </>
            )}
          </p>
        )}
      </div>
    </>
  );
}
