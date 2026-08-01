"use client";

import React, { useState } from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import FauxEditor from "@/components/git-internals/shared/FauxEditor";

export default function Stage2ThreePlaces() {
  const { sim, updateSim } = useGitLesson();
  const [quiz, setQuiz] = useState<string | null>(null);

  const add = () => updateSim({ staged: true, workingContent: sim.membersContent });
  const commit = () => {
    if (sim.staged) updateSim({ committedStage2: true, staged: false });
  };

  const answerQuiz = (choice: string) => {
    setQuiz(choice);
    if (choice === "staging") updateSim({ stagingQuizCorrect: true });
  };

  const colClass = (zone: "work" | "stage" | "history") => {
    if (zone === "work" && !sim.staged && !sim.committedStage2) return "git-zone active";
    if (zone === "stage" && sim.staged) return "git-zone active";
    if (zone === "history" && sim.committedStage2) return "git-zone active";
    return "git-zone";
  };

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Before diving into object types, feel the workflow: a change lives in
        three different places.
      </p>

      <div className="git-three-board">
        <div className={colClass("work")}>
          <h3>Working directory</h3>
          <p>Files on disk right now.</p>
          <FauxEditor
            filename="members.txt"
            value={sim.workingContent}
            onChange={(v) => updateSim({ workingContent: v, staged: false })}
          />
        </div>
        <div className={colClass("stage")}>
          <h3>Staging area (index)</h3>
          <p>Snapshot queued for the <em>next</em> commit.</p>
          {sim.staged ? (
            <p className="mono git-staged-file">members.txt (staged)</p>
          ) : (
            <p className="git-zone-empty">Nothing staged</p>
          )}
        </div>
        <div className={colClass("history")}>
          <h3>Commit history</h3>
          <p>Recorded snapshots.</p>
          {sim.committedStage2 ? (
            <p className="mono git-staged-file">commit c1 — members.txt</p>
          ) : (
            <p className="git-zone-empty">No commits yet</p>
          )}
        </div>
      </div>

      <div className="controls git-cmd-row">
        <button type="button" className="btn mono" onClick={add} disabled={sim.staged}>
          git add members.txt
        </button>
        <button
          type="button"
          className="btn mono"
          onClick={commit}
          disabled={!sim.staged || sim.committedStage2}
        >
          git commit -m &quot;first snapshot&quot;
        </button>
      </div>

      {sim.committedStage2 && (
        <div className="panel git-challenge">
          <p>Which area determines what goes into the <strong>next</strong> commit?</p>
          <div className="controls">
            {["working", "staging", "history"].map((c) => (
              <button
                key={c}
                type="button"
                className={`btn ${quiz === c ? "active" : ""}`}
                onClick={() => answerQuiz(c)}
              >
                {c === "working" ? "Working directory" : c === "staging" ? "Staging area" : "Commit history"}
              </button>
            ))}
          </div>
          {sim.stagingQuizCorrect && (
            <p className="git-callout">Right — only the staging area feeds the next commit.</p>
          )}
        </div>
      )}
    </div>
  );
}
