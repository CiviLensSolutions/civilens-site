"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: (...args: any[]) => void;
    __calLoaded?: boolean;
  }
}

export function CalEmbedWidget() {
  useEffect(() => {
    const handleCalMessage = (e: MessageEvent) => {
      if (e.data?.type === "__routeChanged" || e.data?.action === "__routeChanged") {
        document.getElementById("cal-embed-mount")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("message", handleCalMessage);

    if (!window.__calLoaded) {
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
    }

    return () => window.removeEventListener("message", handleCalMessage);
  }, []);

  return <div id="cal-embed-mount" style={{ minHeight: 680 }} />;
}
