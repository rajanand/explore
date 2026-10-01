"use client";

import React, { useState } from "react";
import { STRUCTURED_DEMO } from "@/lib/prompt-context/content";

export default function StructuredOutputInteractive() {
  const [mode, setMode] = useState<"free" | "json">("free");

  return (
    <>
      <div className="controls">
        <button type="button" className={`btn ${mode === "free" ? "active" : ""}`} onClick={() => setMode("free")}>
          Free text
        </button>
        <button type="button" className={`btn ${mode === "json" ? "active" : ""}`} onClick={() => setMode("json")}>
          JSON schema
        </button>
      </div>
      <pre className="panel mono pc-out">{mode === "free" ? STRUCTURED_DEMO.free : STRUCTURED_DEMO.json}</pre>
      <p className={`pc-valid ${mode === "json" ? "ok" : "warn"}`}>
        {mode === "json"
          ? "Validator: passes schema — downstream automation safe."
          : "Validator: cannot parse — human cleanup required."}
      </p>
    </>
  );
}
