"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import { CONTENT_RODRIGO, IDS } from "@/lib/git-internals/simulation";

export default function Stage02Hash() {
  const { sim, updateSim } = useGitLesson();

  const runHash = () => {
    updateSim({ hashDemoRun: true, hashSameTwiceSeen: true });
  };

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        Git stores content and assigns a <strong>hash key</strong> — a short fingerprint
        of the bytes. Same content → same key, on any machine. Traditional Git uses
        SHA-1; newer repos may use SHA-256.
      </p>

      <div className="panel">
        <p className="mono git-catfile-cmd">
          git hash-object --stdin
        </p>
        <p className="git-field-label">Input string</p>
        <p className="mono git-hash-input">{CONTENT_RODRIGO}</p>
        <button
          type="button"
          className="btn active"
          onClick={runHash}
          disabled={sim.hashDemoRun}
        >
          Compute hash (simulated)
        </button>
        {sim.hashDemoRun && (
          <div className="git-hash-result">
            <p className="mono">
              {IDS.blob1}05855a2389ddac28d1b167dd48b2226141
            </p>
            <p className="git-callout">
              Run it again with the same string — you get the <strong>same</strong> key.
              Git uses this to find and reuse content.
            </p>
          </div>
        )}
      </div>

      <details className="git-accuracy-note">
        <summary>Accuracy note</summary>
        <p>
          The hash is Git&apos;s content identifier inside a repository format — not a
          general proof that content is &quot;unique in the universe&quot; or tamper-proof
          in every security sense.
        </p>
      </details>
    </div>
  );
}
