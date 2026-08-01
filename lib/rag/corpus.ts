export type RagDocument = {
  id: string;
  title: string;
  source: string;
  text: string;
};

export const CORPUS_DOCUMENTS: RagDocument[] = [
  {
    id: "hr",
    title: "HR Policy",
    source: "internal/hr-policy.pdf",
    text:
      "Acme Analytics employees receive 20 days of PTO per year. Unused PTO rolls over up to 5 days. Remote work is allowed up to 3 days per week with manager approval. New hires accrue PTO starting day one.",
  },
  {
    id: "api",
    title: "API Guide",
    source: "docs/api-guide.md",
    text:
      "All API requests require a Bearer token in the Authorization header. The rate limit is 1000 requests per minute per API key. Burst traffic above the limit returns HTTP 429. Use the /v2/events endpoint for streaming analytics data.",
  },
  {
    id: "runbook",
    title: "Incident Runbook",
    source: "ops/runbook.md",
    text:
      "If production API latency exceeds 500ms for 5 minutes, page the on-call engineer via PagerDuty. First check database connection pool metrics and recent deploys. Escalate to the platform team if error rate exceeds 2%.",
  },
  {
    id: "faq",
    title: "Company FAQ",
    source: "public/faq.md",
    text:
      "Acme Analytics was founded in 2018. Headquarters are in Austin, Texas. We serve enterprise customers in finance and healthcare. Support hours are 9am-6pm Central, Monday through Friday.",
  },
];

export type RagChunk = {
  id: string;
  docId: string;
  docTitle: string;
  source: string;
  text: string;
  index: number;
};

export type ChunkStrategy = "sentence" | "document";

export function chunkDocuments(
  docs: RagDocument[],
  strategy: ChunkStrategy
): RagChunk[] {
  const chunks: RagChunk[] = [];

  for (const doc of docs) {
    if (strategy === "document") {
      chunks.push({
        id: `${doc.id}-0`,
        docId: doc.id,
        docTitle: doc.title,
        source: doc.source,
        text: doc.text,
        index: 0,
      });
      continue;
    }

    const sentences = doc.text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    sentences.forEach((sentence, i) => {
      chunks.push({
        id: `${doc.id}-${i}`,
        docId: doc.id,
        docTitle: doc.title,
        source: doc.source,
        text: sentence,
        index: i,
      });
    });
  }

  return chunks;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "how", "what", "when", "where",
  "i", "we", "you", "to", "of", "in", "for", "on", "at", "per", "via", "and",
]);

export function scoreChunk(query: string, chunkText: string): number {
  const qTokens = query
    .toLowerCase()
    .split(/\W+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));

  if (qTokens.length === 0) return 0;

  const text = chunkText.toLowerCase();
  let hits = 0;
  for (const token of qTokens) {
    if (text.includes(token)) hits += 1;
  }

  const phraseBonus =
    query.toLowerCase().includes("pto") && text.includes("pto") ? 0.35 : 0;
  const rateBonus =
    query.toLowerCase().includes("rate") && text.includes("rate") ? 0.3 : 0;
  const oncallBonus =
    (query.toLowerCase().includes("on-call") ||
      query.toLowerCase().includes("oncall")) &&
    text.includes("on-call")
      ? 0.35
      : 0;

  const raw = hits / qTokens.length + phraseBonus + rateBonus + oncallBonus;
  return Math.min(0.98, raw);
}

export type ScoredChunk = RagChunk & { score: number };

export function retrieveChunks(
  query: string,
  chunks: RagChunk[],
  topK = 3
): ScoredChunk[] {
  const scored = chunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(query, chunk.text),
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, topK);
}

export const SAMPLE_QUERIES = [
  {
    id: "pto",
    label: "PTO policy",
    query: "How many PTO days do employees get?",
  },
  {
    id: "rate",
    label: "API rate limit",
    query: "What is the API rate limit per minute?",
  },
  {
    id: "oncall",
    label: "On-call paging",
    query: "When should I page on-call for API latency?",
  },
  {
    id: "founder",
    label: "Founding year",
    query: "When was Acme Analytics founded?",
  },
] as const;

export function buildAugmentedPrompt(
  query: string,
  retrieved: ScoredChunk[]
): string {
  const context = retrieved
    .map(
      (c, i) =>
        `[${i + 1}] (${c.docTitle})\n${c.text}`
    )
    .join("\n\n");

  return `System: Answer using ONLY the context below. If the answer is not in the context, say you don't know.

Context:
${context}

User: ${query}

Assistant:`;
}

export function generateAnswer(query: string, retrieved: ScoredChunk[]): string {
  const q = query.toLowerCase();
  const top = retrieved[0];

  if (!top || top.score < 0.15) {
    return "I don't have enough information in the retrieved documents to answer that confidently.";
  }

  if (q.includes("pto")) {
    return "Employees receive 20 days of PTO per year, with up to 5 days rollover. New hires accrue from day one.";
  }
  if (q.includes("rate") || q.includes("limit")) {
    return "The API rate limit is 1000 requests per minute per API key. Exceeding it returns HTTP 429.";
  }
  if (q.includes("on-call") || q.includes("oncall") || q.includes("latency")) {
    return "Page on-call via PagerDuty if production API latency exceeds 500ms for 5 minutes. Check DB connection pool metrics first.";
  }
  if (q.includes("founded") || q.includes("founding")) {
    return "Acme Analytics was founded in 2018.";
  }

  return `Based on ${top.docTitle}: ${top.text}`;
}

export const WITHOUT_RAG_ANSWERS: Record<string, string> = {
  pto: "Most companies offer around 10-15 vacation days, but policies vary widely.",
  rate: "API rate limits depend on your plan — typically a few hundred requests per minute.",
  oncall: "You should alert the team if the service seems slow or users report errors.",
  founder: "I'm not sure of the exact founding year without looking it up.",
};
