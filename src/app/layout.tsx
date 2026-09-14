import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: site.title, template: "%s | Ouakrim IT Services" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
