"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import SnapshotDiagram from "@/components/git-internals/shared/SnapshotDiagram";
import GitObjectsFolder from "@/components/git-internals/shared/GitObjectsFolder";

export default function Stage10Dedup() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Both files contain &quot;Rodrigo&quot; — same bytes, same hash. Git stores
        <strong> one blob</strong> and references it from two trees. That&apos;s deduplication
        by design.
      </p>

      <SnapshotDiagram variant="c2-dedup" />

      <GitObjectsFolder showCommit2Objects opened />

      <div className="panel git-challenge">
        <p>How many blob objects exist for identical &quot;Rodrigo&quot; content?</p>
        <div className="controls">
          <button
            type="button"
            className="btn"
            onClick={() => updateSim({ dedupQuizCorrect: false })}
          >
            Two (one per file)
          </button>
          <button
            type="button"
            className={`btn ${sim.dedupQuizCorrect ? "active" : ""}`}
            onClick={() => updateSim({ dedupQuizCorrect: true })}
          >
            One (shared hash)
          </button>
        </div>
        {sim.dedupQuizCorrect && (
          <p className="git-callout">
            Content-addressing means reuse is automatic — no extra storage for duplicate bytes.
          </p>
        )}
      </div>
    </div>
  );
}
