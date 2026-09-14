import Link from "next/link";
import { Brand } from "./ui";
export function Footer() {
  return (
    <footer className="container footer">
      <Brand />
      <p>© {new Date().getFullYear()} Ouakrim IT Services</p>
      <div>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/confidentialite">Confidentialité</Link>
      </div>
    </footer>
  );
}
