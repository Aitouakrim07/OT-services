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
export function Brand() {
  return (
    <a
      href="/#accueil"
      className="brand"
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
