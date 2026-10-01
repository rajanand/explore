"use client";

import React from "react";
import { getEnrichedTopicConfig } from "@/lib/extended-topics/enrichConfig";
import GenericTopicSidebar from "@/components/extended-topic/GenericTopicSidebar";
import SectionQuiz from "@/components/extended-topic/SectionQuiz";
import SectionScenario from "@/components/extended-topic/SectionScenario";
import GuideDepthBanner from "@/components/extended-topic/GuideDepthBanner";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function GenericTopicWalkthrough({ slug }: { slug: string }) {
  const config = getEnrichedTopicConfig(slug);
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
          <GuideDepthBanner config={config} />
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
            {section.scenario && <SectionScenario scenario={section.scenario} />}
            {section.code && (
              <pre className="panel mono ext-code">{section.code}</pre>
            )}
            <SectionQuiz section={section} />
            {section.takeaway && (
              <p className="panel step-mechanics ext-takeaway">
                <strong>Apply it:</strong> {section.takeaway}
              </p>
            )}
            {section.id === "recap" && (
              <RelatedModules links={config.related} />
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
