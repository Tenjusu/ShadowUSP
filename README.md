# ShadowUSP

ShadowUSP is a React + Vite dashboard for tracking recent congressional financial disclosure filings from scraped Senate data.

## Dashboard

```bash
cd dashboard
npm install
npm run dev
```

The app reads local disclosure data from `dashboard/src/senate_trades.json` and renders filterable filing cards in the ShadowTrade UI.

## Scraper

`scraper.py` is the Python data collection entry point. Generated disclosure data is stored in `senate_trades.json` and mirrored into the dashboard source for the frontend bundle.
