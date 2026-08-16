# Marecouv — site web

Site vitrine de Marecouv (recouvrement de créances), Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

> Le build nécessite un accès internet standard pour télécharger les polices
> Google Fonts (Fraunces, Inter) via `next/font/google`, bloqué dans le
> bac à sable de développement utilisé pour générer ce projet, mais qui
> fonctionne normalement en local ou sur Vercel.

## Identité de marque

- Couleurs : voir `src/app/globals.css` (navy `#0B3B75`, pierre `#F4F5F7`)
- Logo : `public/brand/` (fichier fourni par le client, versions navy et blanche
  générées automatiquement en détourant le fond) — utilisé via le composant
  `src/components/ui/Mark.tsx`
- Composants de base : `src/components/ui/` (Button, Container, PageHeader)

## État actuel

- [x] Design system (couleurs, typographie, composants UI de base)
- [x] Logo client intégré (versions navy / blanche / favicons)
- [x] Navbar + Footer
- [x] Page d'accueil complète (hero, présentation, services, méthodologie, secteurs, FAQ, CTA)
- [x] Pages internes : Services, Méthodologie, Blog (3 articles MDX), Contact,
      À propos, Recrutement, Devis, Confier une créance, Mentions légales, Confidentialité
- [ ] Formulaires connectés à un envoi réel (validation Zod, Resend, Turnstile)
- [ ] Internationalisation FR/AR (next-intl, RTL)
- [ ] SEO technique avancé (sitemap.xml, robots.txt, Schema.org)

## Remarque sur les coordonnées

L'adresse e-mail affichée (`recouvexpress@gmail.com`) est celle fournie dans
le cahier des charges d'origine. Le nom de domaine n'a pas été mis à jour
vers "marecouv" car aucune adresse `@marecouv.ma` (ou équivalent) n'a été
confirmée comme existante — à corriger dès qu'une adresse officielle sous le
nouveau nom sera disponible.
