# WordPress Project Playbook

The standard approach for every WordPress build in this folder.

## Core principle

Treat each project as two things:

- **application code** — lives in the repo (theme, mu-plugins, config)
- **site state** — lives in Docker volumes (database, media, wp-admin-installed plugins)

That split keeps development reproducible without fighting how WordPress actually works.

---

## Starting a new project

Every project is bootstrapped from the `_boilerplate/` folder using a single script at the root of this directory.

```bash
./new-project.sh my-client-name
```

That creates the project folder, renames all `PROJECT` tokens to the slug, picks an available port, and copies `.env.example` to `.env`.

### After running new-project.sh

1. `cd my-client-name`
2. Edit `.env` — set `WP_SITE_TITLE`, `WP_ADMIN_USER`, `WP_ADMIN_PASSWORD`, `WP_ADMIN_EMAIL`
3. `docker compose up -d`
4. `bash scripts/setup.sh`

`setup.sh` installs WordPress via WP-CLI (no browser installer needed), configures core settings, cleans up defaults, and installs build-time plugins.

---

## Stack

| Service    | Image                    | Purpose                        |
|------------|--------------------------|--------------------------------|
| wordpress  | wordpress:php8.3-apache  | WordPress + PHP runtime        |
| db         | mariadb:10.11            | Database                       |
| wpcli      | wordpress:cli            | WP-CLI for scripted setup      |
| phpmyadmin | phpmyadmin:5-apache      | Local DB inspection            |

- Ports are auto-assigned by `new-project.sh` to avoid conflicts across projects.
- Update image versions only when there is a reason to.

### Volumes and mounts

| Type        | What                          | Why                                     |
|-------------|-------------------------------|-----------------------------------------|
| Bind mount  | `./wordpress/themes/<theme>`  | Live edits without rebuilding container |
| Bind mount  | `./wordpress/mu-plugins`      | Same                                    |
| Docker volume | `wordpress_data`            | Persists WP core, media, installed plugins |
| Docker volume | `db_data`                   | Persists database                       |

---

## Project structure

```
project-root/
  docker-compose.yml
  .env                  ← not committed
  .env.example          ← committed
  docs/
    wordpress-playbook.md
  scripts/
    setup.sh            ← run once at build start
    prelaunch.sh        ← run before going live
  wordpress/
    themes/
      project-theme/    ← committed
    mu-plugins/         ← committed
```

---

## Two-stage plugin setup

Plugins are split into two stages to keep the dev environment lean.

### Stage 1 — build time (`scripts/setup.sh`)

Run once after `docker compose up -d`. Handles everything needed to start building.

**What it does automatically:**
- Installs WordPress (skips the browser installer)
- Sets permalink structure to `/%postname%/`
- Sets timezone
- Deletes default themes (all Twenty-Twenty-X themes)
- Deletes Akismet, Hello Dolly
- Deletes the Hello World post and Sample Page
- Installs and activates **ACF** (Advanced Custom Fields)
- Installs and activates **ACF Columns** (dreihochzwo, v1.2.5)
- Activates the project theme

**Manual step flagged by the script:**
- **Fluent Forms Pro** — download from fluentforms.com, install via wp-admin

### Stage 2 — pre-launch (`scripts/prelaunch.sh`)

Run when the site is ready to go live.

**What it does automatically:**
- Installs and activates **The SEO Framework** (autodescription)
- Installs Fluent Forms free if not already present (with a note to swap in Pro)

**Manual steps flagged by the script:**
- **WP Cerber Security** — no longer on the WordPress.org repo. Download from [wpcerber.com](https://wpcerber.com) and install via wp-admin > Plugins > Upload Plugin.

---

## Plugin policy

- Third-party plugins are **not committed to git**
- Custom code (theme, mu-plugins) is always committed
- When a plugin is finalized for a project, document it:
  - name, source, version, license/purchase info, key settings for production

### Standard plugin reference

| Plugin              | Stage      | Source                  | Notes                          |
|---------------------|------------|-------------------------|--------------------------------|
| Advanced Custom Fields | Build   | wordpress.org           | Free version                   |
| ACF Columns         | Build      | wordpress.org           | by dreihochzwo, v1.2.5         |
| Fluent Forms Pro    | Build      | fluentforms.com         | Manual install, paid           |
| The SEO Framework   | Pre-launch | wordpress.org           | slug: autodescription          |
| WP Cerber Security  | Pre-launch | wpcerber.com            | Manual install, off the repo   |

---

## What belongs where

**Theme** (`wordpress/themes/project-theme/`):
- templates
- styles and scripts
- block styles
- presentation-layer helpers

**mu-plugins** (`wordpress/mu-plugins/`):
- custom post types and taxonomies
- admin restrictions
- redirects
- environment-specific helpers
- business logic that should survive theme changes

**wp-admin installs** (not committed):
- all third-party plugins
- any page builder if the project needs one

---

## Theme strategy

Default to a **hybrid theme** for most client projects:
- `theme.json` for design tokens and editor settings
- selective Gutenberg block support
- ACF fields for controlled editable sections

Use a block theme only when the site should be largely assembled in the Site Editor.

---

## ACF guidance

Use ACF when editors need to change text, images, stats, cards, or CTA links without touching templates.

Priority order:
1. Plain fields on templates for fast wins
2. Repeaters or flexible content when repeated structures are clearly needed
3. ACF blocks only when editor-assembled pages are a real requirement

Do not build a full block system for sites with mostly fixed marketing layouts.

---

## Day-to-day workflow

- Write theme code and mu-plugins in the repo
- Install and configure third-party plugins in wp-admin
- Create pages and content in wp-admin
- Do not build on production — production is where tested, approved work gets deployed

---

## Common commands

```bash
# Start
docker compose up -d

# Stop
docker compose down

# Stop and wipe all local data (volumes)
docker compose down -v

# Tail logs
docker compose logs -f wordpress db

# Run WP-CLI manually
docker compose run --rm wpcli wp <command>

# PHP lint a file
docker compose exec -T wordpress php -l /var/www/html/wp-content/themes/project-theme/front-page.php
```

---

## Project start checklist

- [ ] `new-project.sh` ran cleanly
- [ ] `.env` updated with real site title and admin credentials
- [ ] `docker compose up -d` — all containers healthy
- [ ] `scripts/setup.sh` ran without errors
- [ ] Fluent Forms Pro installed manually
- [ ] Theme is active and renders without PHP errors
- [ ] Permalinks flushed (setup.sh does this, verify in Settings > Permalinks)
- [ ] mu-plugins directory mounted and accessible

## Pre-launch checklist

- [ ] `scripts/prelaunch.sh` ran without errors
- [ ] WP Cerber installed and configured manually
- [ ] Fluent Forms Pro active (not the free version)
- [ ] SEO Framework configured
- [ ] All PHP errors resolved
- [ ] Redirects in place
- [ ] Deployment method confirmed
