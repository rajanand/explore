"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import SnapshotDiagram from "@/components/git-internals/shared/SnapshotDiagram";

export default function Stage11Branches() {
  const { sim, updateSim } = useGitLesson();

  const checkout = () => updateSim({ branchACreated: true, headOnBranchA: true });
  const commit = () => updateSim({ branchACommitDone: true });

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Branches are <strong>not</strong> copies of files — they are movable pointers to
        commits. <span className="mono">master</span> and <span className="mono">branchA</span>
        are files under <span className="mono">.git/refs/heads/</span> containing a commit hash.
      </p>

      <SnapshotDiagram
        variant="refs"
        showBranchA={sim.branchACreated}
        c3Exists={sim.branchACommitDone}
        headOnBranchA={sim.headOnBranchA}
      />

      <div className="controls git-cmd-row">
        <button
          type="button"
          className="btn mono"
          onClick={checkout}
          disabled={sim.branchACreated}
        >
          git checkout -b branchA
        </button>
        <button
          type="button"
          className="btn mono"
          onClick={commit}
          disabled={!sim.branchACreated || sim.branchACommitDone}
        >
          git commit -m &quot;Branch work&quot;
        </button>
      </div>

      {sim.branchACreated && (
        <p className="git-callout">
          <span className="mono">HEAD</span> points to <span className="mono">refs/heads/branchA</span>
          — not directly to a commit. Checkout updates HEAD; new commits move the branch pointer.
        </p>
      )}
    </div>
  );
}
