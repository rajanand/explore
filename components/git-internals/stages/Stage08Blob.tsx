"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import CatFilePanel from "@/components/git-internals/shared/CatFilePanel";
import { BLOB1_CAT } from "@/lib/git-internals/simulation";

export default function Stage08Blob() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        A <strong>blob</strong> (binary large object) holds raw file bytes — nothing else.
        No name, no path, no permissions.
      </p>

      <CatFilePanel
        objectType="blob"
        command="git cat-file -p 76871a…"
        content={BLOB1_CAT}
        inspected={sim.blobInspected}
        onInspect={() => updateSim({ blobInspected: true })}
      />

      {sim.blobInspected && (
        <details
          className="git-accuracy-note"
          open={sim.blobNameNoteRead}
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) {
              updateSim({ blobNameNoteRead: true });
            }
          }}
        >
          <summary>Why isn&apos;t the filename stored here?</summary>
          <p>
            The same bytes could appear as <span className="mono">Members.txt</span> today and
            <span className="mono">notes.txt</span> tomorrow. Trees attach names to content;
            blobs stay pure content so Git can reuse them.
          </p>
        </details>
      )}
    </div>
  );
}
