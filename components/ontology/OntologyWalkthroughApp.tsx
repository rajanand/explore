"use client";

import React from "react";
import OntologySidebar, {
  ONTOLOGY_WALKTHROUGH_SECTION_IDS,
} from "@/components/ontology/OntologySidebar";
import WhatIsOntologyInteractive from "@/components/ontology/WhatIsOntologyInteractive";
import TaxonomyVsOntologyInteractive from "@/components/ontology/TaxonomyVsOntologyInteractive";
import OntologyCreationInteractive from "@/components/ontology/OntologyCreationInteractive";
import BuildingBlocksInteractive from "@/components/ontology/BuildingBlocksInteractive";
import KnowledgeGraphInteractive from "@/components/ontology/KnowledgeGraphInteractive";
import OntologyInAiInteractive from "@/components/ontology/OntologyInAiInteractive";
import PracticeInteractive from "@/components/ontology/PracticeInteractive";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function OntologyWalkthroughApp() {
  const activeId = useScrollSpy(ONTOLOGY_WALKTHROUGH_SECTION_IDS);

  return (
    <div className="app">
      <OntologySidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Interactive guide</p>
          <h1>
            Ontologies
            <br />
            <em>for knowledge &amp; AI</em>
          </h1>
          <p className="lede">
            Learn ontologies through a concrete IT scenario: internal support
            bot, incidents like <strong>INC-1042</strong>, HR policy, API
            runbooks, and production services — then see how to{" "}
            <strong>build one step by step</strong>.
          </p>
          <div
            className="panel mono"
            style={{ fontSize: "14px", color: "var(--ink-dim)" }}
          >
            Example domain: Acme Analytics — Employee, Incident, Service, Policy,
            Runbook. Same docs as the RAG walkthrough, now with explicit structure.
          </div>
          <p className="note">
            Step <strong>03</strong> walks through creation from workshop to
            published schema. Step <strong>05</strong> is the live knowledge graph.
          </p>
        </section>

        <section className="step" id="what-is">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">What is an ontology?</h2>
          <p className="lede">
            A formal schema for a business domain — who and what exists, how
            they connect, and which fields each concept carries.
          </p>
          <WhatIsOntologyInteractive />
        </section>

        <section className="step" id="compare">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Taxonomy vs ontology</h2>
          <p className="lede">
            Confluence folders organize docs. Ontologies capture facts like
            &quot;this incident affects that API&quot; — what support engineers
            actually need.
          </p>
          <TaxonomyVsOntologyInteractive />
        </section>

        <section className="step" id="create">
          <p className="eyebrow">Part 2 · Step 03 — interactive</p>
          <h2 className="title">How an ontology is created</h2>
          <p className="lede">
            Not magic — a repeatable process: scope, workshop with domain experts,
            class hierarchy, properties, relationships, publish schema, wire to
            RAG and tools.
          </p>
          <OntologyCreationInteractive />
        </section>

        <section className="step" id="building-blocks">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Building blocks</h2>
          <p className="lede">
            Four primitives in every ontology — illustrated with Sarah Chen,
            INC-1042, and the Events API.
          </p>
          <BuildingBlocksInteractive />
        </section>

        <section className="step" id="graph">
          <p className="eyebrow">Part 2 · Step 05 — interactive</p>
          <h2 className="title">Knowledge graph view</h2>
          <p className="lede">
            The published ontology becomes a graph — click{" "}
            <span className="mono">INC-1042</span> to see affected services,
            assignees, and linked runbooks.
          </p>
          <KnowledgeGraphInteractive />
        </section>

        <section className="step" id="in-ai">
          <p className="eyebrow">Part 3 · Step 06</p>
          <h2 className="title">Ontology in the AI stack</h2>
          <p className="lede">
            Metadata filters for RAG, tool schemas for LLMs, and graph traversals
            for ops — ontology sits between business knowledge and models.
          </p>
          <OntologyInAiInteractive />
        </section>

        <section className="step" id="practice">
          <p className="eyebrow">Part 3 · Step 07</p>
          <h2 className="title">Formats &amp; checklist</h2>
          <p className="lede">
            Start with JSON Schema or internal YAML; adopt OWL/RDF when you need
            formal reasoning or industry standards.
          </p>
          <PracticeInteractive />
        </section>

        <footer>
          Build the ontology (structure) → tag documents for RAG (text) → let
          the LLM reason over both. Each layer solves a different problem.
        </footer>
      </main>
    </div>
  );
}
