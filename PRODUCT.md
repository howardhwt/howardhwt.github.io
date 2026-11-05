# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: founders and heads of sales at early-stage B2B and AI startups, vetting Howard Tam for a Founding Account Executive or GTM Engineer seat. They usually arrive from a LinkedIn touch or a referral, have limited time, and are deciding whether he can both sell and build the go-to-market systems an early team lacks.

Secondary (not the decision the site must win): recruiters screening before forwarding to a founder, and GTM peers or LinkedIn readers arriving from his posts.

## Product Purpose

A personal portfolio that makes the case for hiring Howard as a seller who builds. The case studies are the proof; outreach is the conversion. Success is a hiring founder reading enough evidence to believe the claim, then sending a message (contact form, email, or LinkedIn) to talk about a role.

## Positioning

- **A seller who builds.** Hired to sell, he builds the CRM, the outbound, and the tools the team sells with: HubSpot from zero at Sequence (200+ deals across 3 pipelines), the sales and CRM stack at Viggle as first commercial hire.
- **Agentic GTM on Claude, hands-on.** Four scheduled outbound agents with mechanical gates and a person on send; an MCP server with spending guardrails on the Viggle Console; a published `outbound-gates` repo with tests. Built himself, with Claude Code.

Supporting, not leading: case studies say plainly what broke and what is not yet verified; the finance background (Hong Kong banking, Waterloo MBET) explains the habit of building his own tools.

## Operating Context

- Visitors evaluate on desktop between calls and on phones from LinkedIn links; social preview cards (`og/`) matter because links get shared in DMs and posts.
- Pages: home, Work (two case studies), Projects, About, 404. Case studies are long reads; home is the summary and the contact point.
- Contact goes through a Web3Forms form on the home page, an obfuscated mailto, and LinkedIn. Analytics via GoatCounter.

## Capabilities and Constraints

- Static site on GitHub Pages: plain HTML, one stylesheet, one script, no build step. Each page duplicates its head and nav.
- Every motion effect must degrade under reduced motion, with JavaScript off, and in print.
- Open decisions: none recorded.

## Brand Commitments

Observed in the existing copy (confirm before changing):

- First person, plain and specific. Numbers carry definitions ("counting only replies from a person") and date ranges.
- Claims are only what can be verified; illustrations are labelled as not real data; limits are stated ("tested against fakes only").
- Typographic quotes and apostrophes in visible text.
- Name and wordmark: "Howard Tam", short form "HT".

## Evidence on Hand

- Case studies: `work/agentic-outbound/`, `work/viggle-console/`, with figures (400+ companies emailed; 15% human reply rate on the newest API line, 10% across all; ~$47K closed; 30+ API opportunities, 2 in production; 6 colleagues use the console; 159 tests).
- Artifacts: outbound-gates demo report (`img/outbound-gates-report.jpg`, `img/work-outbound.jpg`), console illustration (`img/work-console.jpg`), Salency screenshot, Bramley and Closing Time videos (`media/`), portrait (`img/howard.jpg`).
- Public repos: github.com/howardhwt/outbound-gates, Bramley.
- Recent LinkedIn writing linked from About.
- Absent, must not be fabricated: testimonials or references, employer logos used as endorsements, customer names from Viggle deals, quota attainment figures beyond those on the site.

## Product Principles

1. Proof before claims: every assertion about skill is backed by a built artifact, a number with its definition, or a link.
2. Seller first, builder second: the systems are framed by the selling problem they solved, not as engineering for its own sake.
3. Honest edges: what broke and what is unverified stay visible; credibility with founders depends on it.
4. Respect a busy reader: the home page makes the case in one scan; depth lives one click away.
5. The path to a conversation is always short and obvious.

## Accessibility & Inclusion

Established in the codebase: skip link and main landmark on every page, 44px minimum hit areas, visible focus, reduced-motion and no-script fallbacks, content readable when printed.
