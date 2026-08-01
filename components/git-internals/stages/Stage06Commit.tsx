"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import CatFilePanel from "@/components/git-internals/shared/CatFilePanel";
import { COMMIT1_CAT } from "@/lib/git-internals/simulation";
import SnapshotDiagram from "@/components/git-internals/shared/SnapshotDiagram";

export default function Stage06Commit() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        A <strong>commit</strong> is plain text metadata: author, date, message — and a
        <strong> pointer to a tree</strong> that captures the whole project snapshot.
      </p>

      <CatFilePanel
        objectType="commit"
        command="git cat-file -p 54725fc…"
        content={COMMIT1_CAT}
        inspected={sim.commitInspected}
        onInspect={() => updateSim({ commitInspected: true })}
      />

      {sim.commitInspected && (
        <>
          <p className="git-callout">
            Notice the <span className="mono">tree</span> line — the commit doesn&apos;t list
            files directly. It points at one root tree object.
          </p>
          <SnapshotDiagram variant="c1" />
        </>
      )}
    </div>
  );
}
