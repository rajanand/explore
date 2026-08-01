"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectsFolder from "@/components/git-internals/shared/GitObjectsFolder";

export default function Stage05ThreeObjects() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Your first commit did more than update history — it created <strong>three objects</strong>
        in <span className="mono">.git/objects/</span>: one commit, one tree, one blob.
      </p>

      <GitObjectsFolder
        showCommit1Objects
        opened={sim.objectsFolderOpened}
        onOpen={() => updateSim({ objectsFolderOpened: true })}
      />

      {!sim.objectsFolderOpened && (
        <button
          type="button"
          className="btn active"
          onClick={() => updateSim({ objectsFolderOpened: true })}
        >
          Inspect the folder
        </button>
      )}

      {sim.objectsFolderOpened && (
        <p className="git-callout">
          Next we&apos;ll open each object with <span className="mono">git cat-file -p</span> —
          one type at a time, in the order the article discovers them: commit → tree → blob.
        </p>
      )}
    </div>
  );
}
