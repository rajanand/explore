"use client";

import React, { useState } from "react";
import { INJECTION_TICKET, MITIGATIONS } from "@/lib/llm-security/content";

export default function InjectionLabInteractive() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    delimiter: true,
    acl: true,
    tool: true,
  });

  const blocked =
    enabled.delimiter && enabled.acl && enabled.tool;

  return (
    <>
      <pre className="panel mono sec-ticket">{INJECTION_TICKET}</pre>
      <div className="controls">
        {MITIGATIONS.filter((m) => m.id !== "prompt").map((m) => (
          <button
            key={m.id}
            type="button"
            className={`btn ${enabled[m.id] ? "active" : ""}`}
            onClick={() => setEnabled((e) => ({ ...e, [m.id]: !e[m.id] }))}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className={`sec-verdict ${blocked ? "ok" : "bad"}`}>
        {blocked
          ? "Layered controls contain the injection — model may still see text but cannot exfiltrate via tools."
          : "Gap: enable delimiter framing, ACL on retrieval, and restrict dangerous tools."}
      </p>
    </>
  );
}
