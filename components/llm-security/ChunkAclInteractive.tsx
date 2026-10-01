"use client";

import React, { useState } from "react";
import { CHUNKS } from "@/lib/llm-security/content";

const ROLES = ["all", "engineer", "admin"] as const;

export default function ChunkAclInteractive() {
  const [role, setRole] = useState<(typeof ROLES)[number]>("engineer");

  const visible = CHUNKS.filter((c) => c.roles.includes(role) || c.roles.includes("all"));

  return (
    <>
      <div className="controls">
        {ROLES.map((r) => (
          <button
            key={r}
            type="button"
            className={`btn ${role === r ? "active" : ""}`}
            onClick={() => setRole(r)}
          >
            {r}
          </button>
        ))}
      </div>
      <ul className="sec-chunks">
        {visible.map((c) => (
          <li key={c.id} className="panel">{c.title}</li>
        ))}
      </ul>
      {visible.length < CHUNKS.length && (
        <p className="legend">Filtered out {CHUNKS.length - visible.length} chunk(s) by ACL.</p>
      )}
    </>
  );
}
