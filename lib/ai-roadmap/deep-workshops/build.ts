import { ROADMAP_BY_SLUG } from "@/lib/ai-roadmap/modules";
import type { WorkshopDefinition, WorkshopLink, WorkshopSection } from "@/lib/workshop/types";

export function cssPrefixFromSlug(slug: string) {
  return slug.split("-").map((s) => s[0]).join("").slice(0, 4).replace(/[^a-z]/gi, "") || "ws";
}

export function titleParts(title: string) {
  const words = title.split(" ");
  if (words.length <= 2) return { line1: title, em: "deep dive" };
  const em = words.slice(-2).join(" ");
  const line1 = words.slice(0, -2).join(" ") || title;
  return { line1, em };
}

export function relatedFromPrereqs(slug: string): WorkshopLink[] {
  const m = ROADMAP_BY_SLUG.get(slug);
  if (!m) return [];
  return m.prerequisites
    .map((href) => {
      const s = href.replace("/topics/", "");
      const meta = ROADMAP_BY_SLUG.get(s);
      return { href, label: meta?.shortTitle ?? s.replace(/-/g, " ") };
    })
    .slice(0, 3);
}

export function buildDeepWorkshop(
  slug: string,
  sections: WorkshopSection[],
  related?: WorkshopLink[]
): WorkshopDefinition {
  const m = ROADMAP_BY_SLUG.get(slug);
  if (!m) throw new Error(`Unknown roadmap slug: ${slug}`);
  const { line1, em } = titleParts(m.title);
  return {
    slug,
    brand: m.shortTitle,
    eyebrow: `AI · ${m.trackId.replace("ai-", "")}`,
    titleLine1: line1,
    titleEm: em,
    lede: m.description,
    outcome: m.outcome,
    cssPrefix: cssPrefixFromSlug(slug),
    accent: m.accent,
    sections,
    related: related ?? relatedFromPrereqs(slug),
  };
}
