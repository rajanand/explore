# 50 AI workshops roadmap

Canonical registry: [`lib/ai-roadmap/modules.ts`](../lib/ai-roadmap/modules.ts).

## Build pipeline

1. **Bespoke UI** (3): `tokenization`, `decoding-sampling`, `neural-networks-llm` — dedicated components under `components/<slug>/`.
2. **Deep workshops** (47): [`lib/ai-roadmap/deep-workshops/sections-part*.ts`](../lib/ai-roadmap/deep-workshops/) + [`WorkshopApp`](../components/workshop/WorkshopApp.tsx).
3. Edit section files to deepen a topic; run `npm run build`.
4. Routes: `node scripts/generate-roadmap-pages.mjs` (when adding slugs to `modules.ts`).

## Waves

| Wave | Slugs (count) |
|------|----------------|
| 1 | tokenization … scaling-laws-practical (10) |
| 2 | multimodal-fundamentals … structured-rag (10) |
| 3 | code-rag … multi-agent-systems (10) |
| 4 | human-in-the-loop-agents … model-routing (10) |
| 5 | llm-cost-optimization … incident-copilot-capstone (10) |
