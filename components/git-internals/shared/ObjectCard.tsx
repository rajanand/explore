"use client";

import React, { useState } from "react";
import type { GitBlob, GitCommit, GitTree } from "@/lib/git-internals/simulation";

type ObjectCardProps = {
  kind: "blob" | "tree" | "commit" | "ref";
  shortId?: string;
  title: string;
  subtitle?: string;
  detail?: string;
  variant?: "default" | "new" | "reused" | "active" | "pointer";
  movable?: boolean;
  onClick?: () => void;
  expanded?: boolean;
  children?: React.ReactNode;
};

export default function ObjectCard({
  kind,
  shortId,
  title,
  subtitle,
  detail,
  variant = "default",
  movable,
  onClick,
  expanded,
  children,
}: ObjectCardProps) {
  const [showHash, setShowHash] = useState(false);
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      type={onClick ? "button" : undefined}
      className={`git-object-card git-object-card--${kind} git-object-card--${variant}${onClick ? " git-object-card--clickable" : ""}`}
      onClick={onClick}
    >
      <div className="git-object-card-head">
        <span className="git-object-kind mono">{kind}</span>
        {shortId && (
          <button
            type="button"
            className="git-object-id mono"
            onClick={(e) => {
              e.stopPropagation();
              setShowHash((v) => !v);
            }}
            aria-label="Toggle full object id"
          >
            {showHash ? `${kind} ${shortId}f8c2d1a9…` : shortId}
          </button>
        )}
        {movable !== undefined && (
          <span className="git-object-badge mono">
            {movable ? "moves" : "fixed"}
          </span>
        )}
      </div>
      <p className="git-object-title">{title}</p>
      {subtitle && <p className="git-object-sub mono">{subtitle}</p>}
      {detail && <p className="git-object-detail">{detail}</p>}
      {expanded && children}
    </Tag>
  );
}

export function BlobCard({ blob, variant }: { blob: GitBlob; variant?: ObjectCardProps["variant"] }) {
  return (
    <ObjectCard
      kind="blob"
      shortId={blob.shortId}
      title="File contents only"
      subtitle={`"${blob.content}"`}
      detail="No filename. No folder path."
      variant={variant}
    />
  );
}

export function TreeCard({
  tree,
  variant,
  onClick,
}: {
  tree: GitTree;
  variant?: ObjectCardProps["variant"];
  onClick?: () => void;
}) {
  return (
    <ObjectCard
      kind="tree"
      shortId={tree.shortId}
      title={tree.label}
      subtitle="Directory listing"
      variant={variant}
      onClick={onClick}
      expanded
    >
      <ul className="git-tree-entries mono">
        {tree.entries.map((e) => (
          <li key={e.name}>
            {e.name} → {e.targetKind} {e.targetShort}
          </li>
        ))}
      </ul>
    </ObjectCard>
  );
}

export function CommitCard({
  commit,
  variant,
  onClick,
  active,
}: {
  commit: GitCommit;
  variant?: ObjectCardProps["variant"];
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <ObjectCard
      kind="commit"
      shortId={commit.shortId}
      title={commit.message}
      subtitle={
        commit.parentShorts.length
          ? `parent → ${commit.parentShorts.join(", ")}`
          : "initial commit"
      }
      detail={`tree ${commit.treeShort} · ${commit.author} · ${commit.date}`}
      variant={active ? "active" : variant}
      onClick={onClick}
    />
  );
}

export function RefCard({
  name,
  targetShort,
  refType,
  movable,
  variant,
}: {
  name: string;
  targetShort: string;
  refType: "branch" | "head" | "tag";
  movable: boolean;
  variant?: ObjectCardProps["variant"];
}) {
  return (
    <ObjectCard
      kind="ref"
      title={name}
      subtitle={`→ ${targetShort}`}
      detail={refType === "head" ? "current checkout" : refType}
      movable={movable}
      variant={variant ?? "pointer"}
    />
  );
}
