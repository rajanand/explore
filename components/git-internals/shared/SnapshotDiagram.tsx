"use client";

import React from "react";
import {
  blob,
  commit1,
  commit2,
  commit3,
  IDS,
  treeMembers,
  treeRootC2,
  treeTasks,
} from "@/lib/git-internals/simulation";
import ObjectCard, {
  BlobCard,
  CommitCard,
  RefCard,
  TreeCard,
} from "@/components/git-internals/shared/ObjectCard";

type SnapshotDiagramProps = {
  variant: "c1" | "c2" | "c2-dedup" | "refs";
  showTag?: boolean;
  showBranchA?: boolean;
  c3Exists?: boolean;
  headOnBranchA?: boolean;
};

export default function SnapshotDiagram({
  variant,
  showTag = false,
  showBranchA = false,
  c3Exists = false,
  headOnBranchA = false,
}: SnapshotDiagramProps) {
  const b = blob();
  const c1 = commit1();
  const c2 = commit2();
  const c3 = commit3();

  if (variant === "c1") {
    return (
      <div className="git-snapshot" aria-label="First commit snapshot">
        <CommitCard commit={c1} variant="new" />
        <div className="git-snapshot-link mono">└── tree</div>
        <TreeCard tree={treeMembers()} variant="new" />
        <div className="git-snapshot-link mono">└── Members.txt → blob</div>
        <BlobCard blob={b} variant="new" />
      </div>
    );
  }

  if (variant === "c2" || variant === "c2-dedup") {
    const highlight = variant === "c2-dedup";
    return (
      <div className="git-snapshot" aria-label="Second commit snapshot">
        <CommitCard commit={c2} variant={highlight ? "new" : "default"} />
        <div className="git-snapshot-link mono">parent → {IDS.commit1}</div>
        <TreeCard tree={treeRootC2()} variant={highlight ? "new" : "default"} />
        <div className="git-snapshot-branch">
          <div className="git-snapshot-link mono">Members.txt →</div>
          <BlobCard blob={b} variant={highlight ? "reused" : "default"} />
          <div className="git-snapshot-sub">
            <TreeCard tree={treeTasks()} variant={highlight ? "new" : "default"} />
            <div className="git-snapshot-link mono">Wash the dishes.txt →</div>
            <BlobCard blob={b} variant={highlight ? "reused" : "default"} />
          </div>
        </div>
        {highlight && (
          <p className="git-snapshot-count mono">
            2 commits · 3 trees · <strong>1 blob</strong>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="git-snapshot git-snapshot--refs" aria-label="References">
      <div className="git-ref-row">
        <RefCard name="master" targetShort={IDS.commit2} refType="branch" movable />
        {showTag && (
          <RefCard name="v1.0" targetShort={IDS.commit2} refType="tag" movable={false} />
        )}
        {showBranchA && (
          <RefCard
            name="branchA"
            targetShort={c3Exists ? IDS.commit3 : IDS.commit2}
            refType="branch"
            movable
            variant={c3Exists ? "active" : "pointer"}
          />
        )}
        <RefCard
          name="HEAD"
          targetShort={headOnBranchA && showBranchA ? "branchA" : "master"}
          refType="head"
          movable={false}
          variant="pointer"
        />
      </div>
      <div className="git-snapshot-chain">
        <CommitCard commit={c1} />
        <span className="mono">→</span>
        <CommitCard commit={c2} variant={c3Exists ? "default" : "active"} />
        {c3Exists && (
          <>
            <span className="mono">→</span>
            <CommitCard commit={c3} variant="active" />
          </>
        )}
      </div>
    </div>
  );
}
