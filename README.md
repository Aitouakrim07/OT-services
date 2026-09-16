# Ouakrim IT Services — site d’entreprise

Site Next.js, TypeScript et Tailwind CSS, refondu pour les petites entreprises. La version portfolio technique a été conservée séparément dans `C:\Users\othma\Desktop\ouakrim-portfolio`.

## Lancer

Node.js 22 ou compatible : `npm ci`, copier `.env.example` vers `.env.local`, puis `npm run dev`. Le site est disponible sur http://localhost:3000. Vérifier avec `npm run build` et `npm run typecheck`.

## Formulaire Gmail

Renseigner `GMAIL_USER` et `GMAIL_APP_PASSWORD` dans `.env.local` ou les variables privées de l’environnement de déploiement. Le mot de passe d’application est celui de Google (validation en deux étapes), jamais le mot de passe normal. Le serveur envoie de cette adresse vers elle-même ; `Reply-To` pointe vers l’email du prospect. Les variables ne sont pas exposées au navigateur. Sans elles, un message explicite indique que rien n’a été envoyé.

Le formulaire demande nom, email, type de besoin et message. Entreprise et téléphone sont facultatifs. Validation serveur, contrôle d’origine, limites de taille et champ piège sont conservés. Pour une publication, prévoir une limitation de requêtes sur `/api/contact`.

## À personnaliser

- `.env.example` : email visible, LinkedIn, GitHub, SIREN/SIRET, adresse et responsable de publication.
- `src/app/page.tsx` : offre, situations, textes, étapes et présentation.
- `src/app/globals.css` : palette et mise en page.
- `src/components/contact-form.tsx` et `src/lib/site.ts` : champs et choix de contact.
- `src/app/mentions-legales/page.tsx` et `src/app/confidentialite/page.tsx` : informations à compléter selon la situation réelle.

Les champs administratifs restent des placeholders. Le contact réel nécessite de renseigner Gmail avant d’envoyer le site à un prospect. Aucun prototype commercial ni faux client n’est présenté.
