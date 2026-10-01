"use client";

import React from "react";
import { EXTENDED_TOPIC_CONFIGS } from "@/lib/extended-topics/configs";
import GenericTopicSidebar from "@/components/extended-topic/GenericTopicSidebar";
import SectionQuiz from "@/components/extended-topic/SectionQuiz";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function GenericTopicWalkthrough({ slug }: { slug: string }) {
  const config = EXTENDED_TOPIC_CONFIGS[slug];
  if (!config) {
    return <p>Topic not found.</p>;
  }

  const sectionIds = ["hero", ...config.sections.map((s) => s.id)];
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="app">
      <GenericTopicSidebar config={config} activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">{config.heroEyebrow}</p>
          <h1>
            {config.heroTitle}
            <br />
            <em>{config.heroEmphasis}</em>
          </h1>
          <p className="lede">{config.heroLede}</p>
        </section>

        {config.sections.map((section) => (
          <section className="step" key={section.id} id={section.id}>
            <p className="eyebrow">{section.part} · Step {section.step}</p>
            <h2 className="title">{section.title}</h2>
            <p className="lede">{section.lede}</p>
            {section.bullets && (
              <ul className="ext-list">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            <SectionQuiz section={section} />
            {section.id === "recap" && (
              <RelatedModules links={config.related} />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
