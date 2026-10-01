"use client";

import React, { useState } from "react";
import { HOOK_SCENARIOS } from "@/lib/cursor-agents/content";

const EVENTS = [
  "sessionStart",
  "beforeSubmitPrompt",
  "preToolUse",
  "beforeShellExecution",
  "afterShellExecution",
  "subagentStart",
  "afterFileEdit",
  "postToolUse",
  "stop",
] as const;

export default function HooksInteractive() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const scenario = HOOK_SCENARIOS[scenarioIdx];
  const correct = picked === scenario.event;

  const selectScenario = (i: number) => {
    setScenarioIdx(i);
    setPicked(null);
  };

  return (
    <>
      <p className="legend ca-hooks-intro">
        Hooks are configured in <span className="mono">hooks.json</span> (project or user).
        Each entry runs on a specific <strong>event</strong> — a script or prompt that reads JSON
        from stdin and returns allow/deny or extra context.
      </p>

      <div className="panel ca-hook-challenge">
        <p className="ca-chat-label">Goal</p>
        <p>{scenario.prompt}</p>
        <div className="controls" style={{ marginTop: 12 }}>
          {HOOK_SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`btn ${scenarioIdx === i ? "active" : ""}`}
              onClick={() => selectScenario(i)}
            >
              Scenario {i + 1}
            </button>
          ))}
        </div>
        <p className="ca-chat-label" style={{ marginTop: 16 }}>Pick the best event</p>
        <div className="ca-event-grid">
          {EVENTS.map((ev) => (
            <button
              key={ev}
              type="button"
              className={`btn mono ca-event-btn${
                picked === ev ? (ev === scenario.event ? " ca-event-btn--ok" : " ca-event-btn--bad") : ""
              }`}
              onClick={() => setPicked(ev)}
            >
              {ev}
            </button>
          ))}
        </div>
        {picked && (
          <p className={`ca-skill-verdict ${correct ? "on" : "off"}`}>
            {correct ? (
              <>
                <strong>Correct.</strong> {scenario.hint}
              </>
            ) : (
              <>
                Not quite — try an event closer to when that action happens. Hint:{" "}
                {scenario.hint}
              </>
            )}
          </p>
        )}
      </div>

      <pre className="panel ca-pre mono ca-hooks-json">
{`{
  "version": 1,
  "hooks": {
    "afterFileEdit": [{ "command": ".cursor/hooks/format.sh" }]
  }
}`}
      </pre>
    </>
  );
}
