"use client";

import React, { useState } from "react";

export default function ParentChildInteractive() {
  const [mode, setMode] = useState<"flat" | "parent">("flat");

  return (
    <>
      <div className="pw-toggle-row">
        <button
          type="button"
          className={`pw-chip ${mode === "flat" ? "on" : ""}`}
          onClick={() => setMode("flat")}
        >
          Flat small chunks
        </button>
        <button
          type="button"
          className={`pw-chip ${mode === "parent" ? "on" : ""}`}
          onClick={() => setMode("parent")}
        >
          Parent/child
        </button>
      </div>
      <div className="panel">
        {mode === "flat" ? (
          <p>
            Retrieve tiny chunk &quot;Step 2: Reset token&quot; — fast match but thin context for
            the model.
          </p>
        ) : (
          <p>
            Retrieve child for search hit, pass parent section &quot;VPN troubleshooting&quot; to
            the LLM — better answers, slightly more tokens.
          </p>
        )}
      </div>
    </>
  );
}
