# ACOCI homepage — static design v3

Third pass. Same HFTP-structured body as v2, **new hero** modeled on `design-concepts/hero-variations/hero-concept-02.png` (not 1:1).

## Hero pattern

- Centered eyebrow + headline + lede above the photo
- Wide rounded hero photo
- Dark glass quick-links bar tucked into the **bottom of the photo**: 4 items (Membership / Directory / Business Resources / Events) with circular icon chips + labels + right-arrows + vertical separators

## Run

```bash
python3 -m http.server 8767
```

http://localhost:8767/

## Responsive behavior

- **≤1100px**: hero-bar drops out of the photo and becomes a 2-column dark card sitting below the image (overlaps by -32px for a tucked-in feel).
- **≤640px**: hero-bar becomes a full-width 1-column stack.

## Files

- `index.html`
- `assets/css/styles.css` — same tokens + sections as v2; only the `.hero` block was replaced with the new pattern. Bricolage Grotesque heading (wdth 105–110) + Hanken Grotesk body kept.
- `assets/js/app.js` — smooth-scroll only.
- `assets/images/` — same as v2.

## Why v3 vs v2

v2 has the CTA-style 2-col hero (links overlaid on photo, copy on the left).
v3 has concept-02: copy stacked above a wider photo, links along its bottom edge.
Same body in both — pick whichever hero direction wins, then we lock and port to WordPress.
