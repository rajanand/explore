"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import GitObjectGraph from "@/components/git-internals/shared/GitObjectGraph";

export default function Stage6Refs() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Branches and tags are <strong>friendly names</strong> — lightweight
        pointers. They are not the same as commits, blobs, or trees.
      </p>

      <div className="controls git-cmd-row">
        <button
          type="button"
          className="btn mono"
          onClick={() => updateSim({ experimentCreated: true })}
          disabled={sim.experimentCreated}
        >
          git branch experiment
        </button>
        <button
          type="button"
          className="btn mono"
          onClick={() => updateSim({ headOnExperiment: true })}
          disabled={!sim.experimentCreated || sim.headOnExperiment}
        >
          git checkout experiment
        </button>
        <button
          type="button"
          className="btn mono"
          onClick={() => updateSim({ c3Created: true })}
          disabled={!sim.headOnExperiment || sim.c3Created}
        >
          git commit (on experiment)
        </button>
        <button
          type="button"
          className="btn mono"
          onClick={() => updateSim({ tagAdded: true })}
          disabled={sim.tagAdded}
        >
          git tag v1.0 c2
        </button>
      </div>

      <div className="git-graph-panel panel">
        <GitObjectGraph sim={sim} mode="refs" />
      </div>

      <p className="git-callout">
        After c3: <span className="mono">main</span> still points at c2;
        <span className="mono"> experiment</span> moved to c3;
        <span className="mono"> v1.0</span> stays fixed at c2.
      </p>
    </div>
  );
}
