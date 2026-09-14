import {
  Braces,
  Workflow,
  Server,
  ShieldCheck,
  Terminal,
  Database,
  Check,
  Link2,
  Code2,
  Mail,
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import { SectionTitle, ButtonLink } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { ProjectVisual } from "@/components/project-visual";
import { site } from "@/lib/site";

const services = [
  {
    icon: Braces,
    title: "Backend",
    text: "API, données et intégrations pour faire avancer votre produit.",
    benefit: "Une base fiable, prête à évoluer.",
    flow: ["API", "Métier", "Données"],
  },
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    text: "Tests et déploiements automatisés, du dépôt à la production.",
    benefit: "Moins de manipulations à chaque livraison.",
    flow: ["Code", "Tests", "Déploiement"],
  },
  {
    icon: Server,
    title: "Cloud & Infrastructure",
    text: "Des environnements Linux configurés et provisionnés par le code.",
    benefit: "Une infrastructure reproductible.",
    flow: ["Provisionner", "Configurer", "Exploiter"],
  },
  {
    icon: ShieldCheck,
    title: "Automatisation & accès",
    text: "Des services connectés, des tâches automatisées et des rôles définis.",
    benefit: "Des opérations et des accès maîtrisés.",
    flow: ["Connecter", "Automatiser", "Sécuriser"],
  },
];
const projects = [
  {
    type: "edge" as const,
    context: "MY IT CREW",
    title: "Une plateforme pour piloter l’edge.",
    summary:
      "Gestion des uCPE, déploiement d’applications et accès distant sécurisé.",
    tags: ["Node.js", "K3s / Helm", "Keycloak"],
    detail:
      "Plateforme Next.js et backend Node.js avec PostgreSQL/Prisma. Orchestration K3s et Helm, terminal WebSocket, RBAC Keycloak, RabbitMQ, microservice Go et CI/CD GitHub Actions sur Linux.",
  },
  {
    type: "recruitment" as const,
    context: "ELYTRALUXE",
    title: "Le recrutement, dans un même outil.",
    summary:
      "Candidats, recruteurs et administrateurs réunis autour des candidatures.",
    tags: ["React / Node.js", "PostgreSQL", "RBAC"],
    detail:
      "API Node.js et interface React pour les candidatures et CV. Données PostgreSQL/Prisma, authentification Keycloak et gestion des rôles adaptés aux différents utilisateurs.",
  },
  {
    type: "spark" as const,
    context: "PROJET INFRASTRUCTURE",
    title: "Un cluster Spark créé par le code.",
    summary:
      "Machines virtuelles et configuration Linux automatisées, sans répétition manuelle.",
    tags: ["Terraform", "Ansible", "Linux"],
    detail:
      "Terraform provisionne les machines virtuelles sur QEMU/KVM. Ansible configure le cluster Apache Spark sous Ubuntu Server, avec SSH et firewall.",
  },
];
const stacks = [
  [
    "Backend",
    "Node.js · TypeScript · Go",
    "Python · Next.js · React · API REST · WebSocket",
  ],
  [
    "Infrastructure",
    "Linux · Terraform · Ansible",
    "Ubuntu Server · QEMU/KVM · TCP/IP",
  ],
  ["DevOps", "Docker · Kubernetes · CI/CD", "K3s · Helm · GitHub Actions"],
  ["Data", "PostgreSQL · Prisma", "RabbitMQ"],
  ["Security", "Keycloak · OIDC · RBAC", "JWT · SSH · iptables"],
  ["Tools", "Git · GitHub", "FRP"],
];
function Architecture() {
  return (
    <div className="architecture visual-hero">
      <div className="terminal-bar">
        <Terminal size={16} />
        <span>du code à la production</span>
        <span className="architecture-tag">BACKEND + DEVOPS</span>
      </div>
      <div className="arch-content">
        <div className="architecture-heading">
          <span>01 → 03</span>
          <p>
            Un produit.
            <br />
            Une architecture cohérente.
          </p>
        </div>
        <div className="arch-node wide">
          <Braces />
          <div>
            <strong>Votre application</strong>
            <span>API & logique métier</span>
          </div>
          <Code2 className="node-decoration" />
        </div>
        <div className="connector" />
        <div className="arch-split">
          <div className="arch-node">
            <ShieldCheck />
            <div>
              <strong>Accès</strong>
              <span>Identités & rôles</span>
            </div>
          </div>
          <div className="arch-node">
            <Database />
            <div>
              <strong>Données</strong>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="connector" />
        <div className="arch-node wide accent">
          <Layers3 />
          <div>
            <strong>Production</strong>
            <span>Infrastructure & déploiement</span>
          </div>
          <Server className="node-decoration" />
        </div>
        <div className="delivery-track">
          <span>Code</span>
          <i />
          <span>Tests</span>
          <i />
          <span>Déploiement</span>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    areaServed: { "@type": "City", name: "Toulouse" },
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Freelance Backend & DevOps",
    },
    ...(site.email ? { email: site.email } : {}),
  };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section id="accueil" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            FREELANCE BACKEND & DEVOPS · TOULOUSE
          </p>
          <h1>
            Votre backend.
            <br />
            <span>
              Prêt pour
              <br />
              la production.
            </span>
          </h1>
          <p className="hero-intro">
            Je développe, déploie et automatise vos applications. Pour les
            startups, PME et équipes qui veulent avancer.
          </p>
          <div className="cta-row">
            <ButtonLink href="#contact">Parler de mon projet</ButtonLink>
            <ButtonLink href="#realisations" secondary>
              Voir les réalisations
            </ButtonLink>
          </div>
          <p className="hero-signature">
            Othman Ait Ouakrim <span>/</span> Ingénieur & freelance
          </p>
        </div>
        <Architecture />
      </section>
      <div className="credibility">
        <div className="container">
          <p>
            BACKEND <span>/</span> DEVOPS <span>/</span> CLOUD <span>/</span>{" "}
            AUTOMATISATION
          </p>
          <div>Node.js · Docker · Kubernetes · PostgreSQL</div>
        </div>
      </div>
      <section id="services" className="container section">
        <SectionTitle
          label="01 / SERVICES"
          title="Le bon renfort, au bon endroit."
        />
        <div className="services-grid compact-services">
          {services.map(({ icon: Icon, ...s }, i) => (
            <article className="service-card" key={s.title}>
              <div className="card-top">
                <Icon size={28} aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
              <div className="service-flow" aria-label="Étapes couvertes">
                {s.flow.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p className="benefit">
                <Check size={16} aria-hidden="true" />
                {s.benefit}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section id="realisations" className="section projects-section">
        <div className="container">
          <SectionTitle
            label="02 / RÉALISATIONS"
            title="Trois projets. Du concret."
          />
          <div className="projects visual-projects">
            {projects.map((p) => (
              <article className="project" key={p.type}>
                <ProjectVisual type={p.type} />
                <div className="project-info">
                  <p className="eyebrow">{p.context}</p>
                  <h3>{p.title}</h3>
                  <p className="project-summary">{p.summary}</p>
                  <div className="pills">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <details className="project-details">
                    <summary>
                      Ma contribution <span aria-hidden="true">+</span>
                    </summary>
                    <p>{p.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section why compact-why">
        <SectionTitle
          label="03 / COLLABORATION"
          title="Une vision du code à l’infrastructure."
        />
        <div className="why-grid">
          {[
            [
              Layers3,
              "Développer & déployer",
              "Un interlocuteur pour relier l’application à son environnement.",
            ],
            [
              Workflow,
              "Automatiser & transmettre",
              "Des opérations reproductibles et une documentation utile.",
            ],
            [
              ShieldCheck,
              "Maintenir & sécuriser",
              "Du code compréhensible et des accès pensés dès le départ.",
            ],
          ].map(([Icon, a, b]) => {
            const Symbol = Icon as typeof Layers3;
            return (
              <article key={a as string}>
                <Symbol size={25} aria-hidden="true" />
                <h3>{a as string}</h3>
                <p className="muted">{b as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section id="a-propos" className="container section about compact-about">
        <div>
          <p className="eyebrow">04 / À PROPOS</p>
          <h2>
            Othman
            <br />
            Ait Ouakrim<span className="accent-text">.</span>
          </h2>
          <div className="about-bottom">Toulouse · À distance</div>
        </div>
        <div>
          <p className="about-lead">
            Le backend et l’infrastructure, avec la même attention.
          </p>
          <p className="muted">
            Ingénieur en sciences du numérique, je construis des applications,
            organise leurs accès et automatise leur déploiement. Je vous
            accompagne sur un projet complet ou un besoin technique ciblé.
          </p>
          <ButtonLink href="#contact" secondary>
            Échangeons
          </ButtonLink>
        </div>
      </section>
      <section id="technologies" className="container section stack">
        <SectionTitle
          label="05 / TECHNOLOGIES"
          title="Une stack adaptée à votre projet."
        />
        <div className="stack-grid visual-stack">
          {stacks.map(([a, b, c], i) => (
            <div key={a}>
              <span className="stack-number">0{i + 1}</span>
              <div>
                <h3>{a}</h3>
                <p>{b}</p>
                <details>
                  <summary>Autres outils</summary>
                  <p>{c}</p>
                </details>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="final-cta container">
        <div>
          <p className="eyebrow">CONSTRUISONS LA SUITE</p>
          <h2>
            Un projet à lancer ?<br />
            Un sujet à débloquer ?
          </h2>
        </div>
        <ButtonLink href="#contact">Parlons-en</ButtonLink>
      </section>
      <section id="contact" className="container section contact">
        <div>
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Votre projet
            <br />
            commence ici.
          </h2>
          <p className="muted">
            Votre besoin, vos contraintes, votre échéance. Commençons par un
            échange.
          </p>
          <div className="contact-links">
            {[
              {
                label: "Email",
                value: site.email,
                icon: Mail,
                href: site.email ? "mailto:" + site.email : "",
              },
              {
                label: "LinkedIn",
                value: site.linkedin,
                icon: Link2,
                href: site.linkedin,
              },
              {
                label: "GitHub",
                value: site.github,
                icon: Code2,
                href: site.github,
              },
            ].map(({ label, value, icon: Icon, href }) => (
              <div key={label}>
                <Icon size={19} aria-hidden="true" />
                {value ? (
                  <a
                    href={href}
                    {...(label !== "Email"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {label}
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span>
                    {label}
                    <small>[À RENSEIGNER]</small>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
