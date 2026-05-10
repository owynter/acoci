# NEXT — ACOCI Website Rebuild

**The human-and-agent-readable surface for "what's happening right now."** Read this first when opening the repo cold.

For the structured archive of decisions and deferred items, see [docs/PUNCH_LIST.md](./docs/PUNCH_LIST.md).
For agent operating instructions, see [CLAUDE.md](./CLAUDE.md).

Last updated: 2026-05-10 (autonomous run) — Homepage assembled (all 9 canonical sections built and committed), four pillar landing pages built (Membership, News & Events, Resources, Your Chamber), git initialized with v0 baseline, pillar color tokens assigned (provisional, awaiting review).

---

## In Flight

Currently active work that needs to be finished or handed off.

- **Pillar colors are provisional.** Picks committed to [variables.css](./design-space/home/assets/css/variables.css) on 2026-05-10:
  - Membership → Crocus Bay (teal-deep `#0E8B85`)
  - News & Events → Trade Winds (Mission gradient)
  - Resources → Prickly Pear (sail `#48A8E0`)
  - Your Chamber → Sombrero (deep navy `#003B73`)
  - These render in [membership.html](./design-space/home/membership.html), [news-events.html](./design-space/home/news-events.html), [resources.html](./design-space/home/resources.html), and [your-chamber.html](./design-space/home/your-chamber.html). React via [pillars.html](./design-space/home/pillars.html) (the candidate library). Easy swap: change the four `--pillar-*` token values; all pillar pages update.

- **v4 brand guide** at [design-space/v4/brand-guide.html](./design-space/v4/brand-guide.html) was **partially refreshed 2026-05-10**: dark surfaces (header, footer, dark sections) now use the Mission gradient instead of flat ink, and the color section reflects the new hierarchy. Still pending against current rules: sunset CTA treatment, button system audit, hero patterns from `home/`, pillar color documentation.

---

## Immediate Priorities (next session)

The 1-3 things that should happen next, in priority order.

1. **Review the homepage and four pillar landings** at http://localhost:8768/ (homepage), /membership.html, /news-events.html, /resources.html, /your-chamber.html. Tweak copy, swap photos, react to pillar color picks.
2. **Sub-page templates** — each pillar links to ~4-5 sub-pages (per anguillachamber.com IA). Templates needed: single member profile, member directory listing, single news article (Clip 08 already exists), single event detail (Clips 05/06 exist), about-us, our-team, committees, training listing, etc. Most can reuse Clip 07/08 hero patterns + the section patterns already built for the homepage.
3. **Rebuild brand guide against `home/`** — deferred until pillar colors are confirmed and the button system audit is done. The v4 brand guide was partially refreshed 2026-05-10; a full rebuild documents pillar colors, hero patterns (Clips 07-11), and the consolidated button system.

### Canonical homepage sections (built 2026-05-10)

In order. All 9 sections built, screenshot-validated, committed individually. See `git log --oneline | grep Homepage/` for the per-section commit history.

| # | Section | Source | Status |
|---|---|---|---|
| 1 | Hero | v4 (refine) | ✅ Photo + Quick Links overlay + sunken copy + load animations |
| 2 | About | v4 | ✅ Aqua surface, copy left, triangle composition right |
| 3 | News | v2 + tighten | ✅ Featured story left, compact list right, separate from Events |
| 4 | President's Note | v2 | ✅ aqua-soft surface, portrait left, quote right, gentle radius, no shadow |
| 5 | Decision Section | v1 | ✅ 4-card grid, triangle marks, links to canonical pillar URLs |
| 6 | Members | v4 ("What membership unlocks") | ✅ Landscape photo + asterisk-bullet list (replaced v4's icon-in-square) |
| 7 | Events | v1 + v2 hybrid | ✅ Accordion + circle date bubble with thick semi-transparent outline |
| 8 | Join / CTA | v1 (uses Clip 10) | ✅ Contained Mission gradient card, overlaps footer, white watermark |
| 9 | Footer | v4 (refine) | ✅ Mission gradient, wave at top matches hero (inverted), 4-column |

### Design system corrections to apply across the rebuild

- **Primary CTA color = sun/sunset orange (`#F69F3E`).** This supersedes the earlier "teal owns CTAs, sun is sparing accent" rule. Sunset is now the *only* place that color appears — everything else is teal/green. Brand guide v4.1 must be updated.
- **Lean blue, not just teal.** Bring more of the blue end of the spectrum into the palette. The dark blue background used in v1's events section is a good reference. Sail blue role expands beyond just links/info.
- **Kill the dark ink (`#131A22`).** Non-starter as a base dark. Replace all uses with the **gradient direction** seen in v1's "Our Mission" and "Join ACOCI" sections, plus the cta-clone-test footer gradient (`#00A896 → #0074B7 → #003B73`). We want a teal→blue→navy gradient family for dark surfaces.
- **Footer gets a gradient, not a flat dark.** Test variants based on the cta-clone-test experiments at `/home/user/projects/website-clones/cta-clone-test/` (`.main-site-footer` uses `linear-gradient(to right, #003B73 0%, #002244 100%)`).
- **Buttons must be consistent.** Single unified button system from the brand guide applied everywhere. Primary = sunset.
- **Eyebrows stay — but as plain text, not capsules.** Drop the "dark text on softer-tint background" pill styling. Use small uppercase plain text in a single consistent color across the page.
- **Same rule for icons.** Avoid the dark-icon-on-soft-tint-square pattern. Stronger, more opinionated icon treatments.
- **Typography needs another pass** — inconsistent treatment in places.

### Design philosophy (project-level)

- **v1 was 80% of the way there.** v2–v4 absorbed too much generic "AI design" input and fell into tropes we are now backing out of. When in doubt, look to v1 for tone — particularly the gradients, the palette ambition, and the section confidence.
- **The new homepage iteration `design-space/home/` should feel like v1's design DNA**, refined with the brand guide v4.1 logo palette and the corrections above — *not* like a continuation of v4.

### Pending input

- **Marketing manager's assessment** of the current live site — improvements they want incorporated into the rebuild. User will share; capture into PUNCH_LIST when received.

---

## Live Calendar (deadlines, gates, milestones)

<!-- TO DO: no time-sensitive items captured yet. Add deadlines/milestones here as they're set. -->

---

## Within 2 Weeks

- Finalize remaining v4 page templates (interior pages, member directory, news/blog, events).
- Decide on WordPress theming approach in detail (block theme vs. classic + ACF — currently leaning hybrid + ACF per memory).
- Run the WordPress installer at http://localhost:8090 and activate the theme stub.

---

## Within 6 Weeks

- Port finalized v4 design into the `acoci-theme/` WordPress theme.
- Build out ACF section structures for editable content blocks.
- Stand up content scaffolding (sample pages, members, events) for client review.

---

## Recently Completed

Most recent first. Truncate to the last 10-15 items.

- **2026-05-10 (autonomous run)** — **Four pillar landing pages built**: [membership.html](./design-space/home/membership.html) (Crocus Bay teal-deep), [news-events.html](./design-space/home/news-events.html) (Trade Winds Mission gradient), [resources.html](./design-space/home/resources.html) (Prickly Pear sail), [your-chamber.html](./design-space/home/your-chamber.html) (Sombrero deep navy). Each: pillar hero with image + Quick Links overlay (per-pillar wave fill matches band color), pintro 720px prose column, sub-page card grid (auto-fit grid, triangle marks in pillar color), pillar feature CTA. Shared via [pillars.css](./design-space/home/assets/css/pillars.css) and per-pillar `body` class injecting tokens.
- **2026-05-10 (autonomous run)** — **Pillar color tokens added** to [variables.css](./design-space/home/assets/css/variables.css): `--pillar-membership` / `--pillar-news-events` / `--pillar-resources` / `--pillar-your-chamber`, each paired with a `--*-wave` token. All values trace to existing brand tokens — no new colors. Provisional pending visual review of the rendered pillar pages.
- **2026-05-10 (autonomous run)** — **Homepage assembled**: all 9 canonical sections built, screenshot-validated, individually committed (one per section, see git log). Sections 2-9: About (aqua + triangle composition), News (featured + compact list), President's Note (portrait + quote on aqua-soft), Decision (4-card grid with triangle marks), Members ('What membership unlocks' with landscape photo + asterisk bullets), Events (accordion with circle date bubble), Join/CTA (contained Mission gradient card overlapping footer), Footer (Mission gradient with inverted hero wave at top, 4-column).
- **2026-05-10 (autonomous run)** — **Git initialized**, v0 baseline committed (137 files, 15,370 insertions). `.gitignore` covers `.env`, `.gstack/`, OS cruft, and `wordpress/wp-content` (third-party plugins not committed). Subsequent work all on `main` with `Component/Feature: Brief description` commit format per `.agents/workflows/git.md`.
- **2026-05-10** — Clip 10 added at [design-space/home/clips.html](./design-space/home/clips.html): "Become a Member" CTA, contained rounded card on the Mission gradient with the ACOCI icon as a white watermark. Two variants live for comparison — A: logo fully contained and centered (max-height = 25× base spacing); B: logo deliberately oversized and clipped, arc text bleeding off top/bottom. Card min-height = 28× base spacing.
- **2026-05-10** — Clip 08 (article post template) tuned: featured image now hits exactly 1280px (container = `80rem + 2× --space-lg`), gap added between subtitle and image (`--article-image-gap: var(--space-lg)`, image no longer pulls up over the wave), body background swapped from `--color-surface-aqua-soft` to `--color-surface-page` (white). Wave fill follows the body, also white.
- **2026-05-10** — v4 brand guide partially refreshed: dark surfaces (header, footer, dark logo stage, dark sample row, footer-mini, ratio bar) swapped from flat ink (`#131A22`) to the Mission gradient (`#41BBB3 → #0074B7 → #003B73`). Color section restructured: ink reframed as body-text-only, ink-deep + cream chips removed, Mission Gradient added as a swatch. Ratio bar lede updated to drop "cream" mention.
- **2026-05-10** — Pillar palette exploration created at [design-space/home/pillars.html](./design-space/home/pillars.html): 8 candidate hero colors named for Anguillian places (Rendezvous, Shoal Bay, Meads Bay, Crocus Bay, Prickly Pear, The Valley, Sombrero, Trade Winds), each rendered as a hero band + wave + sample title. All traceable to brand-guide tokens. Awaiting selection of 4 pillar colors (Membership, News & Events, Resources, Your Chamber).
- **2026-05-10** — Clip library expanded to 9 entries at [design-space/home/clips.html](./design-space/home/clips.html): membership benefits (01), 3-module composite (02), mega menu (03), news archive (04), event detail with wave/card (05), event detail with geometric hero (06), hero variants library (07), article post template (08), triangle decoration on heroes (09). Established the wave/overlap geometry system (`--c7hero-wave-h`, `--c7hero-overlap`) shared across all hero patterns.
- **2026-05-09** — Brand guide v4.1 rebuilt: canonical palette sampled from logo SVG, sail blue (`#48A8E0`) given a defined role (links/info), all logo lockups (horizontal/vertical/icon × CLR/WHT) shown across appropriate backgrounds.
- **2026-05-09** — Design-space (v1–v4) and references (sitemaps, mirror) moved from `website-clones/` into this repo. Empty source folder removed.
- **2026-05-09** — ACOCI logo asset set deployed: 12 files (6 SVG + 6 LO PNG) in both WordPress theme and design-space v4. No DRK or HI variants.
- **2026-03-18** — Docker stack created and running (WordPress on :8090, phpMyAdmin on :8091).

---

## How to use this file

- **Opening this repo cold:** Read this file. Then `docs/PUNCH_LIST.md` for the full list of decisions and deferred items. Then `CLAUDE.md` if you're an AI agent.
- **Completing a milestone:** Move the item from "In Flight" or "Immediate Priorities" to "Recently Completed" with the date and outcome. Promote the next priority into the active position.
- **A milestone surfaces a new sub-task:** Add it to the relevant section.
- **Time-sensitive item appears or shifts:** Add or update it in the Live Calendar.
- **A deeper structural change:** Update `CLAUDE.md` and `docs/PUNCH_LIST.md` first, then reflect the new plan here.

This file is the Monday-morning surface. PUNCH_LIST.md is the structured archive. CLAUDE.md is the deep operational layer.
