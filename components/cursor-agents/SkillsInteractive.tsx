"use client";

import React, { useState } from "react";
import { SKILL_SCENARIOS } from "@/lib/cursor-agents/content";

const SAMPLE_SKILL = `---
name: create-skill
description: Create Cursor Agent Skills. Use when authoring SKILL.md.
---

# Creating Skills
Skills are markdown playbooks the agent reads when a task matches the description.`;

export default function SkillsInteractive() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const scenario = SKILL_SCENARIOS[scenarioIdx];
  const [revealed, setRevealed] = useState(false);

  const pick = (i: number) => {
    setScenarioIdx(i);
    setRevealed(false);
  };

  return (
    <>
      <div className="ca-split">
        <div className="panel ca-skill-doc">
          <p className="mono ca-file-path">~/.cursor/skills/create-skill/SKILL.md</p>
          <pre className="ca-pre mono">{SAMPLE_SKILL}</pre>
          <p className="legend">
            The <span className="mono">description</span> in frontmatter tells the agent
            <em> when</em> to load this file — like a trigger phrase, not a slash command.
          </p>
        </div>

        <div className="panel">
          <p className="ca-chat-label">Simulated user message</p>
          <div className="controls" style={{ marginBottom: 12 }}>
            {SKILL_SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`btn ${scenarioIdx === i ? "active" : ""}`}
                onClick={() => pick(i)}
              >
                {s.id === "skill" ? "New skill" : s.id === "hook" ? "New hook" : "React help"}
              </button>
            ))}
          </div>
          <p className="ca-user-bubble">&quot;{scenario.userMessage}&quot;</p>
          <button
            type="button"
            className="btn active"
            onClick={() => setRevealed(true)}
          >
            Resolve context
          </button>
          {revealed && (
            <div className={`ca-skill-verdict ${scenario.loadsSkill ? "on" : "off"}`}>
              {scenario.loadsSkill ? (
                <>
                  <span className="mono">Skill loaded:</span>{" "}
                  <strong>{scenario.skillName}</strong>
                  <p className="legend">Extra instructions are injected for this turn — workflow steps, paths, team conventions.</p>
                </>
              ) : (
                <>
                  <span className="mono">No skill matched</span>
                  <p className="legend">General model knowledge + project rules only. Skills stay on disk until the task fits their description.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="panel step-mechanics">
        <p className="step-mechanics-lead">
          <strong>Personal vs project:</strong> skills under{" "}
          <span className="mono">~/.cursor/skills/</span> follow you everywhere;{" "}
          <span className="mono">.cursor/skills/</span> in a repo travels with the team via git.
        </p>
      </div>
    </>
  );
}
