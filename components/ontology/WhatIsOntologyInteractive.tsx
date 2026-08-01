"use client";

import React from "react";

const SCENARIO =
  "Your company deploys an internal chatbot. Employees ask about PTO, API rate limits, and who to page when latency spikes. Without an ontology, every team names things differently and the bot guesses.";

export default function WhatIsOntologyInteractive() {
  return (
    <>
      <div className="panel ont-scenario-panel">
        <p className="mono ont-section-label">Real scenario</p>
        <p className="ont-scenario-text">{SCENARIO}</p>
      </div>

      <div className="panel ont-definition-grid">
        <div className="ont-definition-card">
          <h4>Shared vocabulary</h4>
          <p>
            Everyone agrees <span className="mono">Incident</span> means a
            production Jira ticket, not a security audit.{" "}
            <span className="mono">Employee</span> is not the same as{" "}
            <span className="mono">Customer</span>.
          </p>
        </div>
        <div className="ont-definition-card">
          <h4>Relationships + rules</h4>
          <p>
            An <span className="mono">Incident</span> can{" "}
            <span className="mono">affect</span> a <span className="mono">Service</span>.
            A <span className="mono">Runbook</span>{" "}
            <span className="mono">documents</span> how to fix that service.
          </p>
        </div>
        <div className="ont-definition-card">
          <h4>Machine-readable schema</h4>
          <p>
            Exported as JSON / OWL so RAG pipelines tag documents, search filters
            metadata, and LLM tools validate parameters automatically.
          </p>
        </div>

        <div className="step-formula mono ont-formula-wide">
          Ontology = classes + properties + relationships (+ constraints)
        </div>

        <p className="legend">
          Like a <strong>database schema for meaning</strong> — but focused on
          concepts across HR, ops, and product, not just one app&apos;s tables.
        </p>
      </div>
    </>
  );
}
