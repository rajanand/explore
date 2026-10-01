"use client";

import React from "react";
import CursorAgentsSidebar, {
  CURSOR_AGENTS_SECTION_IDS,
} from "@/components/cursor-agents/CursorAgentsSidebar";
import AgentLoopInteractive from "@/components/cursor-agents/AgentLoopInteractive";
import SkillsInteractive from "@/components/cursor-agents/SkillsInteractive";
import HooksInteractive from "@/components/cursor-agents/HooksInteractive";
import SubagentsInteractive from "@/components/cursor-agents/SubagentsInteractive";
import StackInteractive from "@/components/cursor-agents/StackInteractive";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function CursorAgentsWalkthroughApp() {
  const activeId = useScrollSpy(CURSOR_AGENTS_SECTION_IDS);

  return (
    <div className="app">
      <CursorAgentsSidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Cursor · agent toolkit</p>
          <h1>
            Agents, skills,
            <br />
            <em>hooks &amp; subagents</em>
          </h1>
          <p className="lede">
            Modern coding agents are more than chat: they run tools, load playbooks, enforce
            guardrails, and delegate to specialists. This module maps those pieces so you can
            design workflows — not just prompts.
          </p>
          <div className="panel mono ca-hero-panel">
            Built for Cursor-style agents; concepts apply to other agentic IDEs with different names.
          </div>
        </section>

        <section className="step" id="agent-loop">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">The agent loop</h2>
          <p className="lede">
            Each turn is a loop: your message enters context, the model plans, optional hooks
            run around tool use, and results feed the next step until it replies.
          </p>
          <AgentLoopInteractive />
        </section>

        <section className="step" id="skills">
          <p className="eyebrow">Part 2 · Step 02</p>
          <h2 className="title">Skills — portable playbooks</h2>
          <p className="lede">
            A <strong>skill</strong> is a folder with <span className="mono">SKILL.md</span>:
            frontmatter plus instructions. The agent pulls it in when your request matches the
            skill&apos;s description — great for repeatable team workflows.
          </p>
          <SkillsInteractive />
        </section>

        <section className="step" id="hooks">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Hooks — event-driven guardrails</h2>
          <p className="lede">
            <strong>Hooks</strong> are scripts or prompts tied to lifecycle events: before a shell
            command, after a file edit, when a subagent starts, and more. They audit, block, or
            inject context — without rewriting the whole agent.
          </p>
          <HooksInteractive />
        </section>

        <section className="step" id="subagents">
          <p className="eyebrow">Part 3 · Step 04</p>
          <h2 className="title">Subagents — delegated specialists</h2>
          <p className="lede">
            When a task needs depth or isolation, the parent agent can launch a{" "}
            <strong>subagent</strong> with its own prompt and tools. You get parallelism and focus;
            the parent stays responsible for the final answer.
          </p>
          <SubagentsInteractive />
        </section>

        <section className="step" id="stack">
          <p className="eyebrow">Part 3 · Step 05</p>
          <h2 className="title">How it fits together</h2>
          <p className="lede">
            Rules, skills, hooks, tools, and subagents occupy different layers. Click each layer
            to see its role in a single agent turn.
          </p>
          <StackInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 3 · Step 06</p>
          <h2 className="title">Recap</h2>
          <ul className="ca-recap-list">
            <li>
              <strong>Agent</strong> — orchestrates turns, tools, and delegation.
            </li>
            <li>
              <strong>Skills</strong> — optional markdown expertise loaded when relevant.
            </li>
            <li>
              <strong>Hooks</strong> — deterministic checks on specific events.
            </li>
            <li>
              <strong>Subagents</strong> — focused workers for search, review, deploy, and more.
            </li>
          </ul>
          <p className="note">
            Next steps in Cursor: add a project skill under{" "}
            <span className="mono">.cursor/skills/</span>, a team hook in{" "}
            <span className="mono">.cursor/hooks.json</span>, connect an{" "}
            <a href="/topics/mcp-servers">MCP server</a> for external tools, and try explicit
            subagent requests (“use the explore agent to map our API routes”).
          </p>
          <p className="ca-credit">
            Product details evolve — check{" "}
            <a
              href="https://cursor.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cursor documentation
            </a>{" "}
            for the latest hook events and skill settings.
          </p>
        </section>
      </main>
    </div>
  );
}
