import type { WorkshopDefinition } from "@/lib/workshop/types";
import { WORKSHOP_BY_SLUG } from "@/lib/ai-roadmap/workshop-configs/bundle";
import { WORKSHOP_OVERRIDES } from "@/lib/ai-roadmap/workshop-configs/overrides";

export function getWorkshopConfig(slug: string): WorkshopDefinition | undefined {
  return WORKSHOP_OVERRIDES[slug] ?? WORKSHOP_BY_SLUG.get(slug);
}

export function allWorkshopSlugs(): string[] {
  return [...WORKSHOP_BY_SLUG.keys()];
}
