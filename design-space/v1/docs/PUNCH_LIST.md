# Punch List — ACOCI homepage redesign

Living record of decisions, success criteria, failure conditions, and deferred items. Read this before touching anything.

For "what to do next" in priority order, see [`../NEXT.md`](../NEXT.md).

Last updated: 2026-05-07

---

## Current State

Static homepage design draft v1 is complete and smoke-tested at desktop / tablet / mobile breakpoints. Awaiting user design review before committing to a second pass or starting the WordPress theme port.

---

## Active Decisions

- **Build the homepage as static HTML/CSS/JS first; WordPress comes after design lock.** Decision: current phase. Revisit when the static design is approved.
- **Layout adapted from Kettering Health old-layout** (decision cards + events accordion + news carousel). HFTP.org reviewed for member-org structural cues. Decision: current phase.
- **Decision cards are: Become a Member / Find Resources / Find a Member / Upcoming Events.** Decision: current phase. Confirmed by user 2026-05-07.
- **No hero search box.** Decision: current phase. User explicitly said skip search.
- **Hero photo is a real ACOCI event photo** pulled from the live site (group of business community members at an event with the chamber banner visible, no masks). Decision: current phase. Replace with a stronger or commissioned photo before launch.
- **Typography is Hanken Grotesk for both heading and body.** Decision: current phase. User flagged it may change — set up so a single font swap is one CSS change.
- **Brand palette is logo-derived** (teal `#1FB8B0`, deep teal `#0E8B85`, aqua `#A8DDD6`, sun orange `#F4A248`, slate `#5C6B73`, ink `#1F2A37`). Decision: current phase.
- **No COVID-era content.** Decision: permanent. The user explicitly excluded mask photos, "visitor restrictions" copy, etc. from anything we port from references.
- **Member listings are not committed to the repo.** Decision: current phase. They will be exported from the live site and imported via ACF when WP is built.

---

## Success Criteria

- User approves the static homepage design (or names specific changes for v2).
- The design ports cleanly into a WordPress theme without major restructuring.
- Final site visually distinct from the current Elementor build (the explicit reason for the redesign).
- Member organisation feel: clear primary actions (join, find resources, find a member, see events), professional tone, Anguilla brand.

---

## Failure Conditions

- The static design needs more than two major rewrites before approval — implies the brief or references are wrong, not the execution. Stop and re-run /office-hours / /plan-ceo-review.
- WordPress theme port reveals the static design relies on patterns that don't fit ACF / WP block conventions — implies we should have prototyped in WP from the start.
- User feedback consistently points at typography or hero photo as the wrong call — those are intentionally placeholder; if they keep coming up before structural feedback, escalate the typography lock and photo source.

---

## Deferred Items

### Typography lock

**What:** Hanken Grotesk is in use for heading + body. A possible split (e.g. serif heading + grotesk body) was not explored.

**Why deferred:** User said "for now, just go with Hanken Grotesk... but we might change." Locking before review is premature.

**When to address:** During or after the user's design review of v1.

**Files:** `index.html` (Google Fonts link), `assets/css/styles.css` (`body { font-family: ... }`).

---

### Hero photo

**What:** Hero uses `acoci-hero.jpg`, a real event photo from the live site. Could be stronger (resolution, composition, brand alignment).

**Why deferred:** Building from existing assets first is cheaper than commissioning a shoot before layout is approved.

**When to address:** After v1 is approved. Either source a higher-quality archive photo or commission new photography.

**Files:** `assets/images/acoci-hero.jpg`.

---

### Interior page templates

**What:** Member Directory listing, single Event, single News, About / Your Chamber, Resources index. None designed.

**Why deferred:** Homepage is the design tone-setter. Interior pages get easier once the system is locked.

**When to address:** After homepage approval, before WP theme port.

**Files:** none yet.

---

### Member data migration

**What:** ~188 members and ~29 events on the live site need to migrate to the new install.

**Why deferred:** Migration tooling depends on the ACF field shape we choose. ACF schema isn't designed yet.

**When to address:** After WP theme port begins. Plan: export from live site → ACF importer.

**Files:** none yet.

---

### Continuity files location

**What:** Continuity files (this folder + `NEXT.md`, `CLAUDE.md`, etc.) are temporarily in `_design/`. The canonical project root is `/home/user/projects/#wordpress-builds/acoci/`.

**Why deferred:** That directory is root-owned (Docker bind-mount artifact). The agent could not write there.

**When to address:** As soon as the user runs `sudo chown -R $USER:$USER "/home/user/projects/#wordpress-builds/acoci"`. Then move the six continuity files to that root.

**Files:** all six continuity files in this folder.

---

### Git initialization

**What:** This `_design/` folder is not a git repo. Neither is the eventual project root. No history.

**Why deferred:** Git commands are user-owned per the continuity convention. Awaiting user decision on where the repo root should be.

**When to address:** After the chown is fixed and the project root location is finalized. Likely `git init` at `/home/user/projects/#wordpress-builds/acoci/`.

**Files:** N/A (will affect repo root).

---

## Open Questions

### Where should the static design draft live long-term?

Options:
1. Stay in `/home/user/projects/website-clones/anguillachamber.com-clone/_design/` (sibling to the live-site clone) — clean separation between "reference clone" and "design draft" but odd because design-draft isn't really a clone artifact.
2. Move to `/home/user/projects/#wordpress-builds/acoci/_design/` (inside the eventual project root) — natural home but blocked on the chown.
3. Move to `/home/user/projects/#wordpress-builds/acoci/wordpress/themes/acoci-theme/_design/` (inside the theme) — keeps design + theme code together, but conflates design source with theme source.

Decision needed before committing to a git repo.

---

### Typography pair — keep Hanken Grotesk or split?

The current "Hanken Grotesk for everything" is intentional placeholder per the user. Possible alternatives if a split is wanted:
- Hanken Grotesk body + serif heading (Fraunces, Source Serif, etc.) — more editorial
- Hanken Grotesk body + display sans heading (e.g. Söhne, Inter Display, GT Walsheim) — more product-y
- Stay single-family but vary weight/size dramatically — most flexible

Will be answered in design review.

---

### Hero CTA copy — "Become a Member" vs "Join the Chamber" vs other?

Current is "Become a Member". Live site uses "Get the Details" (event-focused) and "See All Events" — neither is membership-focused. Worth discussing in design review.

---

## Out of Scope (Current Phase)

- WordPress theme PHP / template files
- ACF field groups
- Interior page templates (Member Directory, single Event, single News, About, Resources)
- Member data migration tooling
- Build step / bundler / TypeScript
- Auth, member portal, payment processing
- Mobile app
- COVID-era content (permanently excluded)
