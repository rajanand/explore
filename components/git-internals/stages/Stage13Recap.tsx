"use client";

import React from "react";
import { STAGE_LABELS } from "@/lib/git-internals/simulation";

export default function Stage13Recap() {
  return (
    <div className="git-stage git-stage--recap">
      <p className="git-stage-lead">
        You followed the same path as the Octobot article — from &quot;content tracker&quot; to
        objects on disk, then refs that humans can name.
      </p>

      <ol className="git-recap-list">
        {STAGE_LABELS.slice(0, 12).map((label, i) => (
          <li key={label}>
            <span className="mono git-recap-num">{i + 1}.</span> {label}
          </li>
        ))}
      </ol>

      <div className="panel git-recap-takeaways">
        <h3>Three ideas to keep</h3>
        <ul>
          <li>
            <strong>Commits</strong> chain snapshots via parent pointers and root trees.
          </li>
          <li>
            <strong>Trees</strong> name files; <strong>blobs</strong> hold bytes only.
          </li>
          <li>
            <strong>Branches &amp; tags</strong> are refs — small files pointing at commits.
          </li>
        </ul>
      </div>

      <p className="git-credit">
        Inspired by{" "}
        <a
          href="https://octobot.medium.com/how-git-internally-works-1f0932067bee"
          target="_blank"
          rel="noopener noreferrer"
        >
          How Git Internally Works
        </a>
        {" "}on Medium (Octobot).
      </p>
    </div>
  );
}
