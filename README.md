# UZ GOV — Ultimate Government Digital Ecosystem (Frontend Demo)

A multi-page, browser-only React/Vite prototype inspired by the information architecture of a government portal. **This is not GOV.UZ and is not an official government service.** All content, metrics, forms, and administrative records are demonstration data. No application is submitted to a government agency.

## Technology
- React 18, Vite, JavaScript ES modules
- React Router DOM 6
- Framer Motion animations
- Lucide React icons
- Recharts dashboard visualizations
- CSS Grid/Flexbox, responsive layouts
- LocalStorage/sessionStorage for demo preferences and records

## Run locally
```bash
npm install
npm run dev
```
Production build:
```bash
npm run build
npm run preview
```

## Demo admin
- URL: `/admin`
- Username: `admin`
- Password: `admin123`
- This is a client-side demonstration gate, **not secure authentication**. Do not use real credentials or personal data.

## Main capabilities
- Portal home, government, ministries, committees, agencies, regions, news, documents, services, appeals, open data, and country information.
- 45+ named route entries including government sub-sections, document categories, service categories, regional profiles, media sections, statistics, accessibility, privacy and contact pages.
- Search, saved items, theme preference, language selector shell, font-size controls, mobile navigation and notification toasts.
- Demo appeal submission and status-check interface. Data remains in the browser only.
- Admin dashboard with demo login and LocalStorage-backed record creation, editing and deletion across management tabs. The login is client-side only and is not secure authentication.
- Recharts-based digital transformation visualization.

## Project structure
- `src/components` — reusable UI components
- `src/pages` — page-level components (route composition currently in `App.jsx`)
- `src/layouts` — layout extension point
- `src/sections` — home and content section extension point
- `src/admin` — admin feature extension point
- `src/data` — demo content
- `src/hooks`, `src/context`, `src/routes`, `src/utils`, `src/styles`, `src/assets`

## Important limitations
- Frontend-only: no API, server, database, real identity verification, real document storage, or government integration.
- All analytics and statistics are fictional demo values.
- The language selector and several information modules are UI demonstrations; translations are not yet complete across every content item.
- PDF/document previews and submissions are illustrative and do not represent legal records.

## Motion va vizual dizayn yangilanishi
- Bosh sahifada animatsiyali gradient, nozik grid fon, orbit halqalari va suzuvchi axborot kartalari.
- Navigatsiyada interaktiv underline, logotipda yorug‘lik sweep effekti.
- Kartochkalarda yumshoq 3D ko‘tarilish, hover highlight va kirish animatsiyalari.
- Tugmalarda yorug‘lik o‘tishi, form elementlarida focus holati va statistik bloklarda mikro-animatsiyalar.
- `prefers-reduced-motion` qo‘llab-quvvatlanadi: qurilmada harakatni kamaytirish yoqilgan bo‘lsa animatsiyalar cheklanadi.
