# MLC Head Spa

Site vitrine construit avec React, TypeScript, Vite et Tailwind CSS.

## Prérequis

- Node.js 22.12 ou supérieur
- npm

## Développement

```bash
npm ci
npm run dev
```

## Vérification et production

```bash
npm run build
npm run preview
```

La commande `build` lance le contrôle TypeScript puis génère le site optimisé dans `dist/`.

## Organisation du code

- `src/main.tsx` : point d’entrée React et affichage des mentions légales selon le fragment d’URL.
- `src/components/` : navigation, pied de page, sections de la page d’accueil et composants partagés.
- `src/data/site.ts` : coordonnées, textes, rituels, tarifs, produits et FAQ.
- `src/assets/` : images importées par le code ; Vite les versionne et les copie dans le build de production.
- `index.html` : métadonnées et structure HTML initiale.
- `.github/workflows/main.yml` : déploiement automatique après un push ; le secret GitHub `ftp_password` doit être configuré.

Le site est front-end uniquement. Le bouton WhatsApp est affiché sur les pages et génère un lien de contact à partir du numéro défini dans `src/data/site.ts`.
