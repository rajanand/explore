"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectGraph from "@/components/git-internals/shared/GitObjectGraph";
import FauxEditor from "@/components/git-internals/shared/FauxEditor";
import { CONTENT_RODRIGO } from "@/lib/git-internals/simulation";

export default function Stage4SecondCommit() {
  const { sim, updateSim } = useGitLesson();

  const createC2 = () => updateSim({ c2Created: true, tasksContent: CONTENT_RODRIGO });

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Add a new file with the <strong>same content</strong> as members.txt.
        Watch what Git reuses versus what it must create fresh.
      </p>

      <div className="git-workspace panel">
        <FauxEditor
          filename="tasks/wash-dishes.txt"
          value={sim.tasksContent}
          onChange={(v) => updateSim({ tasksContent: v })}
          readOnly={sim.c2Created}
        />
        <button
          type="button"
          className="btn active"
          onClick={createC2}
          disabled={sim.c2Created}
        >
          Stage &amp; commit second snapshot
        </button>
      </div>

      {sim.c2Created && (
        <div className="controls">
          <button
            type="button"
            className={`btn ${sim.compareSnapshots ? "active" : ""}`}
            onClick={() => updateSim({ compareSnapshots: true })}
          >
            Compare snapshots
          </button>
        </div>
      )}

      <div className="git-graph-panel panel">
        <GitObjectGraph
          sim={sim}
          mode={sim.compareSnapshots ? "c2-compare" : "c2"}
        />
      </div>

      {sim.c2Created && (
        <ul className="git-bullet-list">
          <li><span className="git-legend-new">New</span> — commit c2, tree t3, subtree t2</li>
          <li><span className="git-legend-reused">Reused</span> — blob b1 (same &quot;Rodrigo&quot; bytes)</li>
        </ul>
      )}
    </div>
  );
}
