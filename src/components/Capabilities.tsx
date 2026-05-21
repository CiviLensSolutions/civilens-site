"use client";
import { useState } from "react";

const s = {
  section: { padding: "104px 80px", background: "var(--bg-2)" },
  head: {
    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
    marginBottom: 56, gap: 48, flexWrap: "wrap" as const,
  },
  eb: {
    font: "500 12px/1 var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase" as const,
    color: "var(--accent)", display: "flex", alignItems: "center", gap: 12,
  },
  ebRule: { width: 28, height: 1, background: "var(--accent)" },
  title: {
    font: "700 clamp(2rem, 3.4vw, 2.875rem)/1.05 var(--font-display)",
    letterSpacing: "-0.025em", color: "var(--fg-1)", margin: "12px 0 0", maxWidth: 640,
  },
  blurb: { font: "400 16.5px/1.55 var(--font-sans)", color: "var(--fg-2)", maxWidth: 420, margin: 0 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  card: (hover: boolean) => ({
    background: hover ? "var(--bg-4)" : "var(--bg-3)", borderRadius: "var(--r-3)",
    boxShadow: hover ? "var(--shadow-3)" : "var(--shadow-2)",
    padding: "32px 28px 28px", display: "flex", flexDirection: "column" as const, gap: 16,
    minHeight: 300,
    transition: "background 200ms var(--ease-out), box-shadow 200ms var(--ease-out)",
  }),
  num: { font: "500 11px/1 var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "var(--fg-3)" },
  cardTitle: { font: "600 22px/1.2 var(--font-sans)", letterSpacing: "-0.015em", color: "var(--fg-1)", margin: 0 },
  cardBody: { font: "400 14.5px/1.6 var(--font-sans)", color: "var(--fg-2)", margin: 0, flex: 1 },
  cardMeta: {
    marginTop: 12, paddingTop: 16, boxShadow: "inset 0 1px 0 var(--hairline)",
    font: "500 12px/1.4 var(--font-mono)", letterSpacing: "0.06em",
    color: "var(--fg-3)", display: "flex", justifyContent: "space-between",
  },
  cardMetaV: { color: "var(--accent)" },
};

const CAPS = [
  { n: "01", title: "AI integration.", body: "Embed AI into the workflows your team already uses — without replacing what works. We find the slow, repetitive parts and remove them.", meta: ["approach", "workflow-first"] },
  { n: "02", title: "Web & software.", body: "Modern, accessible web applications built to government scale. From citizen-facing portals to internal tools — designed to last, not to impress.", meta: ["stack", "modern · accessible"] },
  { n: "03", title: "Process automation.", body: "Reduce manual overhead so your team can focus on people, not paperwork. We map the process before we touch the code.", meta: ["outcome", "hours back per week"] },
];

export function Capabilities() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section style={s.section} id="capabilities">
      <div style={s.head}>
        <div>
          <div style={s.eb}><span style={s.ebRule} />The product, briefly</div>
          <h2 style={s.title}>What CiviLens does, when you&apos;re ready.</h2>
        </div>
        <p style={s.blurb}>
          The consult isn&apos;t a sales call — but if you want to know
          what we actually build, here&apos;s what we do.
        </p>
      </div>
      <div style={s.grid}>
        {CAPS.map((c, i) => (
          <div key={c.n} style={s.card(hover === i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <div style={s.num}>{c.n}</div>
            <h3 style={s.cardTitle}>{c.title}</h3>
            <p style={s.cardBody}>{c.body}</p>
            <div style={s.cardMeta}>
              <span>{c.meta[0]}</span>
              <span style={s.cardMetaV}>{c.meta[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
