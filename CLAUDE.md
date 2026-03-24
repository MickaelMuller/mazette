# Mazette Coiffure

Site vitrine pour un salon de coiffure a Bordeaux (rue Notre-Dame).

## Stack

- **Framework**: Next.js 15.5 (App Router, Turbopack)
- **Runtime**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Icons**: lucide-react
- **Font**: Inter (next/font/google)
- **Package manager**: pnpm

## Architecture

Single-page app. Une seule route (`/`).
Le layout (`src/app/layout.tsx`) wrap tout avec `Navigation` + `Footer`.
La page (`src/app/page.tsx`) compose les sections dans l'ordre :
Hero > Services > Gallery > Booking > Location > Contact.

Tous les composants vivent dans `src/components/`, un par fichier.

## Conventions

- Path alias : `@/*` -> `./src/*`
- Palette : pink-600 principal, gradients pink/purple
- Tout le contenu est en francais
- `'use client'` uniquement sur les composants avec du state (Navigation, Gallery, Location)
- Reservation via lien externe Planity
- Le formulaire de contact est statique (pas de handler)
- La galerie utilise des placeholders (pas de vraies images)

## Commandes

```bash
pnpm dev          # Dev server (Turbopack)
pnpm build        # Build production
pnpm start        # Serve production build
pnpm lint         # ESLint
```
