# 50 AI workshops roadmap

Canonical registry: [`lib/ai-roadmap/modules.ts`](../lib/ai-roadmap/modules.ts).

## Build pipeline

1. **Hand-crafted** (deepest): `tokenization`, `decoding-sampling`, `neural-networks-llm`
2. **Config-driven workshops**: remaining slugs use [`components/workshop/WorkshopApp.tsx`](../components/workshop/WorkshopApp.tsx) + generated [`lib/ai-roadmap/workshop-configs/bundle.ts`](../lib/ai-roadmap/workshop-configs/bundle.ts)
3. Regenerate configs: `node scripts/build-workshop-configs.mjs`
4. Regenerate routes: `node scripts/generate-roadmap-pages.mjs`
5. Sync catalog: `node scripts/sync-roadmap-site-config.mjs` (once per new slug batch)

## Depth upgrades

Replace generated labs module-by-module with custom interactives (same pattern as hybrid-search) when a topic needs more than template labs. Edit `bundle.ts` or add `lib/ai-roadmap/workshop-configs/overrides/{slug}.ts` (future).

## Waves

| Wave | Slugs (count) |
|------|----------------|
| 1 | tokenization … scaling-laws-practical (10) |
| 2 | multimodal-fundamentals … structured-rag (10) |
| 3 | code-rag … multi-agent-systems (10) |
| 4 | human-in-the-loop-agents … model-routing (10) |
| 5 | llm-cost-optimization … incident-copilot-capstone (10) |
