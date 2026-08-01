"use client";

import React, { useState } from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import FauxEditor from "@/components/git-internals/shared/FauxEditor";
import { IDS } from "@/lib/git-internals/simulation";

export default function Stage1ContentTracker() {
  const { sim, updateSim } = useGitLesson();
  const [dedupChoice, setDedupChoice] = useState<string | null>(null);

  const track = () => {
    updateSim({ tracked: true });
  };

  const answerDedup = (choice: "one" | "two") => {
    setDedupChoice(choice);
    if (choice === "one") updateSim({ dedupCorrect: true });
  };

  return (
    <div className="git-stage git-stage--intro">
      <p className="git-stage-lead">
        Git is not mainly a cloud sync button. At its core, it is a{" "}
        <strong>content tracker</strong> — it stores snapshots of file contents
        and names them with content-derived IDs.
      </p>

      <div className="git-workspace panel">
        <p className="git-field-label mono">Working directory</p>
        <FauxEditor
          filename="members.txt"
          value={sim.membersContent}
          onChange={(v) => updateSim({ membersContent: v })}
        />
        <button type="button" className="btn active" onClick={track} disabled={sim.tracked}>
          Ask Git to track it
        </button>
        {sim.tracked && (
          <p className="git-callout mono">
            Object ID (abbrev): <strong>{IDS.blob1}</strong> — derived from
            contents &quot;{sim.membersContent}&quot;
          </p>
        )}
      </div>

      <details className="git-accuracy-note">
        <summary>Accuracy note: hashes</summary>
        <p>
          Git uses a hash as a content identifier for objects. Traditional
          repositories use SHA-1; modern Git also supports SHA-256. This is an
          internal ID scheme — not a guarantee that content is &quot;safe&quot; in an
          absolute cryptographic sense.
        </p>
      </details>

      {sim.tracked && (
        <div className="panel git-challenge">
          <p className="git-field-label">Same content?</p>
          <p>
            <span className="mono">notes.txt</span> and{" "}
            <span className="mono">members.txt</span> both contain &quot;Rodrigo&quot;.
            Should Git store two separate content objects?
          </p>
          <div className="controls">
            <button
              type="button"
              className={`btn ${dedupChoice === "one" ? "active" : ""}`}
              onClick={() => answerDedup("one")}
            >
              One object — same contents
            </button>
            <button
              type="button"
              className={`btn ${dedupChoice === "two" ? "active" : ""}`}
              onClick={() => answerDedup("two")}
            >
              Two objects — different filenames
            </button>
          </div>
          {sim.dedupCorrect && (
            <p className="git-callout">
              Correct. Git stores <strong>contents</strong> in blobs. Filenames
              live elsewhere (trees). Identical bytes → same blob ID.
            </p>
          )}
          {dedupChoice === "two" && !sim.dedupCorrect && (
            <p className="git-callout git-callout--warn">
              Filenames are not stored inside blobs. Same bytes reuse one object.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
