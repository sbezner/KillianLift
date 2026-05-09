# Killian Lift

Private working draft. Design and go-to-market package for the Killian Lift platform.

The full package is in [`killian-lift/`](killian-lift/README.md).

## Web view

A browsable version is published via GitHub Pages and password-protected.

Once Pages is enabled (Settings -> Pages -> Source: deploy from main, root), the site is at:

```
https://<owner>.github.io/<repo>/
```

The site renders the markdown, SVG, and CSV files in this repository directly. There is no duplicate HTML version of the documents.

## Local preview

```
python3 -m http.server 8000
# then open http://localhost:8000
```

## Repository structure

- `index.html`, `assets/` - the static site (password gate + viewer)
- `killian-lift/` - the design and GTM package itself
  - `01-design/` - product definition
  - `02-engineering/` - mechanical, electrical, controls, sensors, BOM, load calcs, standards
  - `03-retrofit-kit/` - the v1 product (Killian Smart Kit)
  - `04-manufacturing/` - production strategy
  - `05-go-to-market/` - sales, pricing, launch, financial model
  - `06-ip-and-legal/` - patent, FTO, trademark
  - `07-roadmap/` - product roadmap and risks
- `.nojekyll` - disables Jekyll processing on GitHub Pages
