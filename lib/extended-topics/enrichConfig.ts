import { EXTENDED_TOPIC_CONFIGS } from "@/lib/extended-topics/configs";
import type { TopicConfig, TopicSection } from "@/lib/extended-topics/types";

const META: Record<
  string,
  { outcome: string; prerequisites?: string[]; scenarioTitle: string; scenarioContext: string }
> = {
  "fine-tuning": {
    outcome: "Choose fine-tuning vs RAG vs prompts for a real feature request.",
    prerequisites: ["/topics/rag", "/topics/prompt-context"],
    scenarioTitle: "Support wants a custom tone",
    scenarioContext:
      "Leadership asks for answers that always cite policy numbers and use formal language.",
  },
  "vector-databases": {
    outcome: "Pick pgvector vs a dedicated store for your scale and team skills.",
    prerequisites: ["/topics/embeddings"],
    scenarioTitle: "Indexing 80k runbook chunks",
    scenarioContext: "Platform team already runs Postgres; search QPS is moderate.",
  },
  "llm-security": {
    outcome: "List concrete controls for RAG + agents in your threat model.",
    prerequisites: ["/topics/rag", "/topics/ai-agents"],
    scenarioTitle: "Malicious ticket in the index",
    scenarioContext: "Attacker files a ticket whose body contains injection instructions.",
  },
  "ai-observability": {
    outcome: "Define minimum logs/traces for one LLM feature in production.",
    prerequisites: ["/topics/llm-evals"],
    scenarioTitle: "Wrong answer in prod",
    scenarioContext: "User screenshot shows a bad policy citation from yesterday.",
  },
  "streaming-apis": {
    outcome: "Design SSE chat API behavior for timeouts and partial output.",
    prerequisites: ["/topics/tool-calling"],
    scenarioTitle: "Mobile app chat",
    scenarioContext: "Users on flaky VPN need streaming with graceful retry.",
  },
  "knowledge-graphs": {
    outcome: "Explain when graph traversals beat vectors for IT questions.",
    prerequisites: ["/topics/ontology", "/topics/graph-rag"],
    scenarioTitle: "On-call lookup",
    scenarioContext: "Engineer needs service owner and escalation path for INC-1042.",
  },
  "tool-calling": {
    outcome: "Design tool schemas and error payloads agents can recover from.",
    prerequisites: ["/topics/ai-agents", "/topics/mcp-servers"],
    scenarioTitle: "Create Jira from chat",
    scenarioContext: "Agent must not file tickets without validated project key.",
  },
  "hybrid-search": {
    outcome: "Decide when to add BM25 to vector search and how to fuse scores.",
    prerequisites: ["/topics/embeddings", "/topics/rag"],
    scenarioTitle: "Search by incident ID",
    scenarioContext: "Users query INC-1042 and exact error codes, not paraphrases.",
  },
  "ai-governance": {
    outcome: "Draft a lightweight approval checklist for a new AI feature.",
    prerequisites: ["/topics/llm-security"],
    scenarioTitle: "EU team on US model",
    scenarioContext: "Legal asks about data residency before pilot.",
  },
  "context-windows": {
    outcome: "Pack context deliberately and spot cache-friendly prompt layout.",
    prerequisites: ["/topics/prompt-context", "/topics/transformer"],
    scenarioTitle: "Huge incident thread",
    scenarioContext: "Copilot must summarize 200 messages without blowing the budget.",
  },
};

const SCENARIO_STEPS = [
  { label: "Frame", detail: "Write the user/job story and success metric — not the model name." },
  { label: "Constraints", detail: "Data freshness, ACLs, latency, cost ceiling, compliance." },
  { label: "Decision", detail: "Pick the smallest approach that passes evals (often RAG before fine-tune)." },
  { label: "Verify", detail: "Golden questions + security cases before widening access." },
];

function enrichSection(section: TopicSection, meta: typeof META[string], index: number): TopicSection {
  const scenario =
    section.scenario ??
    (index === 1
      ? {
          title: meta.scenarioTitle,
          context: meta.scenarioContext,
          steps: SCENARIO_STEPS,
        }
      : undefined);

  const takeaway =
    section.takeaway ??
    (section.id === "recap"
      ? "Ship the smallest change, measure with evals, then iterate — avoid swapping models first."
      : section.quiz
        ? "Discuss this choice with your team using a real doc or ticket from your org."
        : undefined);

  const code =
    section.code ??
    (index === 2
      ? `# Sketch for your design doc\nproblem: <user job>\napproach: <RAG | agent | fine-tune>\nverify: <golden set + security cases>`
      : undefined);

  return { ...section, scenario, takeaway, code };
}

export function getEnrichedTopicConfig(slug: string): TopicConfig | undefined {
  const base = EXTENDED_TOPIC_CONFIGS[slug];
  const meta = META[slug];
  if (!base || !meta) return base;

  return {
    ...base,
    outcomeForUser: base.outcomeForUser ?? meta.outcome,
    prerequisites: base.prerequisites ?? meta.prerequisites,
    sections: base.sections.map((s, i) => enrichSection(s, meta, i)),
  };
}
