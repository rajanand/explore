import type { WorkshopDefinition } from "@/lib/workshop/types";
import { getDeepWorkshop, DEEP_WORKSHOP_SLUGS } from "@/lib/ai-roadmap/deep-workshops";

export function getWorkshopConfig(slug: string): WorkshopDefinition | undefined {
  return getDeepWorkshop(slug);
}

export function allWorkshopSlugs(): string[] {
  return DEEP_WORKSHOP_SLUGS;
}
