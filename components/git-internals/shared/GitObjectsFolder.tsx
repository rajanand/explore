"use client";

import React from "react";
import { IDS } from "@/lib/git-internals/simulation";

type GitObjectsFolderProps = {
  showCommit1Objects?: boolean;
  showCommit2Objects?: boolean;
  highlightNew?: boolean;
  onOpen?: () => void;
  opened?: boolean;
};

const C1_OBJECTS = [
  { prefix: IDS.commit1.slice(0, 2), rest: IDS.commit1.slice(2), label: "commit", new: true },
  { prefix: IDS.tree1.slice(0, 2), rest: IDS.tree1.slice(2), label: "tree", new: true },
  { prefix: IDS.blob1.slice(0, 2), rest: IDS.blob1.slice(2), label: "blob", new: true },
];

const C2_EXTRA = [
  { prefix: IDS.commit2.slice(0, 2), rest: IDS.commit2.slice(2), label: "commit", new: true },
  { prefix: IDS.tree3.slice(0, 2), rest: IDS.tree3.slice(2), label: "tree", new: true },
  { prefix: IDS.tree2.slice(0, 2), rest: IDS.tree2.slice(2), label: "tree", new: true },
];

export default function GitObjectsFolder({
  showCommit1Objects = false,
  showCommit2Objects = false,
  highlightNew = false,
  onOpen,
  opened = false,
}: GitObjectsFolderProps) {
  const objects = showCommit2Objects
    ? [...C1_OBJECTS, ...C2_EXTRA]
    : showCommit1Objects
      ? C1_OBJECTS
      : [];

  return (
    <div className="git-objects-folder panel">
      <div className="git-objects-folder-head">
        <p className="mono git-field-label">.git/objects/</p>
        {onOpen && !opened && (
          <button type="button" className="btn" onClick={onOpen}>
            Open folder
          </button>
        )}
      </div>
      {!opened && !showCommit1Objects && (
        <p className="git-objects-empty mono">info/ · pack/ · (empty)</p>
      )}
      {(opened || objects.length > 0) && (
        <ul className="git-objects-list">
          <li className="mono git-objects-static">info/</li>
          <li className="mono git-objects-static">pack/</li>
          {objects.map((o) => (
            <li
              key={`${o.prefix}${o.rest}`}
              className={`git-objects-entry mono ${
                highlightNew && o.new ? "git-objects-entry--new" : ""
              } ${!highlightNew && objects.indexOf(o) >= 3 ? "git-objects-entry--reused" : ""}`}
            >
              <span className="git-objects-dir">{o.prefix}/</span>
              <span>{o.rest}</span>
              <span className="git-objects-type">{o.label}</span>
            </li>
          ))}
        </ul>
      )}
      {showCommit1Objects && (
        <p className="git-objects-note">
          Git stores objects as <span className="mono">ab/cdef…</span> — first 2
          hex chars = folder, rest = file name.
        </p>
      )}
    </div>
  );
}
