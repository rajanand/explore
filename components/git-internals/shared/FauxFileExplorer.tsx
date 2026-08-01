"use client";

import React from "react";

type FauxFileExplorerProps = {
  files: { path: string; content: string }[];
  highlight?: string;
};

export default function FauxFileExplorer({
  files,
  highlight,
}: FauxFileExplorerProps) {
  return (
    <div className="git-faux-explorer">
      <p className="git-field-label mono">Project snapshot</p>
      <ul className="git-faux-tree">
        {files.map((f) => (
          <li
            key={f.path}
            className={highlight === f.path ? "git-faux-file active" : "git-faux-file"}
          >
            <span className="mono">{f.path}</span>
            <span className="git-faux-file-content mono">{f.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
