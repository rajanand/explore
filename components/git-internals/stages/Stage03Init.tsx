"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectsFolder from "@/components/git-internals/shared/GitObjectsFolder";
import FauxEditor from "@/components/git-internals/shared/FauxEditor";

export default function Stage03Init() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        <span className="mono">git init</span> creates a <span className="mono">.git</span> folder.
        The <span className="mono">objects/</span> directory is Git&apos;s object database — empty
        until you commit.
      </p>

      <div className="git-init-grid">
        <div>
          <FauxEditor
            filename="Members.txt"
            value={sim.workingContent}
            onChange={(v) => updateSim({ workingContent: v })}
            readOnly={sim.repoInitialized}
          />
          <button
            type="button"
            className="btn mono active"
            onClick={() => updateSim({ repoInitialized: true })}
            disabled={sim.repoInitialized}
          >
            git init
          </button>
        </div>
        <GitObjectsFolder
          opened={sim.repoInitialized}
          onOpen={() => updateSim({ repoInitialized: true })}
        />
      </div>

      {sim.repoInitialized && (
        <p className="git-callout">
          Only <span className="mono">info/</span> and <span className="mono">pack/</span> exist
          for now. Real objects appear after your first commit.
        </p>
      )}
    </div>
  );
}
