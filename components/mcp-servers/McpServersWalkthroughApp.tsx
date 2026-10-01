"use client";

import React from "react";
import Link from "next/link";
import McpServersSidebar, {
  MCP_SERVERS_SECTION_IDS,
} from "@/components/mcp-servers/McpServersSidebar";
import ArchitectureInteractive from "@/components/mcp-servers/ArchitectureInteractive";
import DiscoveryInteractive from "@/components/mcp-servers/DiscoveryInteractive";
import ConfigInteractive from "@/components/mcp-servers/ConfigInteractive";
import CallFlowInteractive from "@/components/mcp-servers/CallFlowInteractive";
import AuthInteractive from "@/components/mcp-servers/AuthInteractive";
import WhenMcpInteractive from "@/components/mcp-servers/WhenMcpInteractive";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function McpServersWalkthroughApp() {
  const activeId = useScrollSpy(MCP_SERVERS_SECTION_IDS);

  return (
    <div className="app">
      <McpServersSidebar activeId={activeId} />

      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Model Context Protocol</p>
          <h1>
            MCP servers,
            <br />
            <em>explained interactively</em>
          </h1>
          <p className="lede">
            MCP is how AI hosts plug into your stack — databases, tickets, docs, internal APIs —
            without hard-coding every integration into the IDE. Learn the moving parts and when
            to build or install a server.
          </p>
        </section>

        <section className="step" id="why-mcp">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Why MCP?</h2>
          <p className="lede">
            Before MCP, every tool was custom: different auth, schemas, and wire formats per
            product. MCP standardizes <strong>discovery</strong>, <strong>tool calls</strong>,
            and <strong>resources</strong> so one agent can talk to many backends the same way.
          </p>
          <ul className="mcp-bullet-list">
            <li>Reuse servers across Cursor, Claude Desktop, and other hosts.</li>
            <li>Keep secrets and API logic in the server process, not in the prompt.</li>
            <li>Let the model see structured tool definitions instead of guessing REST shapes.</li>
          </ul>
        </section>

        <section className="step" id="architecture">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">Host, client, server, transport</h2>
          <p className="lede">
            Click each layer to see who does what in a typical setup.
          </p>
          <ArchitectureInteractive />
        </section>

        <section className="step" id="discovery">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Tools &amp; schemas</h2>
          <p className="lede">
            Servers advertise capabilities; the model picks tools by name and fills arguments that
            match the schema.
          </p>
          <DiscoveryInteractive />
        </section>

        <section className="step" id="config">
          <p className="eyebrow">Part 2 · Step 04</p>
          <h2 className="title">Configuration</h2>
          <p className="lede">
            You tell the host how to reach each server — spawn a local command or connect to a URL.
          </p>
          <ConfigInteractive />
        </section>

        <section className="step" id="call-flow">
          <p className="eyebrow">Part 2 · Step 05</p>
          <h2 className="title">One tool call, end to end</h2>
          <p className="lede">
            Walk through a single <span className="mono">search_issues</span> style call from
            model intent to API execution and back.
          </p>
          <CallFlowInteractive />
        </section>

        <section className="step" id="auth">
          <p className="eyebrow">Part 3 · Step 06</p>
          <h2 className="title">Auth &amp; health</h2>
          <p className="lede">
            A server in config is not always ready. Auth and transport errors show up as
            unavailable namespaces until you fix them.
          </p>
          <AuthInteractive />
        </section>

        <section className="step" id="when-mcp">
          <p className="eyebrow">Part 3 · Step 07</p>
          <h2 className="title">MCP vs built-in tools</h2>
          <p className="lede">
            Not every action needs a server. Practice choosing the right layer.
          </p>
          <WhenMcpInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 3 · Step 08</p>
          <h2 className="title">Recap</h2>
          <ul className="mcp-recap-list">
            <li>
              <strong>MCP server</strong> — exposes tools/resources; runs locally or remotely.
            </li>
            <li>
              <strong>Client</strong> — discovers schemas and executes calls on behalf of the agent.
            </li>
            <li>
              <strong>Config</strong> — command + args (stdio) or URL (remote).
            </li>
            <li>
              <strong>Auth</strong> — connect once; host tracks ready vs needsAuth vs error.
            </li>
          </ul>
          <p className="note">
            Pairs with the{" "}
            <Link href="/topics/cursor-agents">Cursor Agents</Link> module (skills, hooks,
            subagents) — MCP is how external capabilities plug into that stack.
          </p>
          <p className="mcp-credit">
            Protocol reference:{" "}
            <a
              href="https://modelcontextprotocol.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              modelcontextprotocol.io
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
