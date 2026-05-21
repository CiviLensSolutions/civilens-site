import Image from "next/image";

const s = {
  section: {
    padding: "104px 80px",
    position: "relative" as const, overflow: "hidden",
    backgroundImage: "url('/assets/machine-gears.webp')",
    backgroundSize: "cover", backgroundPosition: "center",
  },
  bgOverlay: {
    position: "absolute" as const, inset: 0,
    background: "rgba(14, 18, 22, 0.80)",
    pointerEvents: "none" as const,
  },
  glow: {
    position: "absolute" as const, inset: 0,
    backgroundImage: "radial-gradient(640px 320px at 95% 100%, rgba(201,168,76,0.12), transparent 60%)",
    pointerEvents: "none" as const,
  },
  inner: {
    position: "relative" as const,
    display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
    gap: 80, alignItems: "start", maxWidth: 1280, margin: "0 auto",
  },
  portraitCol: { display: "flex", flexDirection: "column" as const, gap: 10 },
  mainPhoto: {
    position: "relative" as const, width: "100%", aspectRatio: "4 / 5",
    borderRadius: "var(--r-4)", overflow: "hidden",
    boxShadow: "var(--shadow-3)",
  },
  photoRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  secondaryPhoto: {
    position: "relative" as const, width: "100%", aspectRatio: "4 / 3",
    borderRadius: "var(--r-3)", overflow: "hidden",
    boxShadow: "var(--shadow-2)",
  },
  caption: {
    font: "500 11px/1.4 var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" as const,
    color: "var(--fg-3)", display: "flex", justifyContent: "space-between",
    marginTop: 4,
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
    <section style={s.section} id="about" data-theme="dark" className="section-pad">
      <div style={s.bgOverlay} />
      <div style={s.glow} />
      <div style={s.inner} className="mob-stack">
        <div style={s.portraitCol}>
          <div style={s.mainPhoto}>
            <Image
              src="/assets/shea-portrait.webp"
              alt="Shea Scott"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 1280px) 35vw, 440px"
            />
          </div>
          <div style={s.photoRow}>
            <div style={s.secondaryPhoto}>
              <Image
                src="/assets/shea-c5-flight.webp"
                alt="Shea Scott on C-5 Galaxy"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 1280px) 17vw, 210px"
              />
            </div>
            <div style={s.secondaryPhoto}>
              <Image
                src="/assets/shea-c5.webp"
                alt="C-5 Galaxy on the tarmac"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1280px) 17vw, 210px"
              />
            </div>
          </div>
          <div style={s.caption}>
            <span>Shea Scott · Denton, TX</span>
            <span>C-5 Galaxy, USAF</span>
          </div>
        </div>

        <div style={s.bio}>
          <div style={s.eb}><span style={s.ebRule} />About</div>
          <h2 style={s.headline}>Shea Scott — 17 years building government technology.</h2>
          <p style={s.para}>
            After five years in the Air Force, Shea spent 17 years building web
            systems inside government. He knows where the friction lives because
            he worked inside it — not as a consultant looking in, but as someone
            who spent years navigating the same slow procurement cycles, legacy
            constraints, and underfunded IT shops that your team deals with
            every day.
          </p>
          <p style={s.para}>
            He runs the consults himself — no gimmicks. Just a direct
            conversation about what your team actually does and where AI can make
            a measurable difference. You bring the workflow; he brings 20 years
            of building web systems for organizations that couldn&apos;t afford
            for them to fail.
          </p>
          <div style={s.stats} className="stats-grid">
            {[
              { value: "17 yrs", label: "Inside government technology" },
              { value: "20 yrs", label: "Web development" },
              { value: "Free", label: "Cost of the consult" },
            ].map((stat) => (
              <div key={stat.label} style={s.stat} className="stat-cell">
                <div style={s.statValue} className="stat-value">{stat.value}</div>
                <div style={s.statLabel} className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
