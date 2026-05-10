# Punch List — ACOCI Website Rebuild

Living record of decisions, success criteria, failure conditions, and deferred items. Read this before touching anything.

For "what to do next" in priority order, see [`../NEXT.md`](../NEXT.md).

Last updated: 2026-05-10 (session-end)

---

## Current State

Static design iterations live in [`../design-space/`](../design-space/). The active iteration is `home/`, which now has a complete homepage (9 sections built and committed individually) and four pillar landing pages (Membership, News & Events, Resources, Your Chamber). Repo is initialized; baseline at commit `35e6c37`. Shared `sections.css` system introduced 2026-05-10 — Section 2 migrated as proof; the rest still need migration (see Deferred Items). WordPress Docker stack is running but the installer hasn't been run; theme stub is unactivated.

---

## Active Decisions

- **WordPress as CMS, custom theme.** Decision: permanent for this build. The chamber needs editorial autonomy for events, members, and news.
- **Hybrid theme approach (classic + ACF).** Decision: current phase. Block themes considered but ACF is more pragmatic given the editorial structures needed. Revisit if WP block theming matures and ACF licensing becomes a friction point.
- **Two-layer token system (Layer 1 brand primitives, Layer 2 semantic roles).** Decision: permanent. Same engine used across ACOCI, Colombo Group, Seabird Villa.
- **Canonical brand colors sampled from `ACOCI_LOGO_HORIZ-CLR.svg`.** Decision: permanent. The logo is the source of truth, not a separately-curated palette.
- **Sunset orange (`#F69F3E`) owns primary CTAs. Teal does not.** Decision: 2026-05-09, supersedes prior "teal owns CTAs" rule. Sunset is the *only* place that color appears on the site — it's the action signal. Everything else is teal/green/blue. Brand guide v4.1 must be updated to reflect this.
- **Dark ink (`#131A22`) is rejected as a base dark color.** Decision: 2026-05-09. Replaced by the teal→blue→navy Mission gradient (reference: v1's "Our Mission" and "Join ACOCI" sections). Footer uses the same Mission gradient — not a separate deep-navy treatment. The cta-clone-test deep-navy footer was *not* the direction.
- **Palette character: v1's soft teal range.** Decision: 2026-05-09 (corrected). Earlier "lean blue" note was misread as deep navy — it is not. The blue character we want is what v1's original style guide had: soft teal/aqua tints, not a navy palette. Sail blue stays in its links/info role. Deep navy only appears inside the Mission gradient (which is also the Footer treatment), not as a standalone surface.
- **Aqua tints — both kept.** `--brand-aqua-soft` (`#E8F6F4`) for hairlines/soft tints, `--brand-aqua` (`#D4EEE9`) for section backgrounds. Decision: permanent.
- **Cream surface dropped.** Decision: 2026-05-09. The cream `#FAFAF8` tint is removed. Page background is white; soft section breaks use the aqua tints, not cream.
- **Buttons are rectangular, not capsules.** Decision: 2026-05-09. Soft corner radius (radius-sm) — not pill-shaped.
- **Mission gradient is the canonical dark surface.** Decision: 2026-05-09. The teal→blue→navy `--gradient-mission` is also what the Footer uses. There is no separate deep-blue/navy footer gradient.
- **`design-space/home/` is the new homepage source of truth.** Decision: 2026-05-09. Built from v1/v2 sections per the canonical list in NEXT.md. v4 stays as the brand-guide reference but is no longer the homepage iteration. Reasoning: v2–v4 absorbed too much generic "AI design" input; v1 was 80% of the way there and is the better tonal starting point.
- **Use only LO and SVG logo variants on web; never HI; never DRK.** Decision: permanent. HI is print-grade (too heavy); the WHT lockup handles dark backgrounds.
- **Design-space v1–v3 kept as historical iterations.** Decision: current phase. Archive only when v4 is fully ported into WordPress and locked.
- **Third-party WordPress plugins not committed.** Decision: permanent. Installed via wp-admin. Only theme code and mu-plugins are versioned.
- **CSS architecture: shared section system, never per-section bespoke classes.** Decision: 2026-05-10, permanent. All sections use `.section` / `.section__head` / `.section__title` / `.section__split` / `.section__copy` defined once in `design-space/home/assets/css/sections.css`. No `.about__copy`, `.president__eyebrow`, `.members__item`, etc. Reusable patterns get pattern-named classes (`.events-accordion`, `.featured-card`), never section-named ones. Title is a class, not a tag. Eyebrow is one class. See CLAUDE.md "CSS architecture" rule for the full constraint set, and the autonomous-run section migration plan in NEXT.md.
- **Pillar colors (provisional, picked 2026-05-10).** Membership = Crocus Bay (`--brand-teal-deep` / `#0E8B85`). News & Events = Trade Winds (Mission gradient). Resources = Prickly Pear (`--brand-sail` / `#48A8E0`). Your Chamber = Sombrero (`--brand-blue-deep` / `#003B73`). All trace to existing brand tokens — no new colors. Tokens at the bottom of `design-space/home/assets/css/variables.css` Layer 2. Easy swap if the user wants different picks after visual review.
- **Repo initialized.** Decision: 2026-05-10. `git init && git branch -m main` run, baseline committed at `35e6c37`. All design-space + WordPress theme stub + mu-plugins + references + Docker config under version control. `.env`, `.gstack/`, and `wordpress/wp-content/` ignored.

---

## Success Criteria

<!-- TO DO: client-facing success criteria not yet captured. Examples to populate: launch date, member directory live, events calendar functional, ACF blocks editable by ACOCI staff without dev help. -->

---

## Failure Conditions

<!-- TO DO: not yet captured. -->

---

## Deferred Items

### Section CSS migration

**What:** Sections 3–9 of the homepage and all four pillar pages still carry per-section bespoke CSS (`.president__copy`, `.members__item`, `.news__featured`, `.events__row`, `.decision__card`, `.join__card`, etc.). The shared `sections.css` system is built and Section 2 (About) is migrated as proof.

**Why deferred (briefly):** session-end. Migration is mechanical but each section needs a screenshot before/after to confirm visual parity, so it's per-commit work rather than a single sweep.

**When to address:** **Immediate** — first task of next session, before any further design work. Per CLAUDE.md "CSS architecture" rule, leaving the bespoke classes in place is a maintenance trap.

**Files:** [`design-space/home/index.html`](../design-space/home/index.html), [`design-space/home/membership.html`](../design-space/home/membership.html), [`design-space/home/news-events.html`](../design-space/home/news-events.html), [`design-space/home/resources.html`](../design-space/home/resources.html), [`design-space/home/your-chamber.html`](../design-space/home/your-chamber.html), [`design-space/home/assets/css/styles.css`](../design-space/home/assets/css/styles.css), [`design-space/home/assets/css/sections.css`](../design-space/home/assets/css/sections.css)

---

### Uncommitted out-of-session work to triage

**What:** Three uncommitted changes on disk at session-end that are NOT from the autonomous build run: `design-space/home/clips.html` (modified, ~3700 inserts / ~2200 deletes), `design-space/home/sample-membership.html` (new, 564 lines), `references/live-site-audit/2026-05-10/` (new directory).

**Why deferred:** unknown provenance. Substantial work that doesn't trace to a session commit message.

**When to address:** Before continuing the section migration. Read each, decide with the user whether to keep, revise, or revert.

**Files:** as listed above

---

### WordPress installer

**What:** WP installer at http://localhost:8090 has not been run; database is empty.

**Why deferred:** No reason to install until the v4 static design is locked and ready to port. Running the installer now would just create stale defaults to clean up later.

**When to address:** When v4 design is finalized and theming begins.

**Files:** N/A (Docker volume `acoci_wordpress_data`)

---

### Theme port from v4 → WordPress

**What:** None of the v4 HTML/CSS has been ported into `wordpress/themes/acoci-theme/`. The theme is currently a stub.

**Why deferred:** Static design still being finetuned. Porting prematurely would mean re-porting after every design change.

**When to address:** Once v4 is locked (currently iterating on remaining page templates beyond the homepage and brand guide).

**Files:** [`wordpress/themes/acoci-theme/`](../wordpress/themes/acoci-theme/), [`design-space/v4/`](../design-space/v4/)

---

### `references/mirror/` is empty

**What:** The `references/mirror/` directory exists but is empty. The original site clone is not actually present.

**Why deferred:** It was empty when migrated from `website-clones/`. Whether to re-fetch the live site mirror is unclear.

**When to address:** If mirror content is needed for IA/content reference. Otherwise, consider removing the empty directory.

**Files:** [`references/mirror/`](../references/mirror/)

---

## Open Questions

### Clip 10 watermark treatment — contained vs. oversized?

The "Become a Member" CTA in [`design-space/home/clips.html`](../design-space/home/clips.html) is currently rendered as **two variants** stacked on the page so they can be compared in context:
- **Variant A — contained**: ACOCI icon mark sits fully inside the rounded card with margin top and bottom. Reads as a discrete graphic element.
- **Variant B — oversized & clipped**: mark scaled up well beyond the card; arc text ("ANGUILLA / CHAMBER") bleeds off top and bottom. Reads as bold texture.

Both share the same gradient, typography, and button system. The CTA needs to land on one before the section is promoted to the homepage.

### Should v1–v3 be archived now or kept inline?

They're useful as design history but they bloat the repo root. Options: (a) keep at `design-space/v1/...v4/` as-is; (b) move v1–v3 into `design-space/_archive/` once v4 is locked; (c) zip and remove. Currently option (a) — kept inline.

### Final scope of WordPress content types

Members, events, blog/news, offers, team — all visible in the original sitemap structure under `references/sitemaps/`. Whether all five are needed at launch (vs. phased) hasn't been decided.

### Hosting / deployment target

Where does the finished site go? Decision affects build steps (e.g., whether to set up a deploy pipeline, what the staging URL is, whether DB exports need to be portable).

---

## Out of Scope (Current Phase)

- WordPress theming (waits for v4 lock)
- Real content migration (waits for theme)
- Deploy / hosting configuration
- Anything in `wordpress/themes/acoci-theme/` beyond the existing stub
- Modifying historical design iterations (v1–v3)
- Modifying `references/` content
