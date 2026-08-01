"use client";

import React, { useState } from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import FauxEditor from "@/components/git-internals/shared/FauxEditor";

export default function Stage04Workflow() {
  const { sim, updateSim } = useGitLesson();
  const [quiz, setQuiz] = useState<string | null>(null);

  const stage = () => updateSim({ staged: true });
  const commit = () => {
    if (sim.staged) updateSim({ firstCommitDone: true, staged: false });
  };

  const answer = (c: string) => {
    setQuiz(c);
    if (c === "staging") updateSim({ stagingQuizCorrect: true });
  };

  const zone = (z: "work" | "stage" | "hist") => {
    if (z === "work" && !sim.staged && !sim.firstCommitDone) return "git-zone active";
    if (z === "stage" && sim.staged) return "git-zone active";
    if (z === "hist" && sim.firstCommitDone) return "git-zone active";
    return "git-zone";
  };

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Before objects, feel the <strong>three places</strong> a change can live — the same
        workflow Octobot walks through with <span className="mono">Members.txt</span>.
      </p>

      <div className="git-three-board">
        <div className={zone("work")}>
          <h3>Working directory</h3>
          <p>Files on disk — untracked until you add them.</p>
          <FauxEditor
            filename="Members.txt"
            value={sim.workingContent}
            onChange={(v) => updateSim({ workingContent: v, staged: false })}
            readOnly={sim.firstCommitDone}
          />
        </div>
        <div className={zone("stage")}>
          <h3>Staging area (index)</h3>
          <p>Snapshot queued for the <em>next</em> commit only.</p>
          {sim.staged ? (
            <p className="mono git-staged-file">Members.txt (staged)</p>
          ) : (
            <p className="git-zone-empty">Nothing staged</p>
          )}
        </div>
        <div className={zone("hist")}>
          <h3>Commit history</h3>
          <p>Recorded snapshots in <span className="mono">.git/objects</span>.</p>
          {sim.firstCommitDone ? (
            <p className="mono git-staged-file">commit {sim.firstCommitDone ? "54725f…" : ""}</p>
          ) : (
            <p className="git-zone-empty">No commits yet</p>
          )}
        </div>
      </div>

      <div className="controls git-cmd-row">
        <button type="button" className="btn mono" onClick={stage} disabled={sim.staged || sim.firstCommitDone}>
          git add Members.txt
        </button>
        <button type="button" className="btn mono" onClick={commit} disabled={!sim.staged || sim.firstCommitDone}>
          git commit -m &quot;Add Members.txt&quot;
        </button>
      </div>

      {sim.firstCommitDone && (
        <div className="panel git-challenge">
          <p>What determines the contents of the <strong>next</strong> commit?</p>
          <div className="controls">
            {[
              { id: "working", label: "Working directory" },
              { id: "staging", label: "Staging area" },
              { id: "history", label: "Existing commits" },
            ].map((o) => (
              <button
                key={o.id}
                type="button"
                className={`btn ${quiz === o.id ? "active" : ""}`}
                onClick={() => answer(o.id)}
              >
                {o.label}
              </button>
            ))}
          </div>
          {sim.stagingQuizCorrect && (
            <p className="git-callout">Right — <span className="mono">git add</span> fills the staging area; <span className="mono">git commit</span> freezes it into history.</p>
          )}
        </div>
      )}
    </div>
  );
}
