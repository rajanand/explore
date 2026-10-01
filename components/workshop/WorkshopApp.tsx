"use client";

import React from "react";
import WorkshopSidebar from "@/components/workshop/WorkshopSidebar";
import WorkshopLab from "@/components/workshop/WorkshopLab";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { getWorkshopConfig } from "@/lib/ai-roadmap/workshop-configs";

export default function WorkshopApp({ slug }: { slug: string }) {
  const config = getWorkshopConfig(slug);
  if (!config) {
    return <p className="panel">Workshop not found: {slug}</p>;
  }

  const sectionIds = [...config.sections.map((s) => s.id), "recap"];
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="app">
      <WorkshopSidebar config={config} activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">{config.eyebrow}</p>
          <h1>
            {config.titleLine1}
            <br />
            <em>{config.titleEm}</em>
          </h1>
          <p className="lede">{config.lede}</p>
          <div className="panel mono pw-outcome">After this module: {config.outcome}</div>
        </section>

        {config.sections.map((sec) => (
          <section className="step" id={sec.id} key={sec.id}>
            <p className="eyebrow">{sec.eyebrow}</p>
            <h2 className="title">{sec.title}</h2>
            {sec.prose && <p className="lede">{sec.prose}</p>}
            {sec.lab && <WorkshopLab lab={sec.lab} />}
          </section>
        ))}

        <section className="step" id="recap">
          <p className="eyebrow">Recap</p>
          <h2 className="title">Related modules</h2>
          <RelatedModules links={config.related} />
        </section>
      </main>
    </div>
  );
}
