"use client";

import React, { useState } from "react";
import { CLEAN_CHUNK, NAIVE_CHUNK, PARSED_TABLE, RAW_TABLE } from "@/lib/document-parsing/content";

export default function TableParseInteractive() {
  const [parsed, setParsed] = useState(false);

  return (
    <>
      <button type="button" className={`btn ${parsed ? "active" : ""}`} onClick={() => setParsed((v) => !v)}>
        {parsed ? "Structured markdown" : "Raw paste"}
      </button>
      <div className="panel mono" style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
        {parsed ? PARSED_TABLE : RAW_TABLE}
      </div>
      <p className={`pw-verdict ${parsed ? "" : "warn"}`}>
        Chunk for embedding: {parsed ? CLEAN_CHUNK : NAIVE_CHUNK}
      </p>
    </>
  );
}
