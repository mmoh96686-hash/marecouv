import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Confier une créance | Marecouv",
  description:
    "Transmettez votre dossier de recouvrement en toute confidentialité.",
};

export default function ConfierUneCreancePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Dossier de recouvrement"
          title="Confier une créance"
          lead="Les informations transmises ici sont traitées de manière strictement confidentielle."
        />
        <Container className="py-16 max-w-2xl">
          <form className="space-y-10">
            <fieldset className="space-y-4">
              <legend className="font-display text-lg text-navy mb-2">
                Vous, le créancier
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Nom de l'entreprise" required className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Nom du responsable" required className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Téléphone" type="tel" className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="E-mail" type="email" required className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-display text-lg text-navy mb-2">
                Le débiteur
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Nom" required className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Société" className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Téléphone (optionnel)" type="tel" className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Ville" className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-display text-lg text-navy mb-2">
                La créance
              </legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Montant (MAD)" type="number" required className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
                <input placeholder="Date d'échéance" type="date" className="rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
              </div>
              <textarea placeholder="Nature de la créance et description" rows={4} required className="w-full rounded-md border border-stone-line px-3.5 py-2.5 text-sm focus-visible:outline-navy" />
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-display text-lg text-navy mb-2">
                Pièces justificatives
              </legend>
              <input type="file" multiple className="text-sm text-ink-secondary" accept=".pdf,.jpg,.jpeg,.png" />
              <p className="text-xs text-ink-muted">
                Facture, contrat, bon de commande, mise en demeure. PDF ou
                image, 10 Mo maximum par fichier.
              </p>
            </fieldset>

            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              Transmettre le dossier
            </Button>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
