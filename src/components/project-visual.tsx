import {
  Server,
  Layers3,
  Braces,
  UserRound,
  FileText,
  ShieldCheck,
  Workflow,
  Terminal,
  Network,
} from "lucide-react";
export function ProjectVisual({
  type,
}: {
  type: "edge" | "recruitment" | "spark";
}) {
  return (
    <div
      className={"project-art art-" + type}
      role="img"
      aria-label={
        type === "edge"
          ? "Schéma : plateforme de gestion connectée aux équipements edge"
          : type === "recruitment"
            ? "Schéma : candidats et recruteurs reliés aux candidatures et aux rôles"
            : "Schéma : Terraform et Ansible configurent les machines du cluster Spark"
      }
    >
      <div className="art-header">
        <span>
          {type === "edge"
            ? "EDGE / ORCHESTRATION"
            : type === "recruitment"
              ? "RECRUTEMENT / WORKFLOW"
              : "INFRASTRUCTURE / AS CODE"}
        </span>
        <span>0{type === "edge" ? 1 : type === "recruitment" ? 2 : 3}</span>
      </div>
      {type === "edge" ? (
        <div className="edge-network">
          <div className="visual-node central">
            <Braces size={24} />
            <strong>Plateforme de gestion</strong>
          </div>
          <div className="network-trunk" />
          <div className="visual-node orchestration">
            <Layers3 size={20} />
            <span>K3s + Helm</span>
          </div>
          <div className="network-trunk" />
          <div className="edge-devices">
            {["uCPE", "uCPE", "uCPE"].map((n, i) => (
              <div className="visual-node device" key={i}>
                <Server size={22} />
                <span>{n}</span>
              </div>
            ))}
          </div>
          <div className="art-footer">
            <ShieldCheck size={14} />
            <span>Accès & déploiements à distance</span>
          </div>
        </div>
      ) : type === "recruitment" ? (
        <div className="recruitment-flow">
          <div className="role-row">
            <div className="visual-node role">
              <UserRound size={21} />
              <span>Candidat</span>
            </div>
            <div className="visual-node role">
              <UserRound size={21} />
              <span>Recruteur</span>
            </div>
          </div>
          <div className="network-trunk" />
          <div className="application-doc">
            <FileText size={30} />
            <div>
              <strong>Candidature</strong>
              <span className="document-line" />
              <span className="document-line short" />
            </div>
            <Workflow size={20} />
          </div>
          <div className="workflow-stages">
            <span>Profil</span>
            <i />
            <span>CV</span>
            <i />
            <span>Suivi</span>
          </div>
          <div className="art-footer">
            <ShieldCheck size={14} />
            <span>Rôles & authentification</span>
          </div>
        </div>
      ) : (
        <div className="spark-flow">
          <div className="iac-command">
            <Terminal size={18} />
            <span>
              Terraform <i>→</i> Ansible
            </span>
          </div>
          <div className="network-trunk" />
          <div className="spark-cluster">
            <div className="visual-node central">
              <Network size={23} />
              <strong>Apache Spark</strong>
            </div>
            <div className="cluster-workers">
              {[1, 2, 3].map((n) => (
                <div key={n}>
                  <Server size={24} />
                  <span>VM 0{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="art-footer">
            <Workflow size={14} />
            <span>Provisionner · Configurer · Exécuter</span>
          </div>
        </div>
      )}
      <span className="art-caption">Schéma du projet</span>
    </div>
  );
}
