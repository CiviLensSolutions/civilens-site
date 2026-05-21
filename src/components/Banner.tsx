const s = {
  section: { position: "relative" as const, height: 420, background: "var(--bg-0)", overflow: "hidden" },
  img: {
    position: "absolute" as const, inset: 0,
    width: "100%", height: "100%", objectFit: "cover" as const,
    filter: "saturate(0.78) contrast(1.08) brightness(0.78) sepia(0.06)",
  },
  vignette: {
    position: "absolute" as const, inset: 0,
    background: "linear-gradient(180deg, var(--imagery-overlay-top) 0%, var(--imagery-overlay-mid) 35%, var(--imagery-overlay-mid) 60%, var(--imagery-overlay-bot) 100%)",
    pointerEvents: "none" as const,
  },
  grain: {
    position: "absolute" as const, inset: 0,
    backgroundImage: "var(--grain)", backgroundSize: "200px 200px",
    opacity: 0.5, mixBlendMode: "overlay" as const, pointerEvents: "none" as const,
  },
  caption: {
    position: "absolute" as const, left: 40, right: 40, bottom: 40,
    display: "flex", flexDirection: "column" as const, gap: 14, zIndex: 2,
  },
  eb: {
    font: "500 12px/1 var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase" as const,
    color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 12, width: "fit-content",
  },
  ebRule: { width: 28, height: 1, background: "var(--accent)" },
  title: {
    font: "800 clamp(2.5rem, 5.2vw, 4.25rem)/1 var(--font-display)",
    letterSpacing: "-0.03em", color: "#c9a84c", margin: 0,
    display: "flex", alignItems: "center", gap: 22, flexWrap: "nowrap" as const, whiteSpace: "nowrap" as const,
  },
  titleSep: {
    width: 12, height: 12, background: "#c9a84c",
    transform: "rotate(45deg)", display: "inline-block", flexShrink: 0,
  },
  cred: {
    position: "absolute" as const, right: 24, bottom: 16,
    font: "500 11px/1 var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase" as const,
    color: "var(--fg-3)", zIndex: 2,
  },
};

export function Banner() {
  return (
    <section style={s.section} data-theme="dark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/banner-gears.webp" alt="" style={s.img} />
      <div style={s.vignette} />
      <div style={s.grain} />
      <div style={s.caption}>
        <div style={s.eb}>
          <span style={s.ebRule} />
          Civic intelligence · Built in Denton, TX
        </div>
        <h2 style={s.title} className="banner-title">
          <span>Civic Intelligence</span>
          <span style={s.titleSep} />
          <span>Built for Operators</span>
        </h2>
      </div>
      <div style={s.cred}>FILE 2026-05 · DENTON, TX</div>
    </section>
  );
}
