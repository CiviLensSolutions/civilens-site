# Pre-Push Git Hook — Design Spec

**Date:** 2026-05-22  
**Status:** Approved

## Problem

Build failures on Vercel are discovered only after pushing to `main`, triggering a deployment that fails remotely. Errors that a local `next build` would catch (type errors, config issues, path resolution failures) should be caught before the push ever leaves the machine.

## Solution

A committed git hook that runs `next build` before any push. Wired automatically via npm's `prepare` lifecycle so contributors get it for free on `npm install`.

## Components

### `.githooks/pre-push`
Bash script committed to the repo. Runs `next build`; exits 1 on failure (git aborts the push), exits 0 on success (push proceeds). Output is shown in the terminal so the developer sees exactly what failed.

### `package.json` — `prepare` script
```json
"prepare": "if [ -d .git ]; then git config core.hooksPath .githooks; fi"
```
Runs automatically after every `npm install`. The `[ -d .git ]` guard makes it a no-op in CI and non-git environments (e.g., Vercel build runners).

### `README.md` — Development Setup section
Documents that `npm install` auto-wires the hooks and points contributors to `.githooks/` for context. Lives near the top of the README so it's the first thing a new contributor reads.

## Behavior

| Scenario | Result |
|----------|--------|
| `next build` passes | Push proceeds normally |
| `next build` fails | Push aborted, error output shown, exit 1 |
| CI / no `.git` dir | `prepare` is a no-op, hooks not configured |
| Fresh clone, `npm install` | Hooks auto-wired, no manual step needed |

## What This Catches

- TypeScript type errors
- ESLint violations (next build runs lint)
- Build-time path resolution failures (e.g., metadata icon conflicts)
- Missing or malformed config

## What This Does Not Catch

- Runtime errors in the browser
- Vercel-specific environment differences (env vars, region behavior)
- Test failures (no test suite exists yet)

## Files Changed

- `.githooks/pre-push` — new
- `package.json` — add `prepare` script
- `README.md` — add Development Setup section
