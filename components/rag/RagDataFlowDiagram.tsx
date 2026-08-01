"use client";

import React, { useState } from "react";

type FlowView = "current" | "gap" | "rag";

const VIEWS: { id: FlowView; label: string }[] = [
  { id: "current", label: "How it works today" },
  { id: "gap", label: "The gap" },
  { id: "rag", label: "RAG data flow" },
];

const GAP_ITEMS = [
  {
    title: "No access to private data",
    detail: "HR policies, runbooks, and tickets never entered the training set.",
  },
  {
    title: "Stale knowledge",
    detail: "Weights freeze at training time — new API limits or deploys aren't reflected.",
  },
  {
    title: "Hallucination risk",
    detail: "The model fills gaps with plausible-sounding guesses instead of citing sources.",
  },
  {
    title: "No auditable sources",
    detail: "You can't trace which document justified an answer for compliance or debugging.",
  },
];

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="rag-flow-arrow">
      <span className="rag-flow-arrow-line" />
      {label ? <span className="rag-flow-arrow-label mono">{label}</span> : null}
    </div>
  );
}

function FlowNode({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "user" | "llm" | "docs" | "store" | "warn" | "good";
  className?: string;
}) {
  return (
    <div className={`rag-flow-node rag-flow-node-${variant} ${className}`}>
      {children}
    </div>
  );
}

function CurrentFlow() {
  return (
    <div className="rag-flow-canvas">
      <p className="mono rag-flow-phase-label">Query time only — no document path</p>
      <div className="rag-flow-row">
        <FlowNode variant="user">
          <span className="mono">User</span>
          <span>Asks a question</span>
        </FlowNode>
        <FlowArrow />
        <FlowNode variant="default">
          <span className="mono">Your app</span>
          <span>Builds a prompt</span>
        </FlowNode>
        <FlowArrow />
        <FlowNode variant="llm">
          <span className="mono">LLM</span>
          <span>Frozen weights only</span>
        </FlowNode>
        <FlowArrow />
        <FlowNode variant="warn">
          <span className="mono">Answer</span>
          <span>Generic / guessed</span>
        </FlowNode>
      </div>

      <div className="rag-flow-isolated">
        <FlowNode variant="docs" className="rag-flow-isolated-docs">
          <span className="mono">Company docs</span>
          <span>PDFs, wikis, tickets</span>
        </FlowNode>
        <div className="rag-flow-broken-link">
          <span className="rag-flow-broken-icon">✕</span>
          <span className="mono">not connected to the model</span>
        </div>
      </div>

      <p className="legend rag-flow-caption">
        This is the default &quot;chat with GPT&quot; architecture — powerful language
        skill, but no live wire into your knowledge base.
      </p>
    </div>
  );
}

function GapView() {
  return (
    <div className="rag-flow-canvas">
      <div className="rag-flow-gap-diagram">
        <div className="rag-flow-gap-side">
          <FlowNode variant="docs">
            <span className="mono">Your knowledge</span>
            <span>Policies, APIs, runbooks</span>
          </FlowNode>
        </div>
        <div className="rag-flow-gap-middle">
          <div className="rag-flow-gap-bridge">
            <span className="mono">THE GAP</span>
            <p>No retrieval layer</p>
          </div>
        </div>
        <div className="rag-flow-gap-side">
          <FlowNode variant="llm">
            <span className="mono">LLM</span>
            <span>Public training only</span>
          </FlowNode>
        </div>
      </div>

      <ul className="rag-gap-list">
        {GAP_ITEMS.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>

      <p className="legend rag-flow-caption">
        <strong>What RAG solves:</strong> bridge the gap by fetching relevant
        documents at query time and passing them into the prompt — without
        retraining the model.
      </p>
    </div>
  );
}

function RagFlow() {
  return (
    <div className="rag-flow-canvas">
      <div className="rag-flow-lane">
        <p className="mono rag-flow-phase-label rag-flow-phase-offline">
          Offline · indexing (once / on doc change)
        </p>
        <div className="rag-flow-row rag-flow-row-compact">
          <FlowNode variant="docs">
            <span className="mono">Documents</span>
            <span>PDF, MD, tickets</span>
          </FlowNode>
          <FlowArrow label="chunk" />
          <FlowNode variant="default">
            <span className="mono">Chunks</span>
            <span>512-token pieces</span>
          </FlowNode>
          <FlowArrow label="embed" />
          <FlowNode variant="default">
            <span className="mono">Embeddings</span>
            <span>768-d vectors</span>
          </FlowNode>
          <FlowArrow label="upsert" />
          <FlowNode variant="store">
            <span className="mono">Vector DB</span>
            <span>Searchable index</span>
          </FlowNode>
        </div>
      </div>

      <div className="rag-flow-lane-divider">
        <span className="mono">query time · every user question</span>
      </div>

      <div className="rag-flow-lane">
        <div className="rag-flow-row rag-flow-row-compact">
          <FlowNode variant="user">
            <span className="mono">User query</span>
            <span>Natural language</span>
          </FlowNode>
          <FlowArrow label="embed" />
          <FlowNode variant="default">
            <span className="mono">Similarity search</span>
            <span>Top-k chunks</span>
          </FlowNode>
          <FlowArrow label="inject" />
          <FlowNode variant="default">
            <span className="mono">Augmented prompt</span>
            <span>Context + question</span>
          </FlowNode>
          <FlowArrow />
          <FlowNode variant="llm">
            <span className="mono">LLM</span>
            <span>Reads context</span>
          </FlowNode>
          <FlowArrow />
          <FlowNode variant="good">
            <span className="mono">Grounded answer</span>
            <span>Cites your docs</span>
          </FlowNode>
        </div>
      </div>

      <p className="legend rag-flow-caption">
        Data flows <strong>into</strong> the vector store during indexing, then
        <strong> out</strong> at query time into the prompt. The LLM weights stay
        fixed; fresh knowledge rides in the context window.
      </p>
    </div>
  );
}

export default function RagDataFlowDiagram() {
  const [view, setView] = useState<FlowView>("current");

  return (
    <>
      <div className="controls">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`btn ${view === v.id ? "active" : ""}`}
            onClick={() => setView(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="panel rag-flow-panel">
        {view === "current" && <CurrentFlow />}
        {view === "gap" && <GapView />}
        {view === "rag" && <RagFlow />}
      </div>
    </>
  );
}
