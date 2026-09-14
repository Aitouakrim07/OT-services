import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={secondary ? "button secondary" : "button"} href={href}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
export function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Brand() {
  return (
    <a
      href="/#accueil"
      className="brand"
      aria-label="OA. Ouakrim IT Services, accueil"
    >
      <span className="monogram">
        OA<span>.</span>
      </span>
      <span>
        OUAKRIM<span className="brand-sub">IT SERVICES</span>
      </span>
    </a>
  );
}
