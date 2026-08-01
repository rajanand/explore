"use client";

import React from "react";
import { useGitLesson } from "@/components/git-internals/GitLessonContext";
import CatFilePanel from "@/components/git-internals/shared/CatFilePanel";
import { TREE1_CAT } from "@/lib/git-internals/simulation";

export default function Stage07Tree() {
  const { sim, updateSim } = useGitLesson();

  return (
    <div className="git-stage">
      <p className="git-stage-lead">
        A <strong>tree</strong> is Git&apos;s directory object. Each line records permissions,
        object type, hash, and <strong>filename</strong>. Trees can point to blobs or other trees.
      </p>

      <CatFilePanel
        objectType="tree"
        command="git cat-file -p 490296…"
        content={TREE1_CAT}
        inspected={sim.treeInspected}
        onInspect={() => updateSim({ treeInspected: true })}
      />

      {sim.treeInspected && (
        <p className="git-callout">
          <strong>Third big idea:</strong> filenames live in the tree, not in the blob.
          The tree says &quot;Members.txt&quot; maps to blob <span className="mono">76871a…</span>.
        </p>
      )}
    </div>
  );
}
