"use client";

import React, { useState } from "react";
import { SCHEMA_FIELDS } from "@/lib/tool-calling/content";

export default function SchemaFieldsInteractive() {
  const [required, setRequired] = useState<Record<string, boolean>>({
    project: true,
    summary: true,
    priority: false,
    body: false,
  });

  const missing = !required.project || !required.summary;

  return (
    <>
      <p className="lede">Design JSON schema for create_jira_ticket — agents need strict required fields.</p>
      {SCHEMA_FIELDS.map((f) => (
        <button
          key={f.id}
          type="button"
          className={`pw-chip ${required[f.id] ? "on" : ""}`}
          style={{ display: "block", width: "100%", marginBottom: 8, textAlign: "left" }}
          onClick={() => setRequired((r) => ({ ...r, [f.id]: !r[f.id] }))}
        >
          {f.label} — {required[f.id] ? "required" : "optional"}
        </button>
      ))}
      <p className={`pw-verdict ${missing ? "warn" : ""}`}>
        {missing
          ? "Keep project_key and summary required to block junk tickets."
          : "Schema blocks filing without validated project + summary."}
      </p>
    </>
  );
}
