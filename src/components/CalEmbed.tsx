"use client";
import { useEffect } from "react";
import { ClaudeMark } from "./ClaudeMark";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: (...args: any[]) => void;
    __calLoaded?: boolean;
  }
}

const s = {
  section: {
    padding: "104px 80px 120px", background: "var(--bg-1)",
    position: "relative" as const, overflow: "hidden",
  },
  bgGlow: {
    position: "absolute" as const, inset: 0,
    backgroundImage: "radial-gradient(720px 360px at 92% 10%, rgba(201,168,76,0.10), transparent 60%)",
    pointerEvents: "none" as const,
  },
  inner: {
    position: "relative" as const,
    display: "grid", gridTemplateColumns: "minmax(0, 0.75fr) minmax(0, 1.25fr)",
    gap: 80, alignItems: "center", maxWidth: 1280, margin: "0 auto",
  },
  pitch: { display: "flex", flexDirection: "column" as const, gap: 24 },
  eb: {
    font: "500 12px/1 var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase" as const,
    color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 12,
  },
  ebRule: { width: 28, height: 1, background: "var(--accent)" },
  title: {
    font: "700 clamp(2rem, 3.4vw, 2.875rem)/1.05 var(--font-display)",
    letterSpacing: "-0.025em", color: "var(--fg-1)", margin: 0, maxWidth: 520,
  },
  amber: { color: "var(--accent)" },
  body: { font: "400 16.5px/1.55 var(--font-sans)", color: "var(--fg-2)", margin: 0, maxWidth: 520 },
  embedWrap: { display: "flex", flexDirection: "column" as const, gap: 12 },
  embedLabel: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    font: "500 11px/1 var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase" as const,
    color: "var(--fg-3)",
  },
  embedLabelTag: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "6px 10px", background: "var(--bg-2)",
    boxShadow: "inset 0 0 0 1px var(--hairline-2)", borderRadius: "var(--r-2)",
  },
  embedLabelDot: { width: 6, height: 6, borderRadius: "var(--r-full)", background: "var(--accent)" },
  calMount: { borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow-3)", minHeight: 400 },
  watermark: {
    marginTop: 12, textAlign: "center" as const,
    font: "500 12px/1 var(--font-mono)", color: "var(--fg-4)",
    letterSpacing: "0.14em", textTransform: "uppercase" as const,
  },
  wygWrap: {
    position: "relative" as const, maxWidth: 1280, margin: "0 auto",
    paddingTop: 96, marginTop: 96,
    boxShadow: "inset 0 1px 0 var(--hairline)",
  },
  wygHead: { display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 40 },
  wygTitle: {
    font: "600 clamp(1.625rem, 2.4vw, 2.125rem)/1.1 var(--font-display)",
    letterSpacing: "-0.02em", color: "var(--fg-1)", margin: 0, maxWidth: 700,
  },
  wygGrid: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
    gap: 1, background: "var(--hairline)",
    boxShadow: "inset 0 1px 0 var(--hairline), inset 0 -1px 0 var(--hairline)",
  },
  wygCell: {
    background: "var(--bg-1)", padding: "32px 28px 28px",
    display: "flex", flexDirection: "column" as const, gap: 12,
  },
  wygNum: { font: "500 11px/1 var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "var(--accent)" },
  wygCellTitle: { font: "600 19px/1.25 var(--font-sans)", letterSpacing: "-0.015em", color: "var(--fg-1)", margin: 0 },
};

export function CalEmbed() {
  useEffect(() => {
    if (window.__calLoaded) return;
    window.__calLoaded = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = (a: any, ar: any) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api = (...a: unknown[]) => { p(api, a); };
          const ns = args[1];
          (api as unknown as { q: unknown[] }).q = (api as unknown as { q: unknown[] }).q || [];
          if (typeof ns === "string") { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], args); p(cal, [L, ns, ...args.slice(2)]); } else { p(cal, args); }
          return;
        }
        p(cal, args);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", { origin: "https://cal.com" });
    window.Cal!("inline", {
      elementOrSelector: "#cal-embed-mount",
      calLink: "shea-civilens",
      layout: "month_view",
    });
    window.Cal!("ui", {
      styles: { branding: { brandColor: "#c9a84c" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section style={s.section} id="schedule">
      <div style={s.bgGlow} />
      <div style={s.inner}>
        <div style={s.pitch}>
          <div style={s.eb}><span style={s.ebRule} />Schedule · cal.com</div>
          <h2 style={s.title}>
            Pick a time.{" "}
            <span style={s.amber}>That&apos;s the whole step.</span>
          </h2>
          <p style={s.body}>
            30 minutes. Free. One month of Claude Pro<ClaudeMark /> when we&apos;re done.
          </p>
        </div>

        <div style={s.embedWrap}>
          <div style={s.embedLabel}>
            <span>Live widget</span>
            <span style={s.embedLabelTag}>
              <span style={s.embedLabelDot} />
              cal.com/shea-civilens
            </span>
          </div>
          <div style={s.calMount}>
            <div id="cal-embed-mount" style={{ minHeight: 400 }} />
          </div>
          <div style={s.watermark}>cal.com</div>
        </div>
      </div>

      <div style={s.wygWrap}>
        <div style={s.wygHead}>
          <div style={s.eb}><span style={s.ebRule} />What you&apos;ll get</div>
          <h3 style={s.wygTitle}>Thirty minutes. Three things to take with you.</h3>
        </div>
        <div style={s.wygGrid}>
          {([
            { n: "01", title: "An honest look at your week." },
            { n: "02", title: "Two or three concrete moves." },
            { n: "03", title: null },
          ] as { n: string; title: string | null }[]).map((item) => (
            <div key={item.n} style={s.wygCell}>
              <div style={s.wygNum}>{item.n}</div>
              <h4 style={s.wygCellTitle}>
                {item.title ?? <>A month of Claude Pro<ClaudeMark />.</>}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
