"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import HomePagePlates from "@/components/home/HomePagePlates";

const MODULE_META: Record<
  string,
  { order: number; label: string; duration: string }
> = {
  "llm-intro": { order: 1, label: "Foundations", duration: "~25 min" },
  transformer: { order: 2, label: "Architecture", duration: "~40 min" },
  rag: { order: 3, label: "Retrieval", duration: "~20 min" },
  ontology: { order: 4, label: "Knowledge", duration: "~20 min" },
  "git-internals": { order: 5, label: "Version control", duration: "~25 min" },
  "cursor-agents": { order: 6, label: "Agent toolkit", duration: "~15 min" },
  "mcp-servers": { order: 7, label: "Integrations", duration: "~15 min" },
  embeddings: { order: 8, label: "Embeddings", duration: "~20 min" },
  "graph-rag": { order: 9, label: "Graph RAG", duration: "~20 min" },
  "ai-agents": { order: 10, label: "Agents", duration: "~20 min" },
  "llm-evals": { order: 11, label: "Evals", duration: "~20 min" },
  "prompt-context": { order: 12, label: "Context", duration: "~20 min" },
  "fine-tuning": { order: 13, label: "Adaptation", duration: "~15 min" },
  "vector-databases": { order: 14, label: "Storage", duration: "~15 min" },
  "llm-security": { order: 15, label: "Security", duration: "~15 min" },
  "ai-observability": { order: 16, label: "Ops", duration: "~15 min" },
  "streaming-apis": { order: 17, label: "APIs", duration: "~15 min" },
  "knowledge-graphs": { order: 18, label: "Graphs", duration: "~15 min" },
  "tool-calling": { order: 19, label: "Tools", duration: "~15 min" },
  "hybrid-search": { order: 20, label: "Search", duration: "~15 min" },
  "ai-governance": { order: 21, label: "Governance", duration: "~15 min" },
  "context-windows": { order: 22, label: "Limits", duration: "~15 min" },
};

const PATH_STEPS = [
  "LLM basics",
  "Transformer internals",
  "RAG pipelines",
  "Ontologies & graphs",
];

const PATH_STEPS_PRODUCTION = [
  "Embeddings & search",
  "Graph RAG",
  "AI agents",
  "Evals & guardrails",
  "Prompt & context",
];

export default function HomePage() {
  const sortedTopics = [...siteConfig.topics].sort(
    (a, b) =>
      (MODULE_META[a.slug]?.order ?? 99) - (MODULE_META[b.slug]?.order ?? 99)
  );

  return (
    <div className="home-page">
      <HomePagePlates />

      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-hero-inner">
            <p className="home-eyebrow">
              <span className="home-eyebrow-dot" />
              Interactive AI learning
            </p>

            <h1 className="home-title">
              Understand AI
              <br />
              <em>by exploring it</em>
            </h1>

            <p className="home-lede">
              {siteConfig.description} Walk foundations (LLMs, transformers, RAG,
              ontologies) or the production track (embeddings, graph RAG, agents,
              evals, context) — all interactive, not slides.
            </p>

            <div className="home-hero-actions">
              <a href="#modules" className="home-btn home-btn-primary">
                Browse modules
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <Link href="/topics/llm-intro" className="home-btn home-btn-ghost">
                Start with LLMs
              </Link>
            </div>

            <div className="home-hero-stats">
              <div className="home-stat">
                <span className="home-stat-value">{siteConfig.topics.length}</span>
                <span className="home-stat-label">walkthroughs</span>
              </div>
              <div className="home-stat-divider" />
              <div className="home-stat">
                <span className="home-stat-value">100%</span>
                <span className="home-stat-label">interactive</span>
              </div>
              <div className="home-stat-divider" />
              <div className="home-stat">
                <span className="home-stat-value">Free</span>
                <span className="home-stat-label">open learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-path" aria-label="Suggested learning paths">
        <div className="home-path-inner">
          <p className="home-path-label">Foundations</p>
          <ol className="home-path-steps">
            {PATH_STEPS.map((step, i) => (
              <li key={step}>
                <span className="home-path-num">{i + 1}</span>
                <span>{step}</span>
                {i < PATH_STEPS.length - 1 && (
                  <span className="home-path-arrow" aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="home-path-inner home-path-inner--secondary">
          <p className="home-path-label">Ship AI features</p>
          <ol className="home-path-steps">
            {PATH_STEPS_PRODUCTION.map((step, i) => (
              <li key={step}>
                <span className="home-path-num">{i + 1}</span>
                <span>{step}</span>
                {i < PATH_STEPS_PRODUCTION.length - 1 && (
                  <span className="home-path-arrow" aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-modules" id="modules">
        <div className="home-modules-header">
          <div>
            <h2>Learning modules</h2>
            <p>
              Each topic is a self-contained walkthrough with diagrams,
              interactives, and real-world examples.
            </p>
          </div>
          <span className="home-modules-badge">
            {siteConfig.topics.length} available
          </span>
        </div>

        <div className="home-module-grid">
          {sortedTopics.map((topic) => {
            const meta = MODULE_META[topic.slug];
            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="home-module-card"
                data-order={meta?.order}
              >
                <div className="home-module-card-top">
                  <span className="home-module-order">
                    {String(meta?.order ?? "·").padStart(2, "0")}
                  </span>
                  <span className="home-module-tag">{meta?.label}</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="home-module-footer">
                  <span className="home-module-duration">
                    {meta?.duration ?? "Interactive"}
                  </span>
                  <span className="home-module-cta">
                    Open walkthrough
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
