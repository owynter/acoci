# ACOCI homepage — static design v2

Second pass. **HFTP-structured** with a **CTA-style hero** (links overlaid on hero photo).

## Run

```bash
python3 -m http.server 8766
```

Then http://localhost:8766/

## What changed from v1

- **Hero** is now the CTA pattern: 2-column, big extended-grotesque headline + lede + buttons on the left, hero photo with a darkened gradient and 5 quick-link arrows overlaid on the right.
- **Typography**: heading is **Bricolage Grotesque** (Google variable font) pushed to `wdth 100–110` — the closest free equivalent to Maison Neue Extended for the wide-grotesque "Mel Robbins" feel. Body remains Hanken Grotesk. Single-line swap if we want to change.
- **Layout** is the HFTP arc: featured-news + sidebar / 4-up promo grid / About-CTA / Members 3-up / President's letter / Events list / News grid / Subscribe / 2-up Industries / Sponsors. Skipped HFTP's "Hotel Industry / Club Industry" framing — replaced with "For Members / For Visitors & Investors".
- **Roundness**: bumped border-radius across the board (cards 28px, buttons fully rounded pill, pill tags). Pulled from melrobbins.com vibe.
- **Color**: deeper ink for primary buttons (Mel Robbins uses near-black), brand teal + sun on backgrounds and accents.

## Files

- `index.html` — homepage markup (1 page, ~12 sections)
- `assets/css/styles.css` — all styles, tokens at top
- `assets/js/app.js` — smooth-scroll only (no accordion in v2)
- `assets/images/` — logo (color + white), hero photo, 3 supporting photos

## Verified

Desktop 1440, mobile 390 — no console errors, no horizontal overflow, all sections render. See `/tmp/acoci-v2-desktop.png` and `/tmp/acoci-v2-mobile.png` for last screenshots.

## Notes

- No COVID-era content.
- Strategic Partners / sponsors are placeholders — no real partner logos used.
- Event copy is plausible-but-static.
- Both v1 (`../_design/`) and v2 (`./`) are kept side by side until a direction is chosen.
