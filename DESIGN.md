---
name: Howard Tam
description: Portfolio of a Founding AE who builds the systems he sells with; monochrome graphite, live mechanisms.
colors:
  graphite: "#181818"
  graphite-raised: "#1F1F1F"
  graphite-lifted: "#272727"
  hairline: "#313131"
  chalk: "#EDEDED"
  ash: "#C8C8C8"
  smoke: "#9B9B9B"
  white: "#FFFFFF"
  ink: "#000000"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "36px"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "20px"
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  mono-small:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
rounded:
  xs: "3px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
components:
  button-primary:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.graphite-raised}"
  input:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.chalk}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.smoke}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "44px"
  nav-link-current:
    backgroundColor: "{colors.graphite-lifted}"
    textColor: "{colors.chalk}"
  card-work:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-work-hover:
    backgroundColor: "{colors.graphite-lifted}"
  chip:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  flow-node:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  flow-node-human:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.graphite}"
  terminal:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ash}"
    typography: "{typography.mono}"
    rounded: "{rounded.lg}"
    padding: "16px"
---

# Design System: Howard Tam

## Overview

**Creative North Star: "The Instrument Panel"**

The site behaves like the systems it describes. A pipeline lights node by node, a gate stops a draft, a terminal prints a priced batch and then refuses one over the cap. Everything around those mechanisms is quiet chrome: graphite surfaces, hairline borders, grey type that brightens only where attention belongs. The visitor should feel they are looking at working equipment, not a brochure about it.

Density is moderate and editorial: one wide column (max 1200px) with generous vertical gaps (64px between home sections), readable measures (about 72 characters a line, `--measure: 52ch`) for prose, and numbers set large on hairlines rather than in boxes. Emphasis comes from brightness, not hue. Today the palette has no accent colour; that is the current state, not a permanent rule, and a single accent may be introduced later if it earns its place.

Motion is functional storytelling, never decoration. Entrances are short blur-and-rise appearances; the live diagrams run on clocks that pause off screen; every effect has a still, complete fallback for reduced motion, no JavaScript, and print.

**Key Characteristics:**
- Monochrome graphite ladder, emphasis by luminance
- Geist for everything, Geist Mono for metadata and machine output
- Flat surfaces separated by hairlines; no shadows
- Small, consistent radii (8px controls, 12px containers, 16px media)
- Live mechanism diagrams as the signature element
- Every animated state has a static equivalent

## Colors

A single neutral ladder from near-black to white; brightness carries hierarchy and state.

### Primary
- **Chalk**: primary text, inverted primary buttons, the "I send" human node, focus-adjacent emphasis. The brightest everyday tone; reserved white is one step above it.

### Neutral
- **Graphite**: page background and the colour of text on inverted controls.
- **Graphite Raised**: cards, inputs, chips, pipeline nodes at rest.
- **Graphite Lifted**: hover state for cards, current nav item, lit pipeline nodes.
- **Hairline**: every border and divider; also the 2px gap colour between stacked work cards.
- **Ash**: long-form body text in case studies, About, and terminal output; slightly softer than Chalk for reading comfort.
- **Smoke**: secondary text, captions, metadata, inactive nav, lede paragraphs.
- **White**: hover for primary buttons, focus outlines, the pulse ring on the case study's sent node.
- **Ink**: terminal background and the backdrop behind project thumbnails and videos.

### Named Rules
**The Luminance Rule.** State is shown by brightness, borders, tags and motion: lit is Graphite Lifted with an Ash border, unreached steps drop to Smoke text while a draft runs, current is a Chalk border, blocked is a Chalk border on Graphite with an inverted mono tag ("draft stopped") on the draft rather than a strike through the gate, the human node lit means ready ("draft ready"), skipped steps dim to 35% opacity. The pinned case-study flow still pulses a White ring on its final step.

**The Tokens-Only Rule.** Colours live once in `:root` and are referenced by variable; no literal colour values in rules; translucency is mixed from a token (`color-mix`), never written as a raw `rgba()`.

## Typography

**Display Font:** Geist (with system-ui, sans-serif)
**Body Font:** Geist (with system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** One neutral, engineered sans family across every role, with its mono sibling for anything a machine would print: eyebrows, dates, kickers, terminal lines, examples. The pairing says "built", not "designed at".

### Hierarchy
- **Display** (600, 48px mobile / 60px from 768px, line-height 1, -0.03em): page H1 only, max 680px (800px on case studies), balanced wrap, solid Chalk. No gradient fill: it dimmed the words that carry the claim.
- **Headline** (600, 30px/36px, -0.02em): stat figures with tabular numerals; project names on the Projects page.
- **Title** (600, 20px/28px, -0.01em): section H2s and work card titles.
- **Lede** (400, 18px/28px): intro paragraphs in Smoke, About paragraphs in Ash, max `--measure` (52ch, about 72 characters), pretty wrap.
- **Body** (400, 16px/24px): prose in Ash, max `--measure` (52ch, about 72 characters).
- **Label** (500, 14px/20px): nav, form labels, "more" links, pipeline nodes, captions and descriptions (400).
- **Mono** (400, 14px/20px): eyebrows, breadcrumb, timeline dates, terminal. **Mono small** (12px/16px): kickers, portrait captions, gate examples.

### Named Rules
**The Machine Voice Rule.** Geist Mono marks metadata and machine output only (dates, kickers, terminal, examples). Headings and prose never go mono.

## Layout

A single centred container (max 1200px, 24px side padding) holding a vertical grid of sections: 64px apart on home, 48px on case studies. Main content starts 128px from the top (160px from 768px, back to 128px from 1100px where the pipeline starts at the top) to clear the floating nav.

Prose is capped at `--measure` (52ch; Geist sets about 1.4 characters per ch, so this is about 72 characters a line). Grids are explicit and step at breakpoints: figures sit two to a row until 900px, then one row; home project rows stack until 1100px, then go three across. Breakpoints: 480px (nav collapses brand to "HT", figures drop to 24px), below 768px (the hero's system zone wraps into a row), 768px (larger display, work cards gain a 240px thumbnail column, About teaser goes two-column), 900px (figures sit in one row however many there are, contact goes two-column, Projects alternate 7fr/5fr, About goes 4fr/7fr with a sticky portrait, pinned pipeline gets a 220px sticky column), 1100px (hero gains a 400px pipeline column that starts at the top, with the claim centred beside it; home project rows go three across).

Spacing steps on a 4px base: 4, 8, 12, 16, 24, 32, 48, 64. Lists of rows (timeline, writing, pipeline steps) separate with top hairlines, not gaps.

## Elevation & Depth

Flat. No box shadows anywhere. Depth comes from tonal layering (Graphite → Graphite Raised → Graphite Lifted), hairline borders, and Ink wells behind media and the terminal. The only translucency is the floating nav: 88% Graphite (mixed from the token) with a 16px blur and 1.4 saturation, opaque enough that titles scrolling underneath do not read through.

### Named Rules
**The Flat Panel Rule.** Surfaces never lift. Hover is a one-step tonal change or a 1.03 media zoom inside a clipped frame, never a shadow or a translate.

## Shapes

Gently rounded rectangles in a tight ladder: 3px for the small mono tags (pipeline tags, the "show address" tag) and the tiny status squares in the terminal, 8px for every control (buttons, inputs, nav links, chips, nodes, notes), 12px for containers (nav bar, work card group, terminal, artifact images), 16px for large media and the portrait. Every container and image carries a 1px Hairline border. Media is cropped with `object-fit: cover` inside fixed aspect ratios (4:3 tiles and thumbnails, 4:5 portraits).

## Components

Precise and restrained: flat fills, hairline edges, small radii; feedback is a tonal step, never a flourish.

### Buttons
- **Shape:** gently rounded (8px), minimum 44px tall.
- **Primary:** Chalk fill, Graphite text, semibold, 8px 12px padding. One per view at most (the form submit, the 404's "Go to home page").
- **Hover / Focus:** hover brightens to White; press scales to 0.98; focus is a 2px White outline offset 2px.
- **Secondary:** transparent with a Hairline border and Chalk text; hover fills Graphite Raised and the border brightens to Smoke. Used for project links and the closing link rows on case studies, About and the 404.
- **Text links:** "more" and jump links are Chalk with a Hairline underline border that turns Chalk on hover; an invisible 44px hit area extends them without changing their look. In-text links underline at 4px offset and go Ash once visited. The hero ask ("Get in touch") is the exception: a 44px bordered link (Hairline border, 8px radius, Graphite-raised on hover) beside the plain "Read the case studies" link, so it reads as the next step.

### Chips
- **Style:** Graphite Raised fill, Hairline border, 8px radius, label type. Static tags (interests on About); no selected state.

### Cards / Containers
- **Corner Style:** 12px for the work card group, 16px for text-only project panels.
- **Background:** Graphite Raised, Graphite Lifted on hover.
- **Shadow Strategy:** none (see Elevation).
- **Border:** work cards stack inside one bordered group separated by 2px Hairline gaps; the thumbnail is 2:1 in its own 8px Hairline frame, taking 32% of the row from 768px. It shows the real artifact legibly at thumbnail size: the console as a tight crop of its terminal, the outbound case as the demo run's tally set in type (a 3x2 Hairline grid of Ink cells, 24px Mono numbers over Mono-small labels, "0 emails sent" in Chalk).
- **Internal Padding:** 24px (32px for text-only project panels).

### Inputs / Fields
- **Style:** Graphite Raised fill, Hairline border, 8px radius, 8px 12px padding, inherits body type; label above in label weight.
- **Focus:** 2px White outline offset 2px.
- **Error:** the field doubles its edge (Chalk border plus a 1px inset Chalk outline) and a Mono-small Chalk message sits 4px below it behind a 6px Chalk status square, so it can never read as the next label; no red. Fields are 24px apart. Disabled submit drops to 60% opacity with a progress cursor. The send result is 16px Chalk behind the same status square.
- **Layout:** the contact heading is 30px/36px (the figure size), the page's ask rather than a section label. From 900px the left column holds the heading, the reply-time note, a Mono "what I want to hear about" line and the direct channels as Hairline-ruled 44px rows (name left, Mono-small Smoke descriptor right: Email, LinkedIn, the outbound-gates repo; names never wrap, and on narrow phones a descriptor wraps to two balanced, right-aligned lines inside 6px row padding); the form takes a 560px right column. On phones the channel rows come before the form, so a visitor can tap before typing; the Email row carries a script-added "show address" tag (the outlined mono tag style, brightening to Chalk on hover/focus, 44px hit area) that reveals the address spelled out ("at", "dot") on its own Ash line below, then becomes "copy": the real address goes to the clipboard, the tag reads "copied" (or "copy blocked, use Email") for 2s, and both changes are announced politely. Without JavaScript the row shows only "Email"; the address never appears in the HTML source.

### Navigation
- A floating pill bar centred 16px from the top: 12px radius, Hairline border, 88% blurred Graphite, 4px inner padding. Links are label type in Smoke, 44px tall, 8px radius; hover turns Chalk, the current section gets Graphite Lifted with Chalk text. The brand is Chalk semibold and shortens to "HT" under 480px. It appears with the standard rise-and-unblur entrance.

### Hero proof line
Under the availability line, two Mono 14/20 Chalk lines put evidence in the first screen: what closed ("~$47K closed at Viggle") and what it led to ("30+ API opportunities originated, 2 live in production"); deliberately not a deal count that could be divided against the revenue. Stacked, no separators, so they never wrap mid-pair.

### Pipeline Flow (signature)
The home hero is one column of two labelled zones in Mono small Smoke: "The system" (Source, Qualify, Draft, Draft gate, Account gate as compact 14px 8px-radius rows, sub-label on the right in 12px Smoke) and "Me" (I send, Reply, Discovery call, API trial, Pricing, Signed, Live in production as full 16px rows). Seller first: the deal zone is the heavier half and lights at a slower pace (0.75s a step against 0.35s for the system). The Me zone is one real Viggle deal, anonymised: no name, amount or dates. Hairline connectors join the rows and light Ash as a draft passes. The story runs twice and ends: first a draft is blocked (the draft gate gets an inverted "draft stopped" tag, later nodes dim); after a 0.4s reset, a draft clears both gates, the human node fills Chalk with a "draft ready" tag for that beat only (it returns to an outline once the deal moves on), and the deal lights row by row to "Live in production", the only Chalk-filled row at the end, which holds. Once the first draft is stopped, the draft gate keeps an outlined, Smoke "1 stopped" tag to the end, so the finished frame (and the reduced-motion view) still records the stop. The whole story runs about 11s. While a run plays, unreached rows drop to Smoke text. A 16px Ash caption crossfades to narrate each phase; beneath it a Pause/Play/Replay text button and a Mono-small "Illustration · real deal path, anonymised" label. The first run waits 1.5s, and the clock runs only while about 70% of the figure (or 80% of the screen height, if the figure is taller) is visible, so on phones it starts when scrolled to. Reduced motion shows the finished deal. Hover does not pause it. From 1100px it takes a 400px column beside the claim; below that it stacks under the text, and below 768px the system zone wraps into a row of small chips without sub-labels or connectors (tags sit inline) so the figure stays under about 480px. On the case study the system flow is pinned beside scrolling steps, and the step in the middle of the viewport lights its node; its final step still pulses a White ring.

### Terminal (signature)
An Ink panel, 12px radius, Hairline border, Geist Mono 14/20. Commands in Chalk prefixed with a Smoke "›", results indented in Smoke. Lines rise and unblur in sequence; small 10px status squares fill Chalk as shots go ready. Alternates an accepted run with a refused one, and carries a caption saying it is an illustration.

### Motion
Two easing curves: a long-tailed expo-out for movement (`cubic-bezier(0.16, 1, 0.3, 1)`) and a cubic-out for opacity and blur. Entrances rise 6–16px and unblur 2–4px over 700–800ms, staggered 60ms. State transitions run 300ms; media zoom 500ms. Where supported, from 1100px the hero claim column (never the pipeline) scrubs down as you scroll and `.grow` elements scale in on view.

## Do's and Don'ts

### Do:
- **Do** express state through luminance, borders, tags, opacity and motion (see The Luminance Rule).
- **Do** keep every interactive target at least 44px tall, extending text links with an invisible hit area rather than restyling them.
- **Do** give every animation a still, complete end state for reduced motion, no JavaScript, and print.
- **Do** run looping diagrams only while on screen, and label illustrations that are not real data.
- **Do** set numbers in tabular figures on a top hairline, with their definition beneath in Smoke.
- **Do** frame every image and video in a 1px Hairline border with the radius ladder (8 / 12 / 16px).

### Don't:
- **Don't** add box shadows, glows or lifted hover states; the system is flat.
- **Don't** use colour to signal errors or success (no red, no green); errors are a doubled Chalk edge plus a Mono-small Chalk message.
- **Don't** set headings or prose in Geist Mono; mono is for metadata and machine output.
- **Don't** write literal colours in rules; add a token to `:root`.
- **Don't** box the stat figures; they sit on hairlines.
- **Don't** use more than one inverted Chalk button per view.
