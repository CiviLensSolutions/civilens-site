import { Logo } from "./Logo";

const s = {
  foot: { padding: "104px 80px 48px", background: "var(--bg-0)", color: "var(--fg-3)", position: "relative" as const, borderTop: "1px solid var(--footer-border)" },
  top: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 88 },
  brand: { display: "flex", flexDirection: "column" as const, alignItems: "flex-start", gap: 18 },
  blurb: { font: "400 14px/1.6 var(--font-sans)", color: "var(--fg-3)", maxWidth: 280, margin: 0 },
  veteran: {
    display: "inline-flex", alignItems: "center", gap: 10,
    font: "500 11px/1 var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase" as const,
    color: "var(--accent)", padding: "8px 12px",
    background: "rgba(201,168,76,0.08)", boxShadow: "inset 0 0 0 1px var(--accent-edge)", borderRadius: 2,
    width: "fit-content",
  },
  col: { display: "flex", flexDirection: "column" as const, gap: 14 },
  contactValueLink: {
    font: "500 14.5px/1.4 var(--font-sans)", color: "var(--accent)",
    letterSpacing: "-0.005em", textDecoration: "none",
  },
  addressLines: { font: "500 14.5px/1.55 var(--font-sans)", color: "var(--fg-1)", letterSpacing: "-0.005em", margin: 0, fontStyle: "normal" },
  link: { font: "400 14px/1.4 var(--font-sans)", color: "var(--fg-2)", cursor: "pointer", textDecoration: "none" },
  bottom: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    paddingTop: 28, boxShadow: "inset 0 1px 0 var(--hairline)",
    font: "500 12px/1 var(--font-mono)", letterSpacing: "0.08em", color: "var(--fg-3)", textTransform: "uppercase" as const,
  },
};

export function Footer() {
  return (
    <footer style={s.foot} className="section-pad footer-section">
      <div style={s.top} className="footer-grid">
        <div style={s.brand}>
          <Logo height={24} color="var(--fg-1)" />
          <p style={s.blurb}>AI consulting built on 17 years inside government technology. Practical tools, plain talk. Built in Denton, TX.</p>
          <div style={s.veteran}>★ Veteran-owned</div>
        </div>

        <div style={s.col}>
          <a href="mailto:shea@civilens.solutions" style={s.contactValueLink}>shea@civilens.solutions</a>
        </div>

        <div style={s.col}>
          <address style={s.addressLines}>
            608 E Hickory St.<br />
            Suite 128<br />
            Denton, TX 76205
          </address>
        </div>

        <div style={s.col}>
          <a href="#schedule" style={s.link}>Schedule consult</a>
          <a href="#capabilities" style={s.link}>Capabilities</a>
          <a href="#about" style={s.link}>About Shea</a>
        </div>
      </div>

      <div style={s.bottom} className="footer-bottom">
        <span>© 2026 Civilens LLC</span>
        <a href="/privacy" style={{ ...s.link, color: "var(--fg-3)" }}>Privacy Policy</a>
      </div>
    </footer>
  );
}
