"use client";

import React from "react";
import DocParseSidebar, { DOC_PARSE_SECTION_IDS } from "@/components/document-parsing/DocParseSidebar";
import TableParseInteractive from "@/components/document-parsing/TableParseInteractive";
import PdfNoiseInteractive from "@/components/document-parsing/PdfNoiseInteractive";
import RelatedModules from "@/components/shared/RelatedModules";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function DocParseWalkthroughApp() {
  const activeId = useScrollSpy(DOC_PARSE_SECTION_IDS);

  return (
    <div className="app">
      <DocParseSidebar activeId={activeId} />
      <main>
        <section className="hero" id="hero">
          <p className="eyebrow">Production AI · ingestion</p>
          <h1>
            Document
            <br />
            <em>parsing</em>
          </h1>
          <p className="lede">
            PDFs and tables destroy naive chunking. See how parsing quality changes what retrieval
            can ever return.
          </p>
          <div className="panel mono pw-outcome">
            After this module: require structured extraction before embedding SLA tables and PDFs.
          </div>
        </section>

        <section className="step" id="tables">
          <p className="eyebrow">Part 1 · Step 01</p>
          <h2 className="title">Tables → markdown</h2>
          <TableParseInteractive />
        </section>

        <section className="step" id="pdf">
          <p className="eyebrow">Part 1 · Step 02</p>
          <h2 className="title">PDF noise</h2>
          <PdfNoiseInteractive />
        </section>

        <section className="step" id="recap">
          <p className="eyebrow">Part 2 · Step 03</p>
          <h2 className="title">Recap</h2>
          <RelatedModules
            links={[
              { href: "/topics/chunking-strategies", label: "Chunking" },
              { href: "/topics/rag", label: "RAG" },
              { href: "/topics/embeddings", label: "Embeddings" },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
