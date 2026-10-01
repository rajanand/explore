/**
 * Generates lib/ai-roadmap/workshop-configs/bundle.ts from modules metadata + track templates.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Parse slugs from modules.ts (simple extract)
const src = fs.readFileSync(path.join(root, "lib/ai-roadmap/modules.ts"), "utf8");
const blocks = [...src.matchAll(/slug:\s*"([^"]+)"[\s\S]*?accent:\s*"([^"]+)"/g)].map((m) => {
  const block = m[0];
  const pick = (key) => {
    const x = block.match(new RegExp(`${key}:\\s*"([^"]*)"`));
    return x ? x[1] : "";
  };
  return {
    slug: m[1],
    accent: m[2],
    shortTitle: pick("shortTitle"),
    title: pick("title"),
    description: pick("description"),
    outcome: pick("outcome"),
    trackId: pick("trackId"),
  };
});

const skip = new Set(["tokenization", "decoding-sampling", "neural-networks-llm"]);

function cssPrefix(slug) {
  return slug.split("-").map((s) => s[0]).join("").slice(0, 4).replace(/[^a-z]/gi, "") || "ws";
}

function relatedFor(slug, prereqStr) {
  const links = [];
  const re = /\/topics\/([a-z0-9-]+)/g;
  let m;
  const prereqBlock = src.slice(src.indexOf(`slug: "${slug}"`));
  const pre = prereqBlock.match(/prerequisites:\s*\[([^\]]*)\]/);
  const text = pre ? pre[1] : "";
  while ((m = re.exec(text))) {
    if (m[1] !== slug) links.push({ href: `/topics/${m[1]}`, label: m[1].replace(/-/g, " ") });
  }
  if (links.length < 2) links.push({ href: "/topics/rag", label: "RAG" });
  return links.slice(0, 3);
}

function labsFor(m) {
  const it = "INC-1042 / payments-api / internal runbook";
  const baseQuiz = {
    kind: "quiz",
    prompt: `Your team asks: "${m.title}" — what is the best next step for ${it}?`,
    options: [
      { id: "a", label: "Measure on golden queries before changing production" },
      { id: "b", label: "Ship the demo setting to all users immediately" },
      { id: "c", label: "Disable evals to save cost" },
    ],
    correctId: "a",
    ok: `Aligned with module outcome: ${m.outcome}`,
    bad: "Risky for production — revisit constraints, ACLs, and eval gates.",
  };

  const checklist = {
    kind: "checklist",
    intro: `Checklist for applying ${m.shortTitle} on an internal copilot:`,
    items: [
      { id: "1", label: "Define success metric (not just demo wow)" },
      { id: "2", label: "Document data sources + ACL boundaries" },
      { id: "3", label: "Add regression tests / golden questions" },
      { id: "4", label: "Log retrieval ids and model route in traces" },
      { id: "5", label: "Plan rollback (flags, prior prompt, prior index)" },
    ],
    goodScore: 4,
    goodMsg: "You are ready to pilot with security and SRE partners.",
    badMsg: "Fill gaps before widening access — shallow pilots become incidents.",
  };

  const profiles = {
    kind: "profiles",
    prompt: `Compare approaches relevant to ${m.shortTitle}:`,
    profiles: [
      {
        id: "good",
        label: "Production-minded",
        meta: "Slower rollout",
        body: `${m.description} Tie changes to evals and observability.`,
        verdict: m.outcome,
      },
      {
        id: "bad",
        label: "Demo-only",
        meta: "Fast but fragile",
        body: "Skip retrieval metrics, ship highest temperature, no ACL filters.",
        verdict: "Works in the meeting — fails under real tickets and adversarial input.",
      },
    ],
  };

  if (m.trackId === "ai-retrieval" || m.trackId === "ai-agents") {
    return [
      {
        id: "concept",
        num: "01",
        navLabel: "Concept",
        eyebrow: "Part 1 · Step 01",
        title: "Problem framing",
        prose: m.description,
      },
      {
        id: "lab1",
        num: "02",
        navLabel: "Decision",
        eyebrow: "Part 1 · Step 02",
        title: "Choose wisely",
        lab: baseQuiz,
      },
      {
        id: "lab2",
        num: "03",
        navLabel: "Ship checklist",
        eyebrow: "Part 2 · Step 03",
        title: "Ship checklist",
        lab: checklist,
      },
    ];
  }

  if (m.trackId === "ai-platform") {
    return [
      {
        id: "concept",
        num: "01",
        navLabel: "Lever",
        eyebrow: "Part 1 · Step 01",
        title: "Platform lever",
        prose: m.description,
        lab: {
          kind: "slider",
          label: "Team maturity / traffic",
          min: 1,
          max: 10,
          step: 1,
          thresholds: [
            { max: 3, msg: "Start with evals + logging before routing/cost tricks.", warn: true },
            { max: 7, msg: "Introduce caching, routing, and SLOs with error budgets." },
            { max: 10, msg: "Full platform: flags, multi-model, cost attribution dashboards." },
          ],
        },
      },
      {
        id: "lab2",
        num: "02",
        navLabel: "Tradeoffs",
        eyebrow: "Part 1 · Step 02",
        title: "Tradeoffs",
        lab: profiles,
      },
      {
        id: "lab3",
        num: "03",
        navLabel: "Quiz",
        eyebrow: "Part 2 · Step 03",
        title: "Stakeholder quiz",
        lab: baseQuiz,
      },
    ];
  }

  // ai-core + ai-basics (except custom)
  return [
    {
      id: "concept",
      num: "01",
      navLabel: "Concept",
      eyebrow: "Part 1 · Step 01",
      title: "Core idea",
      prose: m.description,
      lab: {
        kind: "steps",
        steps: [
          { id: "s1", label: "Observe", body: `Notice behavior in ${it} scenarios.` },
          { id: "s2", label: "Explain", body: m.description },
          { id: "s3", label: "Apply", body: m.outcome },
        ],
      },
    },
    {
      id: "lab2",
      num: "02",
      navLabel: "Compare",
      eyebrow: "Part 2 · Step 02",
      title: "Compare approaches",
      lab: {
        kind: "compare",
        question: `Which path best supports: ${m.outcome}`,
        left: { title: "Grounded workflow", body: "Use retrieval, evals, and explicit limits." },
        right: { title: "Ungrounded shortcut", body: "Ask the model to memorize policies from parametric memory." },
        pick: [
          { id: "left", label: "Grounded workflow" },
          { id: "right", label: "Ungrounded shortcut" },
        ],
        correctId: "left",
        ok: "Matches how reliable internal copilots are built.",
        bad: "Shortcut confabulates — especially on fresh incidents.",
      },
    },
  ];
}

const defs = blocks
  .filter((m) => !skip.has(m.slug))
  .map((m) => {
    const titleParts = m.title.split(" ");
    const em = titleParts.length > 2 ? titleParts.pop() : "deep dive";
    const line1 = titleParts.join(" ") || m.title;
    return {
      slug: m.slug,
      brand: m.shortTitle,
      eyebrow: `AI · ${m.trackId.replace("ai-", "")}`,
      titleLine1: line1,
      titleEm: em,
      lede: m.description,
      outcome: m.outcome,
      cssPrefix: cssPrefix(m.slug),
      accent: m.accent,
      sections: labsFor(m),
      related: relatedFor(m.slug, ""),
    };
  });

const out = `import type { WorkshopDefinition } from "@/lib/workshop/types";

export const WORKSHOP_BUNDLE: WorkshopDefinition[] = ${JSON.stringify(defs, null, 2)};

export const WORKSHOP_BY_SLUG = new Map(WORKSHOP_BUNDLE.map((w) => [w.slug, w]));
`;

fs.mkdirSync(path.join(root, "lib/ai-roadmap/workshop-configs"), { recursive: true });
fs.writeFileSync(path.join(root, "lib/ai-roadmap/workshop-configs/bundle.ts"), out);
console.log(`Wrote ${defs.length} workshop configs`);
