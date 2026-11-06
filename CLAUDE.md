# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Howard Tam's personal portfolio site (Founding AE / GTM Engineer), served by GitHub Pages at https://howardhwt.github.io/. Plain HTML, one stylesheet, one script. No build step, no package manager, no tests.

## Running locally

Pages use root-absolute paths (`/style.css`, `/work/`, `/img/...`), so serve from the repo root rather than opening files directly:

```sh
python3 -m http.server 8000   # then open http://localhost:8000/
```

Deploying is just pushing to `master`.

## Structure

- Each page is a standalone `index.html` in its own directory (`/`, `work/`, `work/<case-study>/`, `projects/`, `about/`, plus `404.html`). There are no templates or includes: the `<head>` (fonts, OG/Twitter meta, canonical, icons), the `<nav class="nav">` and the GoatCounter script are copied into every page. A nav or head change has to be made in every HTML file.
- The nav marks the current section with `aria-current="true"` on the matching link (case studies mark Work).
- `/closing-time/` is linked from `projects/` but is not in this repo (presumably served from a separate GitHub Pages project repo).
- New or renamed pages also need: an entry in `sitemap.xml`, a 1200×630 social card in `og/` referenced by `og:image`, and a `canonical` link.

## style.css

Single file organised by `/* ---------- Section ---------- */` banners (Tokens, Base, Type, Navigation, per-page sections, Motion, Breakpoints, then reduced-motion / no-script / print). Conventions established in recent refactors:

- One `:root` block; colours are always CSS variables, never literals in rules.
- Each selector appears once; extend the existing rule instead of adding a duplicate.
- Dark-only site (`color-scheme: dark`).
- Interactive targets are at least 44px tall; text links get the hit area without changing their look.

## motion.js

One IIFE loaded with `defer` on every page. It sets `window.siteMotion` and adds `html.js` (the head guard script has usually added it already), then wires behaviour purely by selector, so markup opts in by class:

- `.reveal` – fades in once when scrolled into view.
- `.facts dt` – numbers count up once, then land on the exact original text.
- `.term` (Viggle Console terminal) – a looping "story" driven by `story(root, period, draw, rest)`, a clock that only advances while the element is on screen.
- `.hero-flow` (home hero) – its own finite clock over two lists (`.flow.sys`, `.flow.mine`): a draft blocked at the draft gate, then one that clears, is sent, and lights one real anonymised deal through to "Live in production", where it stops. Starts 1.5s after it comes on screen and runs only while visible; a generated Pause/Play/Replay button goes into `.flow-foot`. Timing lives in the `START`/`SYS`/`HANDOFF`/`DEAL`/`HOLD`/`BLOCK_RUN` constants. Reduced motion renders the finished deal. (`.me` is taken by the About teaser; don't reuse it.)
- `.pin-steps li` + `.pin .flow li` – the pinned pipeline on the outbound case study; the step in the middle of the viewport lights its node.
- `video[muted]` – plays only while visible.

Every effect must degrade: under `prefers-reduced-motion` stories call their `rest`/final state and videos get controls; `.reveal` content is hidden only under `html.js`, which an inline head script adds and removes again on `load` if `window.siteMotion` (set by motion.js) is missing, so content stays visible with JavaScript off or motion.js failing; `print` in style.css keeps it visible too. Check both paths when touching motion.

## Home page specifics

- The contact form posts to Web3Forms (`access_key` hidden input) with inline client-side validation; a hidden `botcheck` checkbox is the honeypot.
- The email link is obfuscated: `data-u`/`data-d` hold reversed strings that a small inline script assembles into a `mailto:`. Keep it that way rather than writing the address in plain text.

## Content conventions

- Visible text uses typographic quotes and apostrophes (’ “ ”); meta/OG attributes may use straight quotes.
- Figures and claims on the site (reply rates, deal counts, dates) are fact-checked; don't change numbers or reword claims without the user's say-so.
- Commit messages follow `type(scope): summary` (`feat`, `fix`, `style`, `a11y`, `content`, `refactor`).
