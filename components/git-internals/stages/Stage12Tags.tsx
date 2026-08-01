"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import SnapshotDiagram from "@/components/git-internals/shared/SnapshotDiagram";

export default function Stage12Tags() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Tags are like branches but <strong>fixed</strong> — they mark a release or milestone
        and don&apos;t move when you commit. Stored under <span className="mono">.git/refs/tags/</span>.
      </p>

      <button
        type="button"
        className="btn mono active"
        onClick={() => updateSim({ tagCreated: true })}
        disabled={sim.tagCreated}
      >
        git tag v1.0
      </button>

      <SnapshotDiagram
        variant="refs"
        showTag={sim.tagCreated}
        showBranchA={sim.branchACreated}
        c3Exists={sim.branchACommitDone}
        headOnBranchA={sim.headOnBranchA}
      />

      {sim.tagCreated && (
        <p className="git-callout">
          <span className="mono">v1.0</span> always points at commit <span className="mono">8b2d91…</span>
          even while <span className="mono">master</span> and <span className="mono">branchA</span> advance.
        </p>
      )}
    </div>
  );
}
