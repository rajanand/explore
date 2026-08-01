"use client";

import React from "react";

type CatFilePanelProps = {
  objectType: "commit" | "tree" | "blob";
  content: string;
  command: string;
  onInspect?: () => void;
  inspected?: boolean;
};

export default function CatFilePanel({
  objectType,
  content,
  command,
  onInspect,
  inspected = false,
}: CatFilePanelProps) {
  return (
    <div className="git-catfile panel">
      <p className="mono git-catfile-cmd">{command}</p>
      {!inspected && onInspect && (
        <button type="button" className="btn active" onClick={onInspect}>
          Run (simulated)
        </button>
      )}
      {inspected && (
        <pre className="git-catfile-out mono" aria-live="polite">{content}</pre>
      )}
      <p className="git-catfile-type mono">type: {objectType}</p>
    </div>
  );
}
