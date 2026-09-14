export const site = {
  name: "Ouakrim IT Services",
  owner: "Othman Ait Ouakrim",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  title: "Othman Ait Ouakrim — Freelance Backend & DevOps à Toulouse",
  description:
    "Développement backend, DevOps, cloud et automatisation à Toulouse. Othman Ait Ouakrim accompagne startups, PME et agences pour développer, déployer et fiabiliser leurs applications.",
};
export const legal = {
  siren: process.env.LEGAL_SIREN || "[SIREN À COMPLÉTER]",
  siret: process.env.LEGAL_SIRET || "[SIRET À COMPLÉTER]",
  address: process.env.LEGAL_ADDRESS || "[ADRESSE À COMPLÉTER]",
  director:
    process.env.LEGAL_PUBLICATION_DIRECTOR || "[RESPONSABLE DE PUBLICATION À COMPLÉTER]",
};
export const needs = [
  "Développement Web / API",
  "Développement Backend",
  "DevOps",
  "Infrastructure / Cloud",
  "Automatisation",
  "Autre",
] as const;
