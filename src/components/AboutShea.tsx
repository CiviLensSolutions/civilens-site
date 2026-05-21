const s = {
  section: { padding: "104px 80px", background: "var(--bg-0)", position: "relative" as const, overflow: "hidden" },
  glow: {
    position: "absolute" as const, inset: 0,
    backgroundImage: "radial-gradient(640px 320px at 95% 100%, rgba(201,168,76,0.10), transparent 60%)",
    pointerEvents: "none" as const,
  },
  inner: {
    position: "relative" as const,
    display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
    gap: 80, alignItems: "start", maxWidth: 1280, margin: "0 auto",
  },
  portraitCol: { display: "flex", flexDirection: "column" as const, gap: 16 },
  portrait: {
    position: "relative" as const, aspectRatio: "4 / 5",
    background: "linear-gradient(135deg, #2a323a 0%, #1b2127 60%, #2c2018 100%)",
    borderRadius: "var(--r-4)", boxShadow: "var(--shadow-2)", overflow: "hidden",
    display: "grid", placeItems: "center",
  },
  portraitGrain: {
    position: "absolute" as const, inset: 0,
    backgroundImage: "var(--grain)", backgroundSize: "200px 200px",
    mixBlendMode: "overlay" as const, opacity: 0.7, pointerEvents: "none" as const,
  },
  portraitLabel: {
    position: "absolute" as const, top: 16, left: 16,
    font: "500 11px/1 var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase" as const,
    color: "var(--accent)", padding: "6px 10px",
    background: "rgba(201,168,76,0.10)", boxShadow: "inset 0 0 0 1px var(--accent-edge)", borderRadius: 2,
  },
  portraitGlyph: {
    font: "300 132px/1 var(--font-display)", color: "var(--fg-3)",
    opacity: 0.35, letterSpacing: "-0.04em", userSelect: "none" as const,
  },
  caption: {
    font: "500 11px/1.4 var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" as const,
    color: "var(--fg-3)", display: "flex", justifyContent: "space-between",
  },
  bio: { display: "flex", flexDirection: "column" as const, gap: 22 },
  eb: {
    font: "500 12px/1 var(--font-mono)", letterSpacing: "0.16em", textTransform: "uppercase" as const,
    color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 12,
  },
  ebRule: { width: 28, height: 1, background: "var(--accent)" },
  headline: {
    font: "700 clamp(2rem, 3.4vw, 2.875rem)/1.05 var(--font-display)",
    letterSpacing: "-0.025em", color: "var(--fg-1)", margin: 0, maxWidth: 640,
  },
  para: { font: "400 17px/1.6 var(--font-sans)", color: "var(--fg-2)", margin: 0, maxWidth: 620, letterSpacing: "-0.003em" },
  paraStrong: { color: "var(--fg-1)", fontWeight: 500 },
  stats: {
    marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
    gap: 1, background: "var(--hairline)",
    boxShadow: "inset 0 1px 0 var(--hairline), inset 0 -1px 0 var(--hairline)",
  },
  stat: { background: "var(--bg-0)", padding: "20px 24px 18px", display: "flex", flexDirection: "column" as const, gap: 6 },
  statValue: { font: "600 28px/1 var(--font-display)", letterSpacing: "-0.02em", color: "var(--accent)" },
  statLabel: { font: "500 11px/1.3 var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--fg-3)" },
};

export function AboutShea() {
  return (
    <section style={s.section} id="about">
      <div style={s.glow} />
      <div style={s.inner}>
        <div style={s.portraitCol}>
          <div style={s.portrait}>
            <div style={s.portraitGlyph}>S</div>
            <div style={s.portraitGrain} />
            <div style={s.portraitLabel}>★ Founder · SDVOSB</div>
          </div>
          <div style={s.caption}>
            <span>Shea Scott · Denton, TX</span>
            <span>Portrait pending</span>
          </div>
        </div>

        <div style={s.bio}>
          <div style={s.eb}><span style={s.ebRule} />About the host</div>
          <h2 style={s.headline}>Shea Scott — 17 years inside the machine.</h2>
          <p style={s.para}>
            Shea is a <span style={s.paraStrong}>U.S. Army veteran</span>{" "}
            who spent 17 years in public sector technology — long enough to
            know exactly where the waste lives. He started CiviLens because
            the tools government and nonprofits deserve don&apos;t exist yet,
            and waiting for someone else to build them stopped making sense.
          </p>
          <p style={s.para}>
            He runs the consults himself — no SDR, no funnel. The point is
            to talk plainly about what AI is actually good at right now, and
            what it&apos;s not. You bring a workflow; he brings 17 years of
            knowing where the slow parts hide.
          </p>
          <div style={s.stats}>
            {[
              { value: "17 yrs", label: "Public sector technology" },
              { value: "70%", label: "Service-connected · U.S. Army" },
              { value: "0", label: "Sales decks shown" },
            ].map((stat) => (
              <div key={stat.label} style={s.stat}>
                <div style={s.statValue}>{stat.value}</div>
                <div style={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
