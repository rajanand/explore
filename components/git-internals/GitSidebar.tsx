"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import { STAGE_LABELS } from "@/lib/git-internals/simulation";

export default function GitSidebar() {
  const { stage, setStage, canAccessStage, stageComplete } = useGitLesson();

  return (
    <aside className="sidebar git-sidebar">
      <p className="brand">Git, seen from the inside</p>
      <nav aria-label="Lesson stages">
        {STAGE_LABELS.map((label, i) => {
          const idx = i as typeof stage;
          const locked = !canAccessStage(idx);
          const complete = stageComplete(idx);
          return (
            <button
              key={label}
              type="button"
              className={`step-link git-stage-link${stage === idx ? " active" : ""}${complete ? " done" : ""}`}
              disabled={locked}
              onClick={() => setStage(idx)}
              aria-current={stage === idx ? "step" : undefined}
            >
              <span className="num">{locked ? "·" : String(i + 1).padStart(2, "0")}</span>
              {label}
              {locked && <span className="git-lock mono">locked</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
