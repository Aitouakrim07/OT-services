export const site = {
  name: "Ouakrim IT Services",
  owner: "Othman Ait Ouakrim",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  title: "Solutions web pour petites entreprises à Toulouse | Ouakrim IT Services",
  description:
    "Sites professionnels, prise de rendez-vous, demandes de devis et outils web sur mesure pour petites entreprises. Othman Ait Ouakrim, freelance à Toulouse et partout en France.",
};
export const legal = {
  siren: process.env.LEGAL_SIREN || "[SIREN À COMPLÉTER]",
  siret: process.env.LEGAL_SIRET || "[SIRET À COMPLÉTER]",
  address: process.env.LEGAL_ADDRESS || "[ADRESSE À COMPLÉTER]",
  director:
    process.env.LEGAL_PUBLICATION_DIRECTOR || "[RESPONSABLE DE PUBLICATION À COMPLÉTER]",
};
export const needs = [
  "Créer ou refaire mon site",
  "Obtenir plus de demandes",
  "Réservation / prise de rendez-vous",
  "Demandes de devis",
  "Espace client",
  "Automatiser une tâche",
  "Créer un outil interne",
  "Autre",
  "Je ne sais pas encore",
] as const;
