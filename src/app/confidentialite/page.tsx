import type { Metadata } from "next";
import { site, legal } from "@/lib/site";
export const metadata: Metadata = {
  title: "Politique de confidentialité",
};
export default function Privacy() {
  return (
    <main id="main" className="container legal-page">
      <p className="eyebrow">VOS DONNÉES</p>
      <h1>Politique de confidentialité</h1>
      <h2>Responsable du traitement</h2>
      <p>
        Ouakrim IT Services — Othman Ait Ouakrim.
        <br />
        {legal.address}
        <br />
        Contact : {site.email || "[EMAIL À COMPLÉTER]"}
      </p>
      <h2>Formulaire de contact</h2>
      <p>
        Le formulaire recueille votre nom, email, entreprise et téléphone si renseignés, type
        de besoin et message. Ces données servent à répondre à votre demande et
        à préparer un éventuel échange professionnel. Évitez de transmettre des
        données sensibles.
      </p>
      <p>
        Les demandes précontractuelles reposent sur les mesures prises à votre
        demande avant un éventuel contrat. Les autres demandes reposent sur
        l’intérêt légitime de l’entreprise à répondre aux messages reçus.
      </p>
      <h2>Destinataires et conservation</h2>
      <p>
        Les messages sont envoyés via Gmail à Othman Ait Ouakrim. Google traite
        les données nécessaires à leur transmission et à leur stockage dans la
        messagerie. Le site ne conserve pas les messages dans une base de
        données.
      </p>
      <p>
        Service de messagerie : Gmail (Google). [À COMPLÉTER : modalités de
        traitement et garanties des transferts éventuels selon le compte
        utilisé.]
      </p>
      <p>
        [DURÉE DE CONSERVATION DES EMAILS À COMPLÉTER selon les pratiques
        réelles et les obligations applicables.]
      </p>
      <h2>Cookies</h2>
      <p>
        Le site n’intègre ni publicité, ni outil d’analyse d’audience, ni cookie
        de suivi.
      </p>
      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la rectification ou l’effacement de vos
        données, ainsi que la limitation, l’opposition ou la portabilité lorsque
        ces droits s’appliquent. Contactez l’adresse ci-dessus. Vous pouvez
        aussi adresser une réclamation à la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>
        .
      </p>
      <a className="back-link" href="/">
        ← Retour au site
      </a>
    </main>
  );
}
