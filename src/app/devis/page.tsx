import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Demande de devis | Marecouv",
  description: "Demandez un devis pour votre dossier de recouvrement.",
};

export default function DevisPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Demande de devis"
          title="Décrivez votre situation en quelques lignes"
          lead="Nous revenons vers vous sous 24 à 48h ouvrées avec une première évaluation."
        />
        <Container className="py-16 max-w-xl">
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs text-ink-muted mb-1.5">Nom</label>
                <input id="name" name="name" required className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs text-ink-muted mb-1.5">Société</label>
                <input id="company" name="company" className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs text-ink-muted mb-1.5">Téléphone</label>
                <input id="phone" name="phone" type="tel" className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-ink-muted mb-1.5">E-mail</label>
                <input id="email" name="email" type="email" required className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-xs text-ink-muted mb-1.5">Service demandé</label>
              <select id="service" name="service" className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy">
                <option>Recouvrement amiable</option>
                <option>Recouvrement judiciaire</option>
                <option>Gestion du poste client</option>
                <option>Audit des créances</option>
                <option>Enquête patrimoniale</option>
                <option>Conseil et prévention</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-xs text-ink-muted mb-1.5">Description du besoin</label>
              <textarea id="description" name="description" rows={5} required className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
            </div>
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              Envoyer la demande
            </Button>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
