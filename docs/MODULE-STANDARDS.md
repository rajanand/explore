# Module quality standards (Explore: AI)

## User-value bar

Every module should answer: **What can I do differently after 20 minutes?**

- **Workshop** (`tier: workshop` in [`lib/curriculum.ts`](../lib/curriculum.ts)): multiple interactives, simulated decisions, IT-flavored narrative.
- **Guide** (`tier: guide`): scenario walkthrough, at least one quiz per module, explicit outcome and prerequisites. Upgrade to workshop when content warrants custom UI.

## Required elements

| Element | Workshop | Guide |
|--------|----------|-------|
| Clear outcome sentence | Yes | Yes (`outcomeForUser`) |
| Prerequisites links | Yes | Yes |
| Hands-on interaction | 2+ custom | Scenario steps + quiz |
| Recap + related modules | Yes | Yes |
| Accuracy / limits note | When needed | When needed |

## Navigation

- Do not list every slug on the home page.
- Register topics in `site.config.ts` for metadata; use **curriculum tracks** for Learn menu and home paths.

## Anti-patterns

- Four paragraphs + one quiz only.
- Generic copy with no IT or shipping context.
- Duplicating an existing workshop (merge or cross-link instead).
