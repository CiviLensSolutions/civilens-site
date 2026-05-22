import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CiviLens",
  description: "Privacy policy for CiviLens — how we collect and use your information.",
  alternates: { canonical: "https://www.civilens.solutions/privacy" },
  robots: { index: true, follow: true },
};

const s = {
  page: { padding: "80px 40px 120px", maxWidth: 720, margin: "0 auto", font: "400 16px/1.75 var(--font-sans)", color: "var(--fg-1)" },
  h1: { font: "700 36px/1.1 var(--font-sans)", color: "var(--fg-0)", marginBottom: 8, letterSpacing: "-0.02em" },
  updated: { font: "500 13px/1 var(--font-mono)", color: "var(--fg-3)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 48 },
  h2: { font: "600 20px/1.2 var(--font-sans)", color: "var(--fg-0)", marginTop: 40, marginBottom: 12, letterSpacing: "-0.01em" },
  p: { margin: "0 0 16px" },
  a: { color: "var(--accent)", textDecoration: "none" },
  back: { display: "inline-block", font: "500 13px/1 var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--fg-3)", textDecoration: "none", marginBottom: 48 },
};

export default function PrivacyPage() {
  return (
    <main style={s.page}>
      <a href="/" style={s.back}>← Back to CiviLens</a>
      <h1 style={s.h1}>Privacy Policy</h1>
      <p style={s.updated}>Last updated: May 22, 2026</p>

      <p style={s.p}>
        CiviLens (operated by Civilens LLC, 608 E Hickory St Suite 128, Denton, TX 76205) provides AI consulting and software development services. This policy describes what information we collect, how we use it, and your rights under applicable law including the Texas Data Privacy and Security Act (TDPSA).
      </p>

      <h2 style={s.h2}>Information we collect</h2>
      <p style={s.p}>
        When you schedule a consultation through this site, your booking is handled by <a href="https://cal.com" style={s.a} target="_blank" rel="noopener noreferrer">Cal.com</a>. Cal.com collects your name, email address, and any details you provide in the booking form. We receive this information to conduct the consultation.
      </p>
      <p style={s.p}>
        If you contact us directly at <a href="mailto:shea@civilens.solutions" style={s.a}>shea@civilens.solutions</a>, we retain the content of that correspondence.
      </p>
      <p style={s.p}>
        We do not use cookies, analytics trackers, or advertising pixels on this site.
      </p>

      <h2 style={s.h2}>How we use your information</h2>
      <p style={s.p}>
        We use your contact information solely to conduct the consultation you scheduled, to follow up on your inquiry, and to fulfill any engagement you enter into with CiviLens. We do not sell, rent, or share your information with third parties for marketing purposes.
      </p>

      <h2 style={s.h2}>Data retention</h2>
      <p style={s.p}>
        We retain consultation records and correspondence for as long as reasonably necessary to provide services and comply with legal obligations. You may request deletion of your data at any time.
      </p>

      <h2 style={s.h2}>Your rights (Texas TDPSA)</h2>
      <p style={s.p}>
        If you are a Texas resident, you have the right to: access the personal data we hold about you, correct inaccurate data, request deletion of your data, and opt out of any sale of personal data (we do not sell personal data). To exercise any of these rights, email us at <a href="mailto:shea@civilens.solutions" style={s.a}>shea@civilens.solutions</a>.
      </p>

      <h2 style={s.h2}>Third-party services</h2>
      <p style={s.p}>
        This site is hosted on Vercel. Scheduling is handled by Cal.com. Both services have their own privacy policies. We are not responsible for the data practices of third-party services.
      </p>

      <h2 style={s.h2}>Contact</h2>
      <p style={s.p}>
        Questions about this policy or requests related to your data: <a href="mailto:shea@civilens.solutions" style={s.a}>shea@civilens.solutions</a>
      </p>
      <p style={s.p}>
        Civilens LLC<br />
        608 E Hickory St Suite 128<br />
        Denton, TX 76205
      </p>
    </main>
  );
}
