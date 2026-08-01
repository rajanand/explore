"use client";

import React, { useState } from "react";
import GitObjectGraph from "@/components/git-internals/shared/GitObjectGraph";
import { INITIAL_SIM } from "@/lib/git-internals/simulation";

const TERMS = [
  { id: "blob", label: "Blob", hint: "Raw file contents" },
  { id: "tree", label: "Tree", hint: "Names + directory structure" },
  { id: "commit", label: "Commit", hint: "Snapshot metadata + root tree + parents" },
  { id: "branch", label: "Branch", hint: "Movable name → commit" },
  { id: "head", label: "HEAD", hint: "Current checkout" },
  { id: "tag", label: "Tag", hint: "Usually fixed name → commit" },
] as const;

const COMMANDS = [
  { cmd: "git init", explain: "Create an empty repository with a .git directory." },
  { cmd: "git add .", explain: "Stage current working tree snapshots into the index." },
  { cmd: "git commit -m \"first snapshot\"", explain: "Record staged content as a new commit object." },
  { cmd: "git cat-file -p HEAD", explain: "Print the commit object HEAD currently points to." },
  { cmd: "git ls-tree HEAD", explain: "List the root tree entries for that commit." },
];

export default function StageRecap() {
  const [active, setActive] = useState<string | null>(null);
  const sim = {
    ...INITIAL_SIM,
    blobRevealed: true,
    treeRevealed: true,
    commitRevealed: true,
    c2Created: true,
    compareSnapshots: true,
    experimentCreated: true,
    headOnExperiment: true,
    c3Created: true,
    tagAdded: true,
  };

  return (
    <div className="git-stage git-stage--recap">
      <p className="git-stage-lead">
        Click a term to see where it lives in the full graph.
      </p>

      <div className="git-recap-terms">
        {TERMS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`btn ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(active === t.id ? null : t.id)}
            title={t.hint}
          >
            {t.label}
          </button>
        ))}
      </div>
      {active && (
        <p className="git-callout mono">
          {TERMS.find((t) => t.id === active)?.hint}
        </p>
      )}

      <div className="git-graph-panel panel">
        <GitObjectGraph sim={sim} mode="refs" />
      </div>

      <div className="panel git-try-panel">
        <h3>Try it yourself</h3>
        <ul className="git-cmd-list">
          {COMMANDS.map(({ cmd, explain }) => (
            <li key={cmd}>
              <code className="mono">{cmd}</code>
              <span>{explain}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="git-credit">
        Inspired by{" "}
        <a
          href="https://octobot.medium.com/how-git-internally-works-1f0932067bee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Octobot&apos;s &quot;How Git Internally Works&quot;
        </a>
      </footer>
    </div>
  );
}
