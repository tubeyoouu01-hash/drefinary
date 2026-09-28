# Okigwe Bruhaha Refinery — Corporate Website Template

Next.js 15 + Tailwind v4 + lucide-react. 7 pages × 10 languages (EN, ES, FR, ZH, PT, DE, AR, HI, JA, VI), Arabic renders RTL.

## Run
```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
npm run build && npm start
```

## Where to customize (buyers: start here)
| What | File |
|---|---|
| Company name, domain, email, phone, address, socials | `src/lib/site-config.ts` |
| **Logo** (header + footer both use it) | `src/components/LogoMark.tsx` |
| Colors (white bg / blue brand / red accent) | `src/app/globals.css` (`@theme` block) |
| Fonts | `src/app/[locale]/layout.tsx` |
| All page copy, per language | `src/lib/dictionaries/*.json` |
| Testimonial names + countries (shared across languages) | `src/lib/testimonials.ts` |
| Service / pillar list + images | `src/lib/services.ts` |
| Languages offered | `src/lib/locales.ts` |

Company name in copy uses `{{siteName}}` / `{{shortName}}` tokens, resolved automatically from `site-config.ts`.

## Before going live — replace these placeholders
- `.example` email domain and the placeholder phone number
- `#` social links
- `[Permit Number]` in `about.licenseNote` (every dictionary) — use your real permit, or remove the line
- Facility figures in `home.stats` and `home.heroEyebrow` (founding year, years operating, "ISO aligned")
  must reflect **your actual** operations and certifications
- Placeholder images: `picsum.photos` seeds in `src/lib/services.ts` and the pages — swap for real photography
  of your own facility, tanks, tankers, and rigs (add your image host to `next.config.ts`)
- The footer disclaimer about unverified capacities — remove only once the claims are verifiable

## Adding a language
Copy `en.json` → `<code>.json`, translate (keep `{{tokens}}`), then register it in `locales.ts` and `get-dictionary.ts`
(add to `rtlLocales` if right-to-left).

## Form
Contact form composes a `mailto:` link (no backend). Wire it to your own API/email service for production.
