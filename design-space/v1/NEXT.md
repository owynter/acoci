# NEXT — ACOCI homepage redesign

**The human-and-agent-readable surface for "what's happening right now."** Read this first when opening the repo cold.

For the structured archive of decisions and deferred items, see [docs/PUNCH_LIST.md](./docs/PUNCH_LIST.md).
For agent operating instructions, see [CLAUDE.md](./CLAUDE.md).

Last updated: 2026-05-07 (initial scaffold of project-continuity v0.2 alongside the static homepage draft)

---

## In Flight

Currently active work that needs to be finished or handed off.

- **Static homepage design draft** — `index.html`, `assets/css/styles.css`, `assets/js/app.js`, `assets/images/{acoci-logo.png,acoci-hero.jpg}`. Built 2026-05-07 from the Kettering Health old-layout structure (decision cards + events accordion + news carousel) restyled with ACOCI brand. Verified at 1280 / 768 / 390 viewports. Awaiting design review.

---

## Immediate Priorities (this week)

The 1-3 things that must happen next, in priority order.

1. **User review of the static homepage** — open `python3 -m http.server 8765` from this folder and open http://localhost:8765/. Review hero, decision cards, events accordion, news cards, CTA. Capture feedback on layout, copy, palette, typography (currently Hanken Grotesk both heading + body — flagged as "might change").
2. **Resolve the working-directory ownership blocker** — the eventual project root at `/home/user/projects/#wordpress-builds/acoci` is owned by root (Docker bind-mount artifact). Run `sudo chown -R $USER:$USER "/home/user/projects/#wordpress-builds/acoci"` so design + theme work can be committed there. Continuity files currently live in this `_design/` folder and need to migrate once unblocked.
3. **Decide on second-pass scope** — once homepage layout is approved, the next decisions are: typography lock, hero photo (current is a real ACOCI event photo from the live site — may want a custom shoot), and which interior pages to design before WordPress build.

---

## Live Calendar (deadlines, gates, milestones)

<!-- TO DO: no hard dates yet. Add Starry Night Business Awards 2027 prep window once a target launch date is set. -->

---

## Within 2 Weeks

- Decide whether to keep Hanken Grotesk or pick alternate typography pair.
- Build interior page templates: Member Directory listing, single Event, single News post, About / Your Chamber.
- Source or commission a stronger hero photo (current is reused from the live site).

---

## Within 6 Weeks

- Port the approved static design into the WordPress theme stub at `wordpress/themes/acoci-theme/`.
- Stand up ACF field groups for editable hero / decision-card / events-accordion content.
- Migrate member listings (188 entries on the live site) via export from anguillachamber.com → ACF import.

---

## Recently Completed

Most recent first.

- **2026-05-07** — Static homepage design draft built and smoke-tested at 1280/768/390. ACOCI palette derived from the live logo (teal `#1FB8B0`, deep teal `#0E8B85`, aqua `#A8DDD6`, sun `#F4A248`, slate `#5C6B73`). COVID-era content excluded.
- **2026-05-07** — Mirrored anguillachamber.com sitemaps into `../sitemaps/` for IA reference (188 members, 29 events, ~25 pages across Your Chamber / Membership / Resources / News & Events).
- **2026-03-18** — ACOCI WordPress Docker stack created and running (web on :8090, phpMyAdmin on :8091). WP installed but no content. See `/home/user/projects/#wordpress-builds/acoci/` (currently root-owned, see priority 2).

---

## How to use this file

- **Opening this repo cold:** Read this file. Then `docs/PUNCH_LIST.md`. Then `CLAUDE.md`.
- **Completing a milestone:** Move the item to "Recently Completed" with date and outcome.
- **Time-sensitive item appears or shifts:** Add or update it in the Live Calendar.
- **Deeper structural change:** Update `CLAUDE.md` and `docs/PUNCH_LIST.md` first.

This file is the Monday-morning surface. PUNCH_LIST.md is the structured archive. CLAUDE.md is the deep operational layer.
