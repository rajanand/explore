import { buildDeepWorkshop } from "@/lib/ai-roadmap/deep-workshops/build";
import { DEEP_SECTIONS_PART1 } from "@/lib/ai-roadmap/deep-workshops/sections-part1";
import { DEEP_SECTIONS_PART2 } from "@/lib/ai-roadmap/deep-workshops/sections-part2";
import { DEEP_SECTIONS_PART3 } from "@/lib/ai-roadmap/deep-workshops/sections-part3";
import { DEEP_SECTIONS_PART4 } from "@/lib/ai-roadmap/deep-workshops/sections-part4";
import { DEEP_SECTIONS_PART5 } from "@/lib/ai-roadmap/deep-workshops/sections-part5";
import type { WorkshopDefinition } from "@/lib/workshop/types";

const ALL_SECTIONS = {
  ...DEEP_SECTIONS_PART1,
  ...DEEP_SECTIONS_PART2,
  ...DEEP_SECTIONS_PART3,
  ...DEEP_SECTIONS_PART4,
  ...DEEP_SECTIONS_PART5,
};

const CUSTOM_APP_SLUGS = new Set(["tokenization", "decoding-sampling", "neural-networks-llm"]);

export const DEEP_WORKSHOPS: WorkshopDefinition[] = Object.entries(ALL_SECTIONS).map(
  ([slug, sections]) => buildDeepWorkshop(slug, sections)
);

export const DEEP_BY_SLUG = new Map(DEEP_WORKSHOPS.map((w) => [w.slug, w]));

export function getDeepWorkshop(slug: string): WorkshopDefinition | undefined {
  if (CUSTOM_APP_SLUGS.has(slug)) return undefined;
  return DEEP_BY_SLUG.get(slug);
}

export const DEEP_WORKSHOP_SLUGS = Object.keys(ALL_SECTIONS);
