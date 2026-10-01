"use client";

import React from "react";
import GovernanceSidebar, { GOVERNANCE_SECTION_IDS } from "@/components/ai-governance/GovernanceSidebar";
import ApprovalChecklistInteractive from "@/components/ai-governance/ApprovalChecklistInteractive";
import RegionScenarioInteractive from "@/components/ai-governance/RegionScenarioInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function GovernanceWalkthroughApp() {
  const activeId = useScrollSpy(GOVERNANCE_SECTION_IDS);

  return (
    <div className="app">
      <GovernanceSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · enterprise</p>
          <h1>
            AI
            <br />
            <em>governance</em>
          </h1>
          <p className="lede">
            Lightweight gates beat bureaucracy theater — classification, approved models, and audit for
            tools before you scale a pilot.
          </p>
          <div className="panel mono pw-outcome">
            After this module: draft an approval checklist for a new internal AI feature.
          </div>
        </section>

        <section className="step" id="check">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Approval checklist</h2>
          <ApprovalChecklistInteractive />
        </section>

        <section className="step" id="region">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Regions &amp; residency</h2>
          <RegionScenarioInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/llm-security", label: "LLM security" },
              { href: "/topics/ai-observability", label: "Observability" },
              { href: "/topics/llm-evals", label: "Evals" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
