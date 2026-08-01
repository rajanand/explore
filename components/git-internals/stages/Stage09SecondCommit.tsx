"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import CatFilePanel from "@/components/git-internals/shared/CatFilePanel";
import { COMMIT2_CAT } from "@/lib/git-internals/simulation";
import SnapshotDiagram from "@/components/git-internals/shared/SnapshotDiagram";

export default function Stage09SecondCommit() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Add <span className="mono">Tasks/Wash the dishes.txt</span> with the same content
        &quot;Rodrigo&quot; and commit again. The new commit has a <strong>parent</strong> —
        a link to the previous snapshot.
      </p>

      <button
        type="button"
        className="btn mono active"
        onClick={() => updateSim({ secondCommitDone: true })}
        disabled={sim.secondCommitDone}
      >
        git commit -m &quot;Add Wash the dishes.txt&quot;
      </button>

      {sim.secondCommitDone && (
        <>
          <CatFilePanel
            objectType="commit"
            command="git cat-file -p 8b2d91…"
            content={COMMIT2_CAT}
            inspected={sim.secondCommitInspected}
            onInspect={() => updateSim({ secondCommitInspected: true })}
          />
          {sim.secondCommitInspected && (
            <>
              <p className="git-callout">
                The <span className="mono">parent</span> line chains commits into history.
                Each commit points to a tree that describes the full project at that moment.
              </p>
              <SnapshotDiagram variant="c2" />
            </>
          )}
        </>
      )}
    </div>
  );
}
