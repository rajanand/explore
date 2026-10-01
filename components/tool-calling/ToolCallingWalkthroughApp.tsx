"use client";

import React from "react";
import Link from "next/link";
import ToolCallingSidebar, { TOOL_CALLING_SECTION_IDS } from "@/components/tool-calling/ToolCallingSidebar";
import SchemaFieldsInteractive from "@/components/tool-calling/SchemaFieldsInteractive";
import ErrorPayloadInteractive from "@/components/tool-calling/ErrorPayloadInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function ToolCallingWalkthroughApp() {
  const activeId = useScrollSpy(TOOL_CALLING_SECTION_IDS);

  return (
    <div className="app">
      <ToolCallingSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · agents</p>
          <h1>
            Tool &amp;
            <br />
            <em>function calling</em>
          </h1>
          <p className="lede">
            Tools are APIs with JSON contracts. Good schemas and error payloads determine whether
            agents recover or loop forever.
          </p>
          <div className="panel mono pw-outcome">
            After this module: design a tool schema and error shape for one internal action.
          </div>
        </section>

        <section className="step" id="schema">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Schema as contract</h2>
          <SchemaFieldsInteractive />
        </section>

        <section className="step" id="errors">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Actionable errors</h2>
          <ErrorPayloadInteractive />
        </section>

        <section className="step" id="mcp">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">MCP parallel</h2>
          <p className="lede">
            MCP discovers tools at runtime with the same contract idea — see{" "}
            <Link href="/topics/mcp-servers">MCP servers</Link> for wiring; keep business validation
            on your API, not in the prompt.
          </p>
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/ai-agents", label: "AI agents" },
              { href: "/topics/mcp-servers", label: "MCP servers" },
              { href: "/topics/llm-security", label: "LLM security" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
