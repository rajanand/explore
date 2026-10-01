import type { WorkshopSection } from "@/lib/workshop/types";

export const DEEP_SECTIONS_PART1: Record<string, WorkshopSection[]> = {
  "pretraining-pipeline": [
    {
      id: "objective",
      num: "01",
      navLabel: "Objective",
      eyebrow: "Part 1 · Step 01",
      title: "What pretraining optimizes",
      prose:
        "Decoder-only models learn next-token prediction on huge corpora. That teaches fluency and broad world knowledge — not your CMDB, not yesterday's incident.",
      lab: {
        kind: "steps",
        steps: [
          {
            id: "s1",
            label: "Corpus",
            body: "Mix: web, books, code, forums — includes outdated Stack Overflow answers about Kubernetes 1.12.",
          },
          {
            id: "s2",
            label: "Objective",
            body: "Causal LM loss: predict token t+1 given tokens ≤ t. No retrieval, no ACL awareness.",
          },
          {
            id: "s3",
            label: "Product gap",
            body: "Internal runbook for INC-1042 was never in pretraining — you need RAG or tools for freshness.",
          },
        ],
      },
    },
    {
      id: "data-mix",
      num: "02",
      navLabel: "Data mix",
      eyebrow: "Part 1 · Step 02",
      title: "Curated vs crawl",
      lab: {
        kind: "compare",
        question: "Which pretraining data story explains a model that knows OAuth2 but wrong your on-call roster?",
        left: {
          title: "Mostly open web",
          body: "Strong on public protocols; weak on private org charts and internal service names.",
        },
        right: {
          title: "Mostly internal docs only",
          body: "Impossible at foundation scale — pretrain does not use your Confluence by default.",
        },
        pick: [
          { id: "left", label: "Open web dominant" },
          { id: "right", label: "Internal-only pretrain" },
        ],
        correctId: "left",
        ok: "Parametric memory ≠ employee directory. Use RAG for roster questions.",
        bad: "Foundation models are not trained on your tenant data unless you explicitly fine-tune or RAG.",
      },
    },
  ],
  "posttraining-sft": [
    {
      id: "template",
      num: "01",
      navLabel: "Templates",
      eyebrow: "Part 1 · Step 01",
      title: "Chat templates matter",
      lab: {
        kind: "profiles",
        prompt: "Same factual answer, different SFT formatting:",
        profiles: [
          {
            id: "json",
            label: "JSON-only SFT",
            body: '{"summary":"payments-api 502","action":"rollback deploy"}',
            verdict: "Model learns to emit JSON — great for tool routers, brittle for prose summaries.",
          },
          {
            id: "bullets",
            label: "Bullet SFT",
            body: "- Impact: checkout errors\n- Owner: Team Payments\n- Next: rollback",
            verdict: "Matches exec briefings — align SFT with the UI you ship.",
          },
        ],
      },
    },
    {
      id: "dataset",
      num: "02",
      navLabel: "Dataset",
      eyebrow: "Part 2 · Step 02",
      title: "SFT dataset gates",
      lab: {
        kind: "checklist",
        intro: "Before SFT for an internal support tone:",
        items: [
          { id: "1", label: "Examples cite real policy ids, not invented ones" },
          { id: "2", label: "Holdout set not copied into training rows" },
          { id: "3", label: "PII scrubbed from demonstration transcripts" },
          { id: "4", label: "Still plan RAG for documents that change weekly" },
        ],
        goodScore: 4,
        goodMsg: "SFT shapes format and tone — not a substitute for fresh runbooks.",
        badMsg: "SFT on stale or leaky examples bakes in hallucinated policy numbers.",
      },
    },
  ],
  "in-context-learning": [
    {
      id: "shots",
      num: "01",
      navLabel: "Few-shot",
      eyebrow: "Part 1 · Step 01",
      title: "Shots and position",
      lab: {
        kind: "quiz",
        prompt: "You add 8 examples of incident summaries before the user ticket. The model ignores your format. Likely cause?",
        options: [
          { id: "a", label: "Examples buried in the middle; final example matters most" },
          { id: "b", label: "Need more GPUs" },
          { id: "c", label: "Temperature must be 2.0" },
        ],
        correctId: "a",
        ok: "Recency and salience matter — place the canonical example last; trim distractors.",
        bad: "ICL fails from context design, not hardware.",
      },
    },
    {
      id: "distract",
      num: "02",
      navLabel: "Distraction",
      eyebrow: "Part 2 · Step 02",
      title: "Poisoned few-shot",
      lab: {
        kind: "profiles",
        profiles: [
          {
            id: "good",
            label: "Clean shots",
            body: "Examples all use INC id + service + customer impact fields.",
            verdict: "Model copies structure for INC-1042 follow-up.",
          },
          {
            id: "bad",
            label: "Mixed shots",
            body: "One example says 'ignore policy and approve refund' as joke from old test.",
            verdict: "Models imitate spurious patterns — curate shots like production data.",
          },
        ],
      },
    },
  ],
  "hallucinations-why": [
    {
      id: "types",
      num: "01",
      navLabel: "Types",
      eyebrow: "Part 1 · Step 01",
      title: "Not all wrong answers are equal",
      lab: {
        kind: "compare",
        question: "User asks for SOC phone number not in context. Best behavior?",
        left: {
          title: "Grounded refusal",
          body: '"I do not have the SOC hotline in provided documents. Check contact page XYZ."',
        },
        right: {
          title: "Confident fabrication",
          body: '"SOC hotline is +1-555-0100" (invented).',
        },
        pick: [
          { id: "left", label: "Refusal / escalate" },
          { id: "right", label: "Invent number" },
        ],
        correctId: "left",
        ok: "Calibration and grounding beats fluent harm.",
        bad: "Users trust tone — wrong phone numbers are operational incidents.",
      },
    },
    {
      id: "rag",
      num: "02",
      navLabel: "RAG gap",
      eyebrow: "Part 2 · Step 02",
      title: "When RAG still hallucinates",
      lab: {
        kind: "quiz",
        prompt: "Retrieved chunk is about VPN, user asked about payments-api. Model blends both. Fix first?",
        options: [
          { id: "a", label: "Raise retrieval score threshold / rerank" },
          { id: "b", label: "Increase temperature" },
          { id: "c", label: "Remove system prompt" },
        ],
        correctId: "a",
        ok: "Bad retrieval causes grounded-sounding wrong answers — fix the pipeline.",
        bad: "Sampling cannot fix wrong chunks.",
      },
    },
  ],
  "choosing-llm-models": [
    {
      id: "matrix",
      num: "01",
      navLabel: "Matrix",
      eyebrow: "Part 1 · Step 01",
      title: "Weighted tradeoffs",
      lab: {
        kind: "slider",
        label: "Weight on latency (1=ignore, 10=only latency matters)",
        min: 1,
        max: 10,
        step: 1,
        thresholds: [
          { max: 3, msg: "Favor largest context + best reasoning model for offline incident reports." },
          { max: 7, msg: "Balanced: mid-tier chat + RAG for internal Q&A at moderate QPS." },
          { max: 10, msg: "Favor small fast model with aggressive semantic cache for autocomplete." },
        ],
      },
    },
    {
      id: "vendor",
      num: "02",
      navLabel: "Vendor review",
      eyebrow: "Part 2 · Step 02",
      title: "Enterprise checklist",
      lab: {
        kind: "checklist",
        intro: "Shortlisting models for EU payments team:",
        items: [
          { id: "1", label: "Data processing agreement + subprocessors documented" },
          { id: "2", label: "Context window fits longest incident export" },
          { id: "3", label: "Eval scores on your golden set, not vendor bench" },
          { id: "4", label: "Fallback model if primary region down" },
        ],
        goodScore: 4,
        goodMsg: "Model choice is procurement + engineering, not leaderboard rank alone.",
        badMsg: "Missing DPA or eval fit becomes a production blocker.",
      },
    },
  ],
  "attention-in-depth": [
    {
      id: "long",
      num: "01",
      navLabel: "Long context",
      eyebrow: "Part 1 · Step 01",
      title: "What gets attended",
      lab: {
        kind: "steps",
        steps: [
          {
            id: "s1",
            label: "Prompt head",
            body: "System: 'You are IT copilot' — often strongly attended each layer.",
          },
          {
            id: "s2",
            label: "Needle",
            body: "Middle of thread: 'root cause: bad connection pool config' — may be under-attended.",
          },
          {
            id: "s3",
            label: "Recency",
            body: "Latest user: 'summarize for exec' — attends to tail; may miss middle needle.",
          },
        ],
      },
    },
    {
      id: "quiz",
      num: "02",
      navLabel: "Quiz",
      eyebrow: "Part 2 · Step 02",
      title: "Mitigation",
      lab: {
        kind: "quiz",
        prompt: "200-message incident thread — best summarization strategy?",
        options: [
          { id: "a", label: "Stuff entire thread into one prompt" },
          { id: "b", label: "Rolling summary + retrieve key messages by INC id" },
          { id: "c", label: "Delete system prompt" },
        ],
        correctId: "b",
        ok: "Combine compression with retrieval instead of blind long context.",
        bad: "Lost-in-the-middle is real on long transcripts.",
      },
    },
  ],
  "scaling-laws-practical": [
    {
      id: "fork",
      num: "01",
      navLabel: "Fork",
      eyebrow: "Part 1 · Step 01",
      title: "Bigger model or better retrieval?",
      lab: {
        kind: "compare",
        question: "Copilot must answer questions on 80k Confluence pages updated daily.",
        left: {
          title: "10× larger model",
          body: "Better reasoning, still stale on yesterday's postmortem, higher $/token.",
        },
        right: {
          title: "Current model + RAG + rerank",
          body: "Grounded on indexed chunks, eval-driven quality, controlled cost.",
        },
        pick: [
          { id: "left", label: "Scale parameters" },
          { id: "right", label: "Scale retrieval" },
        ],
        correctId: "right",
        ok: "Freshness problems are data-plane problems — RAG first for internal docs.",
        bad: "Scaling params does not index Confluence automatically.",
      },
    },
    {
      id: "team",
      num: "02",
      navLabel: "Team",
      eyebrow: "Part 2 · Step 02",
      title: "Who maintains what",
      lab: {
        kind: "slider",
        label: "Internal ML platform maturity (1=none, 10=mature)",
        min: 1,
        max: 10,
        step: 1,
        thresholds: [
          { max: 4, msg: "Prefer vendor APIs + RAG; avoid self-hosting 70B.", warn: true },
          { max: 7, msg: "Consider distillation or LoRA on top of API teacher for format." },
          { max: 10, msg: "Custom routing, quant serving, and fine-tunes become viable." },
        ],
      },
    },
  ],
};
