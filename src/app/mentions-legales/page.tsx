import type { Metadata } from "next";
import { legal, site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Mentions légales",
};
export default function Legal() {
  return (
    <main id="main" className="container legal-page">
      <p className="eyebrow">INFORMATIONS DU SITE</p>
      <h1>Mentions légales</h1>
      <h2>Éditeur</h2>
      <p>
        Ouakrim IT Services — Othman Ait Ouakrim
        <br />
        Entrepreneur individuel, micro-entreprise
      </p>
      <dl>
        {[
          ["SIREN", legal.siren],
          ["SIRET", legal.siret],
          ["Adresse", legal.address],
          ["Email", site.email || "[EMAIL À COMPLÉTER]"],
          ["Responsable de publication", legal.director],
        ].map(([a, b]) => (
          <div key={a}>
            <dt>{a}</dt>
            <dd>{b}</dd>
          </div>
        ))}
      </dl>
      <h2>Données personnelles</h2>
      <p>
        Consultez la <a href="/confidentialite">politique de confidentialité</a>{" "}
        pour les informations relatives au formulaire.
      </p>
      <a className="back-link" href="/">
        ← Retour au site
      </a>
    </main>
  );
}
