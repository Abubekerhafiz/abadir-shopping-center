# Abadir Supermarket

**Live site: [https://abadir-shopping-12.vercel.app/](https://abadir-shopping-12.vercel.app/)**

A neighbourhood grocery site for Abadir Supermarket in 4Kilo, Addis Ababa — browse 92 products across 8 categories, build a basket, and pay with Telebirr. Pickup only, no delivery.

## What's here

- **Home** (`index.html`) — hero, category filters, promo strip, product grid with search
- **Basket** (`cart.html`) — line items, eco-bag extra, Telebirr checkout with OTP flow
- **Products** (`products.js`) — 92 items with prices in ETB, sale prices supported
- **Styling** (`style.css`) — charcoal + cream + tangerine theme, no framework

## Categories

Produce · Bakery · Dairy & Eggs · Pantry · Drinks · Snacks · Household · Frozen

## Run locally

Static site — no build step. Serve the folder and open it:

```bash
python -m http.server 8765
# then visit http://localhost:8765/index.html
```

## Deployment

Hosted on Vercel, deployed from the `main` branch.

## Stores

| Store | Location | Hours |
|---|---|---|
| Main Store | 4Kilo, next to Hilcoe School | 8am – 8pm daily |
| Express | 4Kilo, in front of AAU | 7am – 10pm daily |
