# CLAUDE.md — ACOCI Website Rebuild

This is the canonical project instruction file. Every Claude Code session reads this automatically. Other agents read [`AGENTS.md`](./AGENTS.md), which redirects here.

**Convention version:** project-continuity v0.2

---

## Before You Start Anything

1. **Read [`NEXT.md`](./NEXT.md)** — current state of play (in-flight, immediate priorities, live calendar).
2. **Read [`docs/PUNCH_LIST.md`](./docs/PUNCH_LIST.md)** — Active Decisions, Success Criteria, Failure Conditions, Deferred Items, Open Questions.
3. **Check git log** — `git log --oneline -20` and `git status --short` to see recent work. (Note: repo not yet initialized — see PUNCH_LIST.)
4. **Understand what this project is** — read the Project Overview below before touching anything.

---

## Before You Finish a Session

1. **Commit all work** — follow [`.agents/workflows/git.md`](./.agents/workflows/git.md). Commit after every logical change, not at the end.
2. **Update `NEXT.md`** if you started/finished in-flight work, identified a new priority, hit a calendar date, or completed an item.
3. **Update `docs/PUNCH_LIST.md`** if you left anything unimplemented, deferred something, completed an item, or surfaced a new gap/criterion.
4. **Update `CLAUDE.md`** if you changed project structure, added conventions, or changed how something fundamental works.
5. **Return a session summary** in the format defined in [`AGENTS.md`](./AGENTS.md).

---

## Project Overview

ACOCI is the **Anguilla Chamber of Commerce & Industry**. This project is a full website rebuild for them on WordPress with a custom theme. The audience is Anguilla businesses (members and prospects), residents, visitors, and government/regional partners. The current live site is being replaced; the cloned reference (mirror + sitemaps) lives in [`references/`](./references/).

**Current state:** Actively being built — design phase. Static design iterations live in [`design-space/v1`–`v4/`](./design-space/), currently finetuning v4. The WordPress Docker stack is running locally but the WP installer hasn't been run; theme stub exists but isn't activated. No HTML/CSS has been ported into the WP theme yet. See `NEXT.md` for live priorities.

---

## Stack

| Layer | Choice |
|---|---|
| CMS | WordPress (Docker, bind-mounted theme + mu-plugins) |
| Theme approach | Hybrid (classic + ACF for editable sections) |
| Database | MySQL (Docker volume `acoci_db_data`) |
| Local URLs | http://localhost:8090 (WP), http://localhost:8091 (phpMyAdmin) |
| Static design fonts | Bricolage Grotesque (headings), Hanken Grotesk (body) |
| Static design CSS | Two-layer token system (variables.css + styles.css), v3.2 fluid engine |
| Logo source | Canonical SVGs in [`wordpress/themes/acoci-theme/assets/img/logo/`](./wordpress/themes/acoci-theme/assets/img/logo/) and [`design-space/v4/assets/images/logo/`](./design-space/v4/assets/images/logo/) |
| Static preview server | http://localhost:8768/ (serves `design-space/home/`) |

---

## Key Rules

> The cross-project "how I work" rules live in `~/.claude/CLAUDE.md` ("How I work" section) — token-system discipline, screenshot-before-done, no AI-design patterns, etc. Those apply here too. Project-specific rules below.

### Design tokens
- Use the two-layer token system in [`design-space/v4/assets/css/variables.css`](./design-space/v4/assets/css/variables.css). Layer 1 is brand primitives (`--brand-*`), Layer 2 is semantic roles (`--color-*`). Components reference Layer 2 only.
- All teal/aqua/sail/sun values are sampled from `ACOCI_LOGO_HORIZ-CLR.svg`. **Do not redefine them off the cuff.** Canonical hexes: teal `#41BBB3`, aqua-mid `#67CCD3`, aqua-light `#9DDEDB`, aqua-soft `#E8F6F4`, sail `#48A8E0`, sun `#F69F3E`.
- **Sunset orange (`#F69F3E`) owns primary CTAs.** It is the *only* place that color appears on the site — it's the action signal. Everything else is teal/green/blue.
- **Palette leans teal + blue, not just teal.** Sail blue's role is broader than links/info; bring more of the blue end (sail, deeper navy) into the system.
- **No flat dark ink.** The `#131A22` color is rejected. Dark surfaces use a teal→blue→navy gradient family instead (reference: v1's "Our Mission" / "Join ACOCI" gradients, and the `cta-clone-test` footer gradient `#003B73 → #002244`). See PUNCH_LIST for full decision.
- **Don't default to "color text on softer-tint background" patterns.** No capsule eyebrows (use plain uppercase text in a single consistent color), no dark-icon-on-soft-tint-square icon boxes. These read as generic AI design.

### CSS architecture — shared section system, never per-section bespoke

This rule is non-negotiable per a 2026-05-10 correction. See full details in [`memory/feedback_css_section_pattern.md`](/home/user/.claude/projects/-home-user-projects-wordpress-builds-acoci/memory/feedback_css_section_pattern.md).

- **All page sections share `.section` / `.section__inner` / `.section__head` / `.section__title` / `.section__split` / `.section__copy` / `.section__media`** — defined once in [`design-space/home/assets/css/sections.css`](./design-space/home/assets/css/sections.css). One place to change site-wide section structure, padding, headings, and split layouts.
- **Never write per-section classes** like `.about__copy`, `.president__eyebrow`, `.members__item`, `.events__row`, `.news__featured`, `.decision__card`, `.join__card`. They are a maintenance trap — they mean every site-wide change becomes a grep across N files.
- **Title is a class, not a tag.** Use `<h2 class="section__title">`, not bare `h2 { font-size: ... }`. Heading level lives in markup; size lives in class.
- **Never style with bare element selectors inside a section** (`.section__copy p { ... }` will bleed into eyebrows and meta paragraphs). Always target explicit sub-classes (`.section__copy-lede`, `.section__lede`).
- **Eyebrow is one class.** `.eyebrow` works on every surface — there is no `.about__eyebrow`, `.president__eyebrow`, etc. Surface-aware variants use the existing `.on-dark .eyebrow` modifier or `.eyebrow--on-dark`.
- **Margin-bottom on flex children is wrong.** Let the parent's `gap` handle spacing.
- **Reusable patterns get pattern-named classes**, not section-named ones. Events accordion → `.events-accordion` (not `.events__row`). News featured-card → `.featured-card`. Triangle composition → `.tri-figure`.

**Migration status as of 2026-05-10:** Section 2 (About) is the proof-of-pattern, fully migrated. Sections 3–9 of homepage + all 4 pillar pages still carry the old bespoke classes — **next agent must continue this migration** before any further design work. See NEXT.md for the migration recipe.

### Logo assets
- Use SVG everywhere on the web. LO PNGs are bundled as legacy fallbacks only.
- Never use `-DRK` variants — they're redundant. Never use the `HI/` versions from the brand kit — too heavy for web.
- Source brand kit (Windows): `D:\Documents\Cabarita Content\Design\ACOCI\#Branding\Design\Logo\FINAL\WEB\`. Mounted in WSL at `/mnt/d/...`.

### Workspace structure
- Static design lives in `design-space/v[1-4]/` plus `design-space/home/` (the active homepage iteration as of 2026-05-09). v1–v4 are kept as design history — **do not delete or "tidy up"** without an explicit ask.
- v1 is the tonal reference (gradients, palette ambition, section confidence). v4 is the brand-guide reference. v2/v3 are historical only.
- WordPress code lives in `wordpress/themes/acoci-theme/` and `wordpress/mu-plugins/`. These are bind-mounted into the container.
- Reference material (the original site's mirror + sitemaps) lives in `references/`. **Read-only** — used to inform IA and content choices.

### Git
- Repo **initialized 2026-05-10**, baseline committed (commit `35e6c37`). All work since lives on `main`.
- Commit after every logical change. Format: `Component/Feature: Brief description`. Full protocol in [`.agents/workflows/git.md`](./.agents/workflows/git.md).
- Third-party WordPress plugins are installed via wp-admin and **not committed**. Custom theme code and mu-plugins go in git.
- `.gitignore` covers `.env`, `.gstack/`, OS cruft, and `wordpress/wp-content/`.

---

## Project Structure

```
.
├── NEXT.md                    # current state of play (read first)
├── CLAUDE.md                  # this file
├── AGENTS.md                  # session protocol for non-Claude agents
├── GEMINI.md                  # Gemini redirect
├── docs/
│   └── PUNCH_LIST.md          # decisions, deferred items, open questions
├── .agents/
│   └── workflows/
│       └── git.md             # commit protocol
├── design-space/              # static design iterations
│   ├── v1/                    # earliest iteration (history)
│   ├── v2/                    # (history)
│   ├── v3/                    # (history)
│   └── v4/                    # active iteration — homepage + brand guide
│       └── assets/
│           ├── css/           # variables.css (tokens) + styles.css
│           └── images/logo/   # canonical SVG + LO PNG
├── references/                # original site material (read-only)
│   ├── mirror/                # currently empty
│   └── sitemaps/              # XML sitemaps from live site
└── wordpress/                 # WordPress files (bind-mounted into Docker)
    ├── themes/acoci-theme/    # custom theme — stub, not yet ported from v4
    └── mu-plugins/            # must-use plugins
```

---

## Docs Index

| Document | Purpose |
|---|---|
| [`NEXT.md`](./NEXT.md) | Current state of play — **read first every session** |
| [`docs/PUNCH_LIST.md`](./docs/PUNCH_LIST.md) | Decisions, success criteria, failure conditions, deferred items — **read second every session** |
| [`AGENTS.md`](./AGENTS.md) | Session protocol for non-Claude agents (Codex, Cursor, etc.) |
| [`.agents/workflows/git.md`](./.agents/workflows/git.md) | Commit conventions |
| [`design-space/v4/brand-guide.html`](./design-space/v4/brand-guide.html) | Visual brand guide — **partially refreshed 2026-05-10**. Header, footer, dark surfaces, color section, and ratio bar now reflect the gradient-family decision (replaces flat ink). Still pending: sunset CTA treatment, button system audit, hero patterns from `home/`. Will be fully rebuilt against `home/` once homepage sections are locked. |

---

## Out of Scope (Current Phase)

- Anything in `wordpress/themes/acoci-theme/` beyond the stub — porting waits until v4 design is locked.
- Modifying `references/` content — it's an archival snapshot of the original site.
- Modifying `design-space/v1`–`v3/` — historical iterations, kept for reference.
- Anything in `docs/PUNCH_LIST.md` marked Deferred.
