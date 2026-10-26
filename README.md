# Aich International Traders — Landing Page

React 18 + TypeScript + Vite, styled with **Tailwind CSS** (all design) and the **Bootstrap 5 grid** (footer columns).
Routing via React Router, so new pages drop in without restructuring.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to /dist
npm run preview    # serve the production build
npm run lint | typecheck | test | format
```

## Structure

```
src/
├── app/                 App shell + providers (add query client, auth, i18n here)
├── assets/images/       Logo and photos
├── components/
│   ├── ui/              Reusable primitives: Button, Badge, Modal, GlassCard, SectionHeading, Logo
│   ├── layout/          Navbar, Footer, MainLayout (shared by every page)
│   └── effects/         Decorative visuals (animated WorldBackdrop)
├── config/              site.ts (company details, nav, WhatsApp), env.ts (typed env vars)
├── data/                Static content: regions, spices, certifications, trade hubs
├── features/
│   ├── landing/         sections/ (Hero, GlobalNetwork, SpiceShowcase, About, Contact) + components/
│   └── contact/         Inquiry form (components + useInquiryForm hook)
├── hooks/               Generic hooks (useDisclosure, useAutoCycle)
├── lib/                 Pure helpers (cn, buildInquiryMailto) + unit tests
├── pages/               Route-level pages (HomePage, NotFoundPage)
├── routes/              Route table
├── services/            http/client.ts (fetch wrapper) + inquiry.service.ts
├── styles/              Tailwind entry, shared and animation CSS
└── types/               Shared TypeScript types
```

## Common changes

| Task | Where |
| --- | --- |
| Update phone, email, founder, name | `src/config/site.ts` |
| Edit markets, ports, lead times | `src/data/regions.ts` |
| Change spices or photos | `src/data/spices.ts` + `src/assets/images/spices/` |
| Add or reorder landing sections | `src/pages/HomePage.tsx` |
| Add a new page | create it in `src/pages/`, register in `src/routes/index.tsx` |
| Brand colours | `tailwind.config.ts` |
| Connect a backend | set `VITE_API_BASE_URL` (see `.env.example`), then change the body of `src/services/inquiry.service.ts` to POST via `http()` |

## Notes

- The inquiry form currently opens the visitor's mail client (`mailto:`). Swap to an API call in one place (see above).
- Testimonials are intentionally not included; add a `TestimonialsSection` under `features/landing/sections/` and list it in `HomePage.tsx` later.
- Animations respect `prefers-reduced-motion`.
