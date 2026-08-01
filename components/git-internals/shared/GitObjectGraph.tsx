"use client";

import React from "react";
import {
  blobForContent,
  commit1,
  commit2,
  commit3,
  IDS,
  tree1,
  tree2,
  tree3,
  type SimState,
} from "@/lib/git-internals/simulation";
import {
  BlobCard,
  CommitCard,
  RefCard,
  TreeCard,
} from "@/components/git-internals/shared/ObjectCard";

type GitObjectGraphProps = {
  sim: SimState;
  mode: "c1" | "c2" | "c2-compare" | "history" | "refs";
  onCommitClick?: (id: "c1" | "c2") => void;
  activeCommit?: "c1" | "c2" | null;
};

export default function GitObjectGraph({
  sim,
  mode,
  onCommitClick,
  activeCommit,
}: GitObjectGraphProps) {
  const blob = blobForContent(sim.membersContent);
  const c1 = commit1();
  const c2 = commit2();
  const c3 = commit3();

  if (mode === "c1") {
    return (
      <div className="git-graph git-graph--staged" aria-label="Object graph">
        {sim.commitRevealed && (
          <div className="git-graph-row">
            <CommitCard commit={c1} variant="new" />
            <span className="git-graph-line" aria-hidden="true" />
          </div>
        )}
        {sim.treeRevealed && (
          <div className="git-graph-row">
            <TreeCard
              tree={tree1()}
              variant={sim.commitRevealed ? "reused" : "new"}
            />
            <span className="git-graph-line" aria-hidden="true" />
          </div>
        )}
        {sim.blobRevealed && (
          <div className="git-graph-row git-graph-row--leaf">
            <BlobCard blob={blob} variant="new" />
            <span className="git-graph-annotation mono">members.txt →</span>
          </div>
        )}
        {!sim.blobRevealed && (
          <p className="git-graph-hint">Click through the steps to reveal objects.</p>
        )}
      </div>
    );
  }

  if (mode === "c2" || mode === "c2-compare") {
    const highlightNew = mode === "c2-compare" && sim.compareSnapshots;
    return (
      <div className="git-graph" aria-label="Object graph with deduplication">
        <div className="git-graph-row">
          <CommitCard commit={c2} variant={highlightNew ? "new" : "default"} />
        </div>
        <div className="git-graph-row">
          <span className="git-graph-pointer mono">parent →</span>
          <CommitCard
            commit={c1}
            variant={highlightNew ? "reused" : "default"}
            onClick={() => onCommitClick?.("c1")}
          />
        </div>
        <div className="git-graph-row">
          <TreeCard
            tree={tree3()}
            variant={highlightNew ? "new" : "default"}
          />
        </div>
        <div className="git-graph-branch">
          <div className="git-graph-row git-graph-row--leaf">
            <span className="git-graph-annotation mono">members.txt →</span>
            <BlobCard blob={blob} variant={highlightNew ? "reused" : "default"} />
          </div>
          <div className="git-graph-sub">
            <TreeCard
              tree={tree2()}
              variant={highlightNew ? "new" : "default"}
            />
            <div className="git-graph-row git-graph-row--leaf">
              <span className="git-graph-annotation mono">wash-dishes.txt →</span>
              <BlobCard blob={blob} variant={highlightNew ? "reused" : "default"} />
            </div>
          </div>
        </div>
        {highlightNew && (
          <p className="git-graph-legend">
            <span className="git-legend-new">New object</span>
            <span className="git-legend-reused">Reused object</span>
          </p>
        )}
      </div>
    );
  }

  if (mode === "history") {
    return (
      <div className="git-graph git-graph--history" aria-label="Commit history chain">
        <div className="git-graph-chain">
          <CommitCard
            commit={c1}
            active={activeCommit === "c1"}
            onClick={() => onCommitClick?.("c1")}
          />
          <span className="git-graph-arrow mono" aria-hidden="true">→</span>
          <CommitCard
            commit={c2}
            active={activeCommit === "c2"}
            onClick={() => onCommitClick?.("c2")}
          />
        </div>
        <p className="git-graph-hint">Click a commit to view that snapshot.</p>
      </div>
    );
  }

  return (
    <div className="git-graph git-graph--refs" aria-label="References graph">
      <div className="git-ref-grid">
        <RefCard name="main" targetShort={IDS.commit2} refType="branch" movable />
        {sim.tagAdded && (
          <RefCard
            name="v1.0"
            targetShort={IDS.commit2}
            refType="tag"
            movable={false}
          />
        )}
        {sim.experimentCreated && (
          <RefCard
            name="experiment"
            targetShort={sim.c3Created ? IDS.commit3 : IDS.commit2}
            refType="branch"
            movable
            variant={sim.c3Created ? "active" : "pointer"}
          />
        )}
        <RefCard
          name="HEAD"
          targetShort={
            sim.headOnExperiment && sim.experimentCreated ? "experiment" : "main"
          }
          refType="head"
          movable={false}
          variant="pointer"
        />
      </div>
      <div className="git-graph-chain git-graph-chain--compact">
        <CommitCard commit={c1} />
        <span className="git-graph-arrow mono">→</span>
        <CommitCard
          commit={c2}
          variant={sim.c3Created ? "default" : "active"}
        />
        {sim.c3Created && (
          <>
            <span className="git-graph-arrow mono">→</span>
            <CommitCard commit={c3} variant="active" />
          </>
        )}
      </div>
    </div>
  );
}
