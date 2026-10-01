"use client";

import React from "react";
import Link from "next/link";
import AiAgentsSidebar, { AI_AGENTS_SECTION_IDS } from "@/components/ai-agents/AiAgentsSidebar";
import AgentLoopInteractive from "@/components/ai-agents/AgentLoopInteractive";
import ToolPickerInteractive from "@/components/ai-agents/ToolPickerInteractive";
import MemoryLanesInteractive from "@/components/ai-agents/MemoryLanesInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function AiAgentsWalkthroughApp() {
  const activeId = useScrollSpy(AI_AGENTS_SECTION_IDS);

  return (
    <div className="app">
      <AiAgentsSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · agents</p>
          <h1>
            AI agents
            <br />
            <em>in production</em>
          </h1>
          <p className="lede">
            Vendor-neutral patterns for systems that <strong>plan, call tools, and observe</strong> —
            with memory and human gates where it matters.
          </p>
        </section>

        <section className="step" id="vs-chat">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Agent vs chatbot</h2>
          <p className="lede">
            A chatbot answers from context in one shot. An agent may run many tool rounds, handle
            errors, and stop only when a goal is satisfied.
          </p>
        </section>

        <section className="step" id="loop">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">ReAct-style loop</h2>
          <AgentLoopInteractive />
        </section>

        <section className="step" id="tools">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Choosing tools</h2>
          <ToolPickerInteractive />
        </section>

        <section className="step" id="memory">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Memory lanes</h2>
          <p className="lede">Not everything belongs in the context window. Toggle movable items.</p>
          <MemoryLanesInteractive />
        </section>

        <section className="step" id="ops">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">Safety &amp; traces</h2>
          <ul className="aa-list">
            <li>Require approval for irreversible actions (deploy, delete, spend).</li>
            <li>Log tool inputs/outputs for audit — traces beat screenshots of chat.</li>
            <li>Rate-limit and scope tools per environment (read-only prod).</li>
          </ul>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 06</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/llm-intro", label: "LLM intro (LLM as OS)" },
              { href: "/topics/cursor-agents", label: "Cursor Agents (IDE edition)" },
              { href: "/topics/mcp-servers", label: "MCP servers" },
            ]}
          />
          <p className="note">
            Next: <Link href="/topics/llm-evals">Evals &amp; guardrails</Link> before shipping agents
            to users.
          </p>
        </section>
      </main>
    </div>
  );
}
