"use client";

import React, { useState } from "react";

const NOISY =
  "Confidential Page 12 of 48 INC-1042 postmortem payments-api timeout during peak";
const CLEAN = "INC-1042 postmortem: payments-api timeout during peak traffic window.";

export default function PdfNoiseInteractive() {
  const [strip, setStrip] = useState(false);

  return (
    <>
      <div className="pw-toggle-row">
        <button
          type="button"
          className={`pw-chip ${!strip ? "on" : ""}`}
          onClick={() => setStrip(false)}
        >
          Naive PDF text
        </button>
        <button
          type="button"
          className={`pw-chip ${strip ? "on" : ""}`}
          onClick={() => setStrip(true)}
        >
          Header/footer stripped
        </button>
      </div>
      <div className="panel">{strip ? CLEAN : NOISY}</div>
      <p className="pw-verdict">
        {strip
          ? "Embeddings align with user queries about INC-1042, not page numbers."
          : "Headers pollute vectors — parse pipeline should normalize before chunking."}
      </p>
    </>
  );
}
