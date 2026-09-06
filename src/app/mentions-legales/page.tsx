import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Mentions légales | Marecouv",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader eyebrow="Informations légales" title="Mentions légales" />
        <Container className="py-16 max-w-2xl space-y-6 text-sm text-ink-secondary leading-relaxed">
          <div>
            <h2 className="font-medium text-navy mb-1">Éditeur du site</h2>
            <p>
              Marecouv, société marocaine spécialisée dans le recouvrement
              de créances.
              <br />
              Siège social : 40, Rue Abou Rakrak, 2ème étage, N°6, Benjdia,
              Casablanca, Maroc.
              <br />
              Téléphone : +212 6 00 09 45 26. E-mail : marecoov@gmail.com
            </p>
          </div>
          <div>
            <h2 className="font-medium text-navy mb-1">Hébergement</h2>
            <p>Informations d&apos;hébergement à compléter avant mise en ligne.</p>
          </div>
          <div>
            <h2 className="font-medium text-navy mb-1">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes,
              logo, identité visuelle) est la propriété de Marecouv, sauf
              mention contraire.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
