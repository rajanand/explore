"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectGraph from "@/components/git-internals/shared/GitObjectGraph";

export default function Stage3Objects() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        A commit is a snapshot built from objects. Reveal them one at a time —
        blob, then tree, then commit.
      </p>

      <div className="controls">
        <button
          type="button"
          className={`btn ${sim.blobRevealed ? "active" : ""}`}
          onClick={() => updateSim({ blobRevealed: true })}
          disabled={sim.blobRevealed}
        >
          1. Show file contents → blob
        </button>
        <button
          type="button"
          className={`btn ${sim.treeRevealed ? "active" : ""}`}
          onClick={() => updateSim({ treeRevealed: true })}
          disabled={!sim.blobRevealed || sim.treeRevealed}
        >
          2. Put it in a folder → tree
        </button>
        <button
          type="button"
          className={`btn ${sim.commitRevealed ? "active" : ""}`}
          onClick={() => updateSim({ commitRevealed: true })}
          disabled={!sim.treeRevealed || sim.commitRevealed}
        >
          3. Commit this snapshot
        </button>
      </div>

      <div className="git-graph-panel panel">
        <GitObjectGraph sim={sim} mode="c1" />
      </div>

      <details className="git-accuracy-note" open={sim.blobRevealed}>
        <summary>Why isn&apos;t the filename in the blob?</summary>
        <p>
          The same content can appear under different filenames or folders.
          <strong> Trees</strong> provide that context — they map names to blob
          or subtree IDs.
        </p>
      </details>
    </div>
  );
}
