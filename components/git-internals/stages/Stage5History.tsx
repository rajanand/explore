"use client";

import React, { useState } from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectGraph from "@/components/git-internals/shared/GitObjectGraph";
import FauxFileExplorer from "@/components/git-internals/shared/FauxFileExplorer";
import { CONTENT_RODRIGO } from "@/lib/git-internals/simulation";

export default function Stage5History() {
  const { sim, updateSim } = useGitLesson();
  const [quiz, setQuiz] = useState<string | null>(null);

  const viewCommit = (id: "c1" | "c2") => updateSim({ historyView: id });

  const answer = (choice: string) => {
    setQuiz(choice);
    if (choice === "parent") updateSim({ parentQuizCorrect: true });
  };

  const files =
    sim.historyView === "c2"
      ? [
          { path: "members.txt", content: CONTENT_RODRIGO },
          { path: "tasks/wash-dishes.txt", content: CONTENT_RODRIGO },
        ]
      : sim.historyView === "c1"
        ? [{ path: "members.txt", content: CONTENT_RODRIGO }]
        : [];

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Commits link backward through <strong>parent</strong> IDs — that chain is
        your project history.
      </p>

      <GitObjectGraph
        sim={sim}
        mode="history"
        activeCommit={sim.historyView}
        onCommitClick={viewCommit}
      />

      {files.length > 0 && (
        <FauxFileExplorer files={files} />
      )}

      <details className="git-accuracy-note">
        <summary>Next concept: merge commits</summary>
        <p>
          Most commits have one parent. A merge commit can record two or more
          parents — we skip that here to keep the core model clear.
        </p>
      </details>

      {sim.historyView && (
        <div className="panel git-challenge">
          <p>Which object tells Git what came before c2?</p>
          <div className="controls">
            <button type="button" className="btn" onClick={() => answer("tree")}>
              Root tree t3
            </button>
            <button type="button" className="btn" onClick={() => answer("parent")}>
              Parent field inside commit c2
            </button>
            <button type="button" className="btn" onClick={() => answer("blob")}>
              Blob b1
            </button>
          </div>
          {sim.parentQuizCorrect && (
            <p className="git-callout">
              Correct — the parent link inside the commit object forms history.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
