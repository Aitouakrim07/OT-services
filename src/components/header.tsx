"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand, ButtonLink } from "./ui";
const links = [
  ["Accueil", "accueil"],
  ["Services", "services"],
  ["Réalisations", "realisations"],
  ["À propos", "a-propos"],
  ["Technologies", "technologies"],
  ["Contact", "contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <button
          ref={toggle}
          className="menu-button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={open ? "nav is-open" : "nav"}
          aria-label="Navigation principale"
        >
          {links.map(([label, id]) => (
            <a key={id} href={"/#" + id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <ButtonLink href="/#contact">Discuter de votre projet</ButtonLink>
        </div>
      </div>
    </header>
  );
}
