"use client";

import React, { useMemo, useState } from "react";
import { FILTER_DOCS } from "@/lib/vector-databases/content";

export default function MetadataFilterInteractive() {
  const [tenant, setTenant] = useState<"all" | "payments" | "corp">("payments");
  const [role, setRole] = useState<"eng" | "soc" | "hr">("eng");

  const visible = useMemo(() => {
    return FILTER_DOCS.filter((d) => {
      const tenantOk = tenant === "all" || d.tenant === tenant;
      const roleOk = d.role === role;
      return tenantOk && roleOk;
    });
  }, [tenant, role]);

  return (
    <>
      <p className="lede">Pre-filter at query time — same embedding index, different ACL slices.</p>
      <div className="pw-toggle-row">
        {(["payments", "corp", "all"] as const).map((t) => (
          <button
            key={t}
            type="button"
            className={`pw-chip ${tenant === t ? "on" : ""}`}
            onClick={() => setTenant(t)}
          >
            tenant={t}
          </button>
        ))}
      </div>
      <div className="pw-toggle-row">
        {(["eng", "soc", "hr"] as const).map((r) => (
          <button
            key={r}
            type="button"
            className={`pw-chip ${role === r ? "on" : ""}`}
            onClick={() => setRole(r)}
          >
            role={r}
          </button>
        ))}
      </div>
      <div className="panel">
        <p className="pw-col-title">Chunks returned ({visible.length})</p>
        <ul className="pw-list">
          {visible.map((d) => (
            <li key={d.id}>{d.title}</li>
          ))}
          {visible.length === 0 && <li className="mono">No chunks — filter too strict or ACL mismatch.</li>}
        </ul>
      </div>
    </>
  );
}
