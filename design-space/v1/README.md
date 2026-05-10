# ACOCI homepage — static design draft

Static HTML/CSS/JS draft of the new ACOCI homepage. Layout adapted from the Kettering Health old-layout (decision cards + classes/events accordion + news carousel) and restructured for a member organisation. Brand palette derived from the live ACOCI logo. Typography is Hanken Grotesk (heading + body) per design direction — easy to swap later.

## Run

From this folder:

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765/

## Files

- `index.html` — complete homepage markup
- `assets/css/styles.css` — all styles, palette tokens at top
- `assets/js/app.js` — events accordion + stories carousel scroll + smooth in-page nav
- `assets/images/acoci-logo.png` — pulled from live site
- `assets/images/acoci-hero.jpg` — group photo from live site (event with ACOCI banner)

## Sections (top to bottom)

1. Sticky header (logo, primary nav, "Become a Member" CTA, mobile menu toggle)
2. Hero — eyebrow, headline, lede, two CTAs, circular hero photo with sun + waves accent
3. Decision cards — 4 cards (Become a Member, Find Resources, Find a Member, Upcoming Events)
4. Mission band — teal gradient with mission statement + 4 stats
5. Events accordion — 4 upcoming events, first expanded by default
6. News & stories carousel — 4 cards with placeholder gradient artwork
7. Membership CTA — full-width teal section with apply button
8. Footer — 5 columns (brand+contact, Your Chamber, Membership, Resources, News & Events) + legal strip

## Brand tokens (in CSS)

- `--teal: #1FB8B0` (primary)
- `--teal-deep: #0E8B85`
- `--aqua: #A8DDD6`
- `--aqua-soft: #E8F6F4`
- `--sun: #F4A248` (accent)
- `--ink: #1F2A37`
- `--slate: #5C6B73` (logo-grey)

## Notes

- All event/news content is plausible-but-static. Swap once we wire WordPress + ACF.
- News card thumbnails are colored gradients (no real article photography).
- Decision card icons are inline SVG; easy to swap for line-art that matches brand.
- COVID-era content excluded per direction.
- No member directory listing on homepage — the "Find a Member" card links to the directory page (to be built).
- Verified at 1280, 768, 390 viewports. Accordion + smooth-scroll behave correctly.
