# Ouakrim IT Services

Site Next.js, TypeScript, Tailwind CSS et Lucide.

## Lancer

Node.js 22 LTS recommandé.

- npm ci
- Copier .env.example vers .env.local
- npm run dev
- Ouvrir http://localhost:3000

Production : npm run build puis npm start.
Vérifier TypeScript : npm run typecheck.

## Recevoir les formulaires dans Gmail

Renseigner uniquement ces deux variables privées dans .env.local :
GMAIL_USER=votre-adresse@gmail.com
GMAIL_APP_PASSWORD=votre-mot-de-passe-application

Le serveur se connecte au SMTP Gmail avec Nodemailer. Les messages sont envoyés de votre compte à votre compte. Le champ Reply-To contient l’email du visiteur : le bouton Répondre dans Gmail lui répondra directement.
Utiliser un mot de passe d’application Google avec la validation en deux étapes, pas le mot de passe habituel. Les espaces du mot de passe d’application sont retirés automatiquement.
Ne pas mettre le mot de passe dans une variable NEXT_PUBLIC_, dans le navigateur ou dans Git. .env.local est ignoré.
Guide officiel : https://support.google.com/mail/answer/185833?hl=fr
Documentation Nodemailer : https://nodemailer.com/guides/using-gmail

Sans configuration, le formulaire indique qu’aucun message n’a été envoyé. Le succès s’affiche après acceptation par Gmail. Vérifier la réception lors de l’activation. Validation serveur, contrôle d’origine et champ piège sont conservés. Aucun email envoyé pendant les vérifications sans identifiants.

## Informations à compléter

Dans .env.local :

- NEXT_PUBLIC_CONTACT_EMAIL : email visible sur le site
- NEXT_PUBLIC_LINKEDIN_URL / NEXT_PUBLIC_GITHUB_URL : profils facultatifs
- LEGAL_SIREN / LEGAL_SIRET : identifiants de l’entreprise
- LEGAL_ADDRESS : adresse
- LEGAL_PUBLICATION_DIRECTOR : responsable de publication

Les placeholders de confidentialité (conservation des emails et modalités Gmail) sont dans src/app/confidentialite/page.tsx.
Aucune URL du site n’est à renseigner. Les canonical, URL Open Graph et sitemap sont retirés pour le moment ; titres, descriptions, Open Graph textuel et données structurées restent présents.

## Modifier

- src/app/page.tsx : contenus, services et projets
- src/app/globals.css : design et responsive
- src/components : header, footer, formulaire et éléments réutilisables
- src/lib/site.ts : configuration publique et légale
- src/app/api/contact/route.ts : envoi Gmail
- src/app/mentions-legales/page.tsx et confidentialite/page.tsx : pages légales

L’ancienne version statique est inactive dans legacy-static.

## Présentation visuelle

Les projets sont présentés avec des schémas propres à chaque réalisation dans src/components/project-visual.tsx. Ce sont des schémas explicatifs, pas des captures des applications. Les contributions détaillées et les outils secondaires se déplient avec des éléments details natifs, accessibles au clavier.
