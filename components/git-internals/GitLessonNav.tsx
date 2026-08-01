"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import { STAGE_LABELS } from "@/lib/git-internals/simulation";

export default function GitLessonNav() {
  const { stage, goNext, goPrev, stageComplete, resetLesson } = useGitLesson();
  const done = stageComplete(stage);

  return (
    <div className="git-lesson-nav">
      <button
        type="button"
        className="btn"
        onClick={goPrev}
        disabled={stage === 0}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn"
        onClick={goNext}
        disabled={stage >= 6 || !done}
      >
        {stage >= 6 ? "Finished" : "Next"}
      </button>
      <button type="button" className="btn git-reset-btn" onClick={resetLesson}>
        Reset lesson
      </button>
      {!done && stage < 6 && (
        <p className="git-nav-hint">Complete the interaction above to continue.</p>
      )}
    </div>
  );
}

export function GitProgressBar() {
  const { stage, setStage, canAccessStage, stageComplete } = useGitLesson();

  return (
    <div className="git-progress" role="tablist" aria-label="Lesson stages">
      {STAGE_LABELS.map((label, i) => {
        const idx = i as typeof stage;
        const locked = !canAccessStage(idx);
        const complete = stageComplete(idx);
        const active = stage === idx;
        return (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={active}
            aria-disabled={locked}
            className={`git-progress-step${active ? " active" : ""}${complete ? " done" : ""}${locked ? " locked" : ""}`}
            onClick={() => !locked && setStage(idx)}
            disabled={locked}
          >
            <span className="git-progress-num mono">{i + 1}</span>
            <span className="git-progress-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
