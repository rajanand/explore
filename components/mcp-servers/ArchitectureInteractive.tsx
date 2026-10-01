"use client";

import React, { useState } from "react";
import { MCP_ROLES } from "@/lib/mcp-servers/content";

export default function ArchitectureInteractive() {
  const [active, setActive] = useState<string>("host");

  const role = MCP_ROLES.find((r) => r.id === active)!;

  return (
    <>
      <div className="mcp-arch-diagram panel" aria-label="MCP architecture">
        <div className="mcp-arch-row">
          <button
            type="button"
            className={`mcp-arch-box${active === "host" ? " active" : ""}`}
            onClick={() => setActive("host")}
          >
            Host (IDE)
          </button>
        </div>
        <div className="mcp-arch-arrow mono">contains</div>
        <div className="mcp-arch-row">
          <button
            type="button"
            className={`mcp-arch-box${active === "client" ? " active" : ""}`}
            onClick={() => setActive("client")}
          >
            MCP client
          </button>
        </div>
        <div className="mcp-arch-arrow mono">transport ↕</div>
        <div className="mcp-arch-row mcp-arch-row--split">
          <button
            type="button"
            className={`mcp-arch-box${active === "transport" ? " active" : ""}`}
            onClick={() => setActive("transport")}
          >
            stdio / HTTP+SSE
          </button>
          <button
            type="button"
            className={`mcp-arch-box mcp-arch-box--server${active === "server" ? " active" : ""}`}
            onClick={() => setActive("server")}
          >
            MCP server
          </button>
        </div>
        <p className="mcp-arch-foot mono">tools · resources · prompts</p>
      </div>

      <div className="panel mcp-role-detail">
        <p className="mcp-role-title">{role.title}</p>
        <p>{role.body}</p>
      </div>
    </>
  );
}
