# CLAUDE.md — ACOCI homepage redesign (static draft)

This is the canonical project instruction file. Every Claude Code session reads this automatically. Other agents read [`AGENTS.md`](./AGENTS.md), which redirects here.

**Convention version:** project-continuity v0.2

---

## Before You Start Anything

1. **Read [`NEXT.md`](./NEXT.md)** — current state of play (in-flight, immediate priorities, live calendar).
2. **Read [`docs/PUNCH_LIST.md`](./docs/PUNCH_LIST.md)** — Active Decisions, Success Criteria, Failure Conditions, Deferred Items, Open Questions.
3. **Check git log** — `git log --oneline -20` and `git status --short` (if this folder is a git repo yet — see Project Overview).
4. **Understand what this project is** — read the Project Overview below before touching anything.

---

## Before You Finish a Session

1. **Commit all work** — follow [`.agents/workflows/git.md`](./.agents/workflows/git.md). Commit after every logical change, not at the end. (Note: this folder is not yet a git repo. See PUNCH_LIST → Open Questions.)
2. **Update `NEXT.md`** if you started/finished in-flight work, identified a new immediate priority, hit or set a date, or completed an item.
3. **Update `docs/PUNCH_LIST.md`** if you left anything unimplemented, deferred something, completed an item, found a new gap, or surfaced a new success criterion or failure condition.
4. **Update `CLAUDE.md`** if project structure or conventions changed.
5. **Return a session summary** in the format defined in [`AGENTS.md`](./AGENTS.md).

---

## Project Overview

ACOCI (Anguilla Chamber of Commerce & Industry) is a non-profit member organisation representing licensed businesses in Anguilla. This project is a redesign of `anguillachamber.com`. The current live site runs on Hello Elementor + Elementor Pro + JetEngine; we are replacing it with a custom WordPress theme.

This folder (`_design/`) is the **static HTML/CSS/JS draft** of the new homepage — a fast iteration surface before any WordPress code is written. Layout was adapted from the Kettering Health old-layout (decision cards + events accordion + news carousel), restyled with ACOCI brand. HFTP.org was reviewed for member-org structural cues.

**Current state:** Static homepage draft v1 built 2026-05-07. Awaiting user design review. WordPress theme work (in `/home/user/projects/#wordpress-builds/acoci/wordpress/themes/acoci-theme/`) starts after the design is approved.

**Continuity files temporarily live here.** They should migrate to `/home/user/projects/#wordpress-builds/acoci/` once that directory's permissions are fixed (currently root-owned). See `NEXT.md` priority 2.

---

## Stack

| Layer | Choice |
|---|---|
| This folder (design draft) | Static HTML + CSS + vanilla JS. No build step. |
| Typography | Hanken Grotesk (Google Fonts) — heading + body. May change. |
| Eventual target | WordPress 6.x custom theme (`acoci-theme`), running in Docker (Compose project `acoci`, web on :8090, phpMyAdmin on :8091, MariaDB 10.11). |
| Editable content | ACF (Advanced Custom Fields) — to be added in the WP phase. Not used in this static draft. |
| Member data migration | Export from live site → ACF import. ~188 members, ~29 events. |

---

## Key Rules

### Brand
- Palette tokens are at the top of `assets/css/styles.css`. **Do not hardcode colors elsewhere** — extend the token set and reference variables.
- Logo and hero photo are in `assets/images/`. The hero (`acoci-hero.jpg`) is a real ACOCI event photo pulled from the live site. Replace once a better photo is sourced.
- **No COVID-era content.** Mask photos, "visitor restrictions" copy, etc. were intentionally excluded.

### Typography
- Hanken Grotesk is loaded via Google Fonts in `index.html`. To swap, change the `<link href=...>` and the `font-family` declaration in `body`. Treat as a single change.

### Content
- Event copy on the homepage uses **plausible-but-static** content (Starry Night Gala, Members' Mixer, Cybersecurity workshop, AGM). Not real upcoming events. To be replaced when the calendar is wired in WP.
- News card thumbnails are colored gradients, not real article photography. To be replaced.

### Code patterns
- HTML uses BEM-ish class names (`hero__title`, `event-item__head`).
- CSS sections are commented and grouped (`/* ===== Hero ===== */`). Keep that grouping.
- JS is a single IIFE in `assets/js/app.js`. Add features as named functions inside that IIFE; don't ship a module bundler for static draft work.

### What NOT to build in this folder
- WordPress theme code, ACF field groups, PHP — those go in `/home/user/projects/#wordpress-builds/acoci/wordpress/themes/acoci-theme/` once approved.
- A build step (Vite, esbuild, etc.) — this is intentionally zero-dependency static.
- Member directory data, event data — out of scope for this draft. The "Find a Member" decision card just links to a TBD directory page.

---

## Project Structure

```
_design/
  index.html            # complete homepage markup (single page)
  README.md             # how-to-run + section overview
  NEXT.md               # state of play
  CLAUDE.md             # this file
  AGENTS.md             # session protocol redirect for non-Claude agents
  GEMINI.md             # redirect for Gemini
  docs/
    PUNCH_LIST.md       # decisions, criteria, deferred items
  .agents/workflows/
    git.md              # commit protocol
  assets/
    css/styles.css      # all styles, tokens at top
    js/app.js           # accordion + carousel + smooth-scroll
    images/             # logo, hero photo

# Eventual project root (currently unwritable):
/home/user/projects/#wordpress-builds/acoci/
  wordpress/
    themes/acoci-theme/ # PHP theme stub (currently empty)
    mu-plugins/         # mu-plugins (currently empty)
```

---

## Docs Index

| Document | Purpose |
|---|---|
| [`NEXT.md`](./NEXT.md) | Current state of play — **read first every session** |
| [`docs/PUNCH_LIST.md`](./docs/PUNCH_LIST.md) | Decisions, criteria, deferred items — **read second every session** |
| [`README.md`](./README.md) | How to run the static design + section overview |
| [`AGENTS.md`](./AGENTS.md) | Session protocol for non-Claude agents |
| [`.agents/workflows/git.md`](./.agents/workflows/git.md) | Commit conventions |
| Live site reference | `../mirror/` (anguillachamber.com mirror) and `../sitemaps/` |
| Layout reference | `/home/user/projects/website-clones/ketteringhealth.org-clone/old-layout/` |
| Member-org structure ref | `/home/user/projects/website-clones/hftp.org-clone/mirror/www.hftp.org/` |

---

## Out of Scope (Current Phase)

- WordPress theme PHP / template files
- ACF field groups
- Member directory listing UI
- Single-event, single-news, About, Resources page templates
- Member data migration tooling
- Build step / bundler / TypeScript
- Auth, member portal, payment processing
- Mobile app
- COVID-era content (intentionally excluded)
