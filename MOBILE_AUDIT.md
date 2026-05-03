# Mobile Audit — Allô Landing Page

Test widths: 375px, 390px, 414px, 768px. Both FR and EN.

---

## CRITICAL — Will break layout or cause horizontal scroll

### C1 · Compare table overflows (sections.jsx:267–288)
The `<table>` inside the comparison panel has 4 columns (feature + 3 plan prices) with no scroll wrapper. At 335px usable width, columns at 13px font-size overlap and the table bleeds off-screen. **Fix:** wrap in `overflow-x: auto`.

### C2 · Floating hero card causes horizontal overflow (hero.jsx:126–137)
`position: 'absolute', right: -10` on the result card means 10px bleeds outside its parent column. When the hero stacks to 1 column on mobile, that parent spans full viewport width, pushing the card 10px past the right edge and triggering a scrollbar. **Fix:** change `right: -10` to `right: 0` (or a positive value) on mobile.

### C3 · Nav inner has hardcoded 40px side padding (nav.jsx:57–60)
The `.container` CSS class gets `padding: 0 20px` at ≤768px, but the nav uses a custom `inner` style object with `padding: '0 40px'` — inline styles are unaffected by the media query. On a 375px screen the nav content only has 295px of usable width, cramping the logo and right controls. **Fix:** reduce to `padding: '0 20px'` within a media query or use the `.container` class instead.

---

## MAJOR — Broken UX on touch devices

### M1 · Touch targets too small — multiple elements

| Element | File | Approx. size | Min required |
|---|---|---|---|
| Language toggle (nav) | nav.jsx:94–99 | ~20×22px | 44×44px |
| Nav CTA button | nav.jsx:100 | ~35×37px | 44×44px |
| Hamburger button | nav.jsx:102–109 | ~30×23px | 44×44px |
| Overlay close (✕) | nav.jsx:123–126 | ~28×28px | 44×44px |

The language toggle has `background: none; border: none; padding: 0` at `fontSize: 13` — effectively invisible tap area. The hamburger has `padding: 4` on a 22×14px icon. The CTA overrides `.btn`'s `13px 26px` padding down to `10px 20px`, giving ~35px height. **Fix:** add `minHeight: 44; minWidth: 44; padding: 10px 12px` to each.

### M2 · Hero section top padding doesn't reduce on mobile (hero.jsx:97)
`paddingTop: 140` is an inline style — it overrides the `section { padding: 72px 0; }` media query rule in index.html. On a 375px phone, 140px of wasted space above the fold is a significant UX hit. **Fix:** add a mobile-scoped `<style>` rule inside the component (same pattern used in other components) to bring this down to ~100px on ≤768px.

### M3 · Hero minHeight: 100vh on iOS Safari (hero.jsx:97)
iOS Safari's 100vh includes the browser chrome bar, which disappears on scroll. On page load, `minHeight: 100vh` can cut off the bottom of the hero above the fold. **Fix:** use `minHeight: '-webkit-fill-available'` via a scoped CSS rule, or remove the `minHeight` constraint and let content drive height.

---

## MODERATE — Visual issues that degrade experience

### MOD1 · HowItWorks dashed connector stays horizontal when steps stack (sections.jsx:186)
`<div style={{ position: 'absolute', top: 56, left: '16.7%', right: '16.7%', height: 1, borderTop: '1px dashed ...' }}>`
When the 3-column grid collapses to 1 column at ≤640px, this line remains as a horizontal stripe across the middle of the first step card, creating a visual artifact. **Fix:** hide it with `@media (max-width: 640px) { .steps-connector { display: none; } }`.

### MOD2 · Steps have 32px horizontal padding in single-column layout (sections.jsx:188)
`padding: '0 32px'` leaves only 271px for text on a 375px screen (335px usable − 64px padding). The step descriptions are long (especially in FR). **Fix:** reduce to `padding: '0 16px'` on ≤640px.

### MOD3 · Large decorative step numbers may overlap adjacent content (sections.jsx:194)
`fontSize: 96, position: 'absolute', top: -10` — in single-column layout, these absolute elements extend above each step block. Since the parent grid has no `overflow: hidden`, they could visually bleed into previous step's text. **Fix:** reduce size to ~64px and add `overflow: hidden` on the step container on mobile, or hide the numbers on mobile entirely.

### MOD4 · Hero micro-stats separators look odd when section is narrow (hero.jsx:110–117)
The flex row of stats uses vertical dividers (`width: 1, height: 32`) between each item. On screens narrower than ~500px, the stats row wraps because the text is wide, but the dividers don't adapt — you end up with a divider at the end of a row just before a line break. **Fix:** hide the divider spans on mobile and add top-border/gap spacing instead.

### MOD5 · PhoneCard flex-basis may stack awkwardly (bilingual.jsx:117)
`flex: '1 1 300px'` — at 375px container (335px usable), each card can technically fit (300px < 335px), so they won't stack — they'll both try to shrink to fit side by side, resulting in ~150px cards with text overflowing the bubbles. **Fix:** add `minWidth: 280px` and confirm `flexWrap: 'wrap'` actually triggers stacking at these widths. Better: set `flex: '1 1 100%'` on mobile via a scoped media query.

---

## MINOR — Small polish items

### MIN1 · Steps section heading bottom margin is large (sections.jsx:180)
`marginBottom: 72` on the heading group is generous. On mobile this pushes content down. Reduce to 40px on mobile.

### MIN2 · PainSection heading marginBottom: 64 (hero.jsx:172)
Same — 64px before the cards on mobile. Reduce to 36–40px.

### MIN3 · Calculator CTA strip may wrap poorly (calculator.jsx:199–210)
The strip uses `justifyContent: 'space-between'` with `flexWrap: 'wrap'`. On mobile wrap, the text and button each try to split evenly. The button is `flexShrink: 0` which is correct. But the text `<p>` doesn't have `flex: 1` so if the text wraps it won't stretch to push the button to a second line cleanly. Minor layout jitter. **Fix:** add `width: 100%` to the `<p>` element when wrapped.

### MIN4 · Footer bottom bar flex wraps oddly (bilingual.jsx:233)
`display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12` — copyright on left, legal links + toggle on right. When wrapped, both rows are full-width left-aligned, which looks fine. No fix needed but could center-align on mobile for polish.

### MIN5 · Cal.com embed fixed minHeight: 600 (bilingual.jsx:195)
`minHeight: 600` is reasonable for the embed but on a 667px-height phone (iPhone SE) the embed takes most of the screen. No hard fix — Cal.com controls its own height — but a note that on very small phones the embed may require significant scrolling.

---

## Summary by component

| Component | Critical | Major | Moderate | Minor |
|---|---|---|---|---|
| nav.jsx | C3 | M1 | — | — |
| hero.jsx | C2 | M2, M3 | MOD4 | — |
| calculator.jsx | — | — | MIN3 | — |
| sections.jsx (HowItWorks) | — | — | MOD1, MOD2, MOD3 | MIN1 |
| sections.jsx (Packages) | C1 | — | — | — |
| bilingual.jsx | — | — | MOD5 | MIN4, MIN5 |
| hero.jsx (Pain) | — | — | — | MIN2 |

**Total: 3 critical, 3 major, 5 moderate, 5 minor**

---

## Recommended implementation order

1. **C1** — compare table scroll wrapper (1 line, zero risk)
2. **C2** — floating card overflow (1 line)
3. **C3** — nav padding (scoped media query)
4. **M1** — touch targets (4 elements, straightforward sizing)
5. **M2** — hero top padding (scoped style tag)
6. **MOD1** — steps connector hidden on mobile
7. **MOD5** — phone cards stack properly
8. **M3, MOD2, MOD3, MOD4, MIN1–5** — remaining polish

All fixes are scoped to mobile breakpoints and preserve desktop layouts exactly.
