"use client";

import React, { useState } from "react";
import { CHECKLIST } from "@/lib/ai-governance/content";

export default function ApprovalChecklistInteractive() {
  const [on, setOn] = useState<Record<string, boolean>>({});

  const score = CHECKLIST.filter((c) => on[c.id]).length;

  return (
    <>
      <p className="lede">Toggle items you would require before widening a copilot pilot.</p>
      {CHECKLIST.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`pw-chip ${on[c.id] ? "on" : ""}`}
          style={{ display: "block", width: "100%", marginBottom: 8, textAlign: "left" }}
          onClick={() => setOn((prev) => ({ ...prev, [c.id]: !prev[c.id] }))}
        >
          {c.label}
        </button>
      ))}
      <p className="pw-verdict">
        {score >= 4
          ? "Strong lightweight gate — pair with security review for agents with tools."
          : `${score}/5 selected — add audit + retention before production.`}
      </p>
    </>
  );
}
