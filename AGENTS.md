<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:civilens-site-conventions -->
# CiviLens Site Conventions

## Design source of truth

Claude Design is the visual source of truth. Reproduce its output exactly in code — same layout, spacing, colors, fonts. Do not change design or layout without an explicit request. Copy (text content) changes are fine when instructed.

## CSS custom properties + Turbopack

All design tokens are CSS custom properties in `src/app/globals.css`. Tailwind v4 / Turbopack passes them through correctly when the cache is clean.

**If CSS vars stop resolving** (check: `getComputedStyle(document.documentElement).getPropertyValue('--bg-0')` in console returns empty):
1. `pkill -f "next"` — kill all dev server instances
2. `rm -rf .next` — clear Turbopack cache
3. Restart dev server

Do not debug CSS syntax until you have ruled out cache corruption.

## Multiple dev servers

Never run `npm run dev` without killing prior instances first. Stale servers accumulate on ports 3001, 3002, etc. and serve mismatched CSS.

## Theme system

- Default: `data-theme="light"` set statically on `<html>` in `layout.tsx`
- Nav is `"use client"`, reads `localStorage` on mount, updates `data-theme` on `document.documentElement`
- Nav section has `data-theme="dark"` hardcoded so it stays dark regardless of page theme
- Inline scripts injected via React props are blocked by the security hook in this repo — use static HTML attributes for SSR defaults instead

## Cal widget frame

The cal embed mount div uses `className="cal-mount-frame"`. Its background is inverted per theme (dark frame in light mode, cream frame in dark mode) via rules in `globals.css`. This creates contrast in both themes since the section background and Cal card background are otherwise similar.
<!-- END:civilens-site-conventions -->
