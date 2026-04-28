# Allô — Marketing Website

Bilingual (FR/EN) marketing site for Allô, a Montreal-based agency that installs AI voice agents and workflow automation for service businesses.

## Stack

- React 18 via CDN (UMD) — no build step
- Babel Standalone for in-browser JSX compilation
- Plain HTML/CSS with CSS custom properties
- Cal.com embed for booking
- Served with any static file server

## Structure

```
index.html          # Main landing page
dentaires.html      # Dental clinics vertical
med-spa.html        # Med spas vertical
hvac.html           # HVAC companies vertical

app.jsx             # Root — mounts all sections
nav.jsx             # Navigation + language toggle
hero.jsx            # Hero + Pain sections
calculator.jsx      # Interactive ROI calculator
sections.jsx        # How it works + Packages
bilingual.jsx       # Bilingual demo + CTA booking + Footer
shared.jsx          # Shared utilities (useScrollReveal, useCountUp, WaveMarkLogo)

vertical-sections.jsx   # Shared sections for vertical pages
dentaires.jsx           # Dental page root
med-spa.jsx             # Med spa page root
hvac.jsx                # HVAC page root
```

## Running locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Any static server works. Opening via `file://` may cause issues loading the JSX files cross-origin.

## Targets

- Cliniques dentaires (Dentitek integration)
- Med spas / cliniques esthétiques
- Entreprises HVAC et climatisation

## Languages

Language is toggled via a `lang` prop (`'fr'` | `'en'`) passed through the component tree. All copy lives in per-file `COPY` constants with `fr` and `en` keys. No external i18n library.
