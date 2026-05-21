"use client";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const s = {
  outer: {
    position: "sticky" as const, top: 0, zIndex: 50,
  },
  nav: {
    height: 68, padding: "0 40px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "var(--surface-blur)",
    backdropFilter: "blur(14px) saturate(120%)",
    WebkitBackdropFilter: "blur(14px) saturate(120%)",
    position: "relative" as const,
  },
  rule: {
    position: "absolute" as const, left: 0, right: 0, bottom: -1, height: 1,
    background: "linear-gradient(to right, var(--hairline-2) 0%, transparent 100%)",
    pointerEvents: "none" as const,
  },
  left: { display: "flex", alignItems: "center", gap: 36 },
  links: { display: "flex", gap: 26 },
  link: {
    font: "500 13.5px/1 var(--font-sans)",
    color: "var(--fg-2)", textDecoration: "none",
    letterSpacing: "-0.005em", cursor: "pointer",
  },
  right: { display: "flex", alignItems: "center", gap: 14 },
  themeBtn: {
    height: 32, width: 32, display: "grid", placeItems: "center",
    background: "transparent", color: "var(--fg-1)",
    border: 0, borderRadius: "var(--r-2)", cursor: "pointer",
    boxShadow: "inset 0 0 0 1px var(--hairline-2)",
  },
  cta: {
    font: "600 13px/1 var(--font-sans)",
    background: "var(--accent)", color: "var(--accent-ink)",
    padding: "10px 16px", borderRadius: "var(--r-3)",
    border: 0, cursor: "pointer", letterSpacing: "-0.005em",
  },
  hamburger: {
    height: 32, width: 32, placeItems: "center",
    background: "transparent", color: "var(--fg-1)",
    border: 0, borderRadius: "var(--r-2)", cursor: "pointer",
    boxShadow: "inset 0 0 0 1px var(--hairline-2)",
  },
  mobileMenu: {
    flexDirection: "column" as const,
    background: "var(--surface-blur)",
    backdropFilter: "blur(14px) saturate(120%)",
    WebkitBackdropFilter: "blur(14px) saturate(120%)",
    borderTop: "1px solid var(--hairline)",
    padding: "8px 24px 24px",
    gap: 0,
  },
  mobileLink: {
    font: "500 16px/1 var(--font-sans)",
    color: "var(--fg-2)", textDecoration: "none",
    padding: "14px 0",
    borderBottom: "1px solid var(--hairline)",
    cursor: "pointer", display: "block",
  },
  mobileCta: {
    marginTop: 20,
    font: "600 14px/1 var(--font-sans)",
    background: "var(--accent)", color: "var(--accent-ink)",
    padding: "13px 20px", borderRadius: "var(--r-3)",
    border: 0, cursor: "pointer",
    textAlign: "center" as const,
    textDecoration: "none",
    display: "block",
  },
};

const navItems = [
  { label: "Free Consult",  href: "#schedule" },
  { label: "Capabilities",  href: "#capabilities" },
  { label: "About",         href: "#about" },
];

export function Nav() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("civilens-theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolved = stored ?? system;
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("civilens-theme", next); } catch {}
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div style={s.outer} data-theme="dark">
      <nav style={s.nav}>
        <div style={s.left}>
          <Logo height={20} color="var(--fg-1)" />
          <div style={s.links} className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={s.link}
                 onMouseOver={(e) => (e.currentTarget.style.color = "var(--fg-1)")}
                 onMouseOut={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
              >{item.label}</a>
            ))}
          </div>
        </div>
        <div style={s.right}>
          <button style={s.themeBtn} onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark"
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/></svg>
            }
          </button>
          <div className="nav-cta-wrap">
            <a href="#schedule" style={{ textDecoration: "none" }}>
              <button style={s.cta} data-cta="primary"
                onMouseOver={(e) => (e.currentTarget.style.background = "var(--accent-hi)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >Schedule A Consult</button>
            </a>
          </div>
          <button
            className="nav-hamburger"
            style={s.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            }
          </button>
        </div>
        <div style={s.rule} />
      </nav>
      <div className="mob-menu" style={{ ...s.mobileMenu, display: menuOpen ? "flex" : undefined }}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} style={s.mobileLink} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#schedule" style={s.mobileCta} data-cta="primary" onClick={closeMenu}>
          Schedule A Consult
        </a>
      </div>
    </div>
  );
}
