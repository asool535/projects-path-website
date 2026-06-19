# Projects Path — General Trading & Contracting Website

A professional bilingual (English / Arabic with full RTL) company website in a black & gold theme, plus a custom SVG logo set.

## Files
```
projects-path-website/
├── index.html        # The website (single page, all sections)
├── styles.css        # Black & gold theme + responsive + RTL styles
├── script.js         # EN/AR language toggle, mobile menu, contact form
├── assets/
│   ├── logo.svg      # Full horizontal logo (emblem + bilingual wordmark)
│   ├── emblem.svg    # Emblem only (used in header/footer)
│   └── favicon.svg   # Browser tab icon
└── README.md
```

## How to preview
Just double-click `index.html`, or open it in any browser. No server or build step required.
Use the **العربية / English** button in the top-right to switch language — the whole layout flips to RTL for Arabic.

## Brand
- **Colors:** Black `#0B0B0B` · Gold `#D4AF37` (light `#F3D98B`, deep `#A67C00`)
- **Fonts:** Cinzel (English headings), Inter (English body), Noto Kufi Arabic (Arabic)
- **Logo concept:** an upward "path" / road in perspective inside a hexagon, with a rising-sun arc — symbolizing progress, infrastructure, and energy.

## Things to customize (search & replace)
| What | Where |
|------|-------|
| Phone number | `index.html` → `+964 770 000 0000` (and `tel:` link) |
| Email | `index.html` → `ahmedalkhalifa@projectpathiq.com` |
| Address | `data-i18n="contact_addr"` text, and translations in `script.js` |
| Stats (15+, 200+) | `script.js` → `stat1_n`, `stat2_n` … (both `en` and `ar`) |
| Any wording | `script.js` → edit the `I18N.en` / `I18N.ar` dictionaries |

> All text lives in the `I18N` dictionary in `script.js`. Edit both the English (`en`) and Arabic (`ar`) entries so the toggle stays in sync.

## Contact form
The form currently shows a confirmation message only. To actually receive enquiries, connect it to one of:
- A form service (Formspree, Web3Forms, etc.) — set the `<form action="…">`.
- Your own backend / email endpoint.
See `handleSubmit()` in `script.js`.

## Hosting
Upload the whole folder to any static host: **Netlify, Vercel, GitHub Pages, Cloudflare Pages**, or standard cPanel hosting. No backend needed.

## Suggested next steps
- Replace placeholder phone/email/address with your real details.
- Add real project photos (create an `assets/` images folder and a Projects gallery section).
- Register a domain (e.g. `projectspath.iq`) and point it at your host.
