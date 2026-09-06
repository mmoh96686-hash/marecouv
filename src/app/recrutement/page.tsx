import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Recrutement | Marecouv",
  description: "Rejoindre Marecouv, candidatures spontanées bienvenues.",
};

export default function RecrutementPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Recrutement"
          title="Rejoindre l'équipe"
          lead="Aucun poste n'est ouvert pour le moment. Nous restons attentifs aux candidatures spontanées, en particulier pour des profils négociateurs et juridiques."
        />
        <Container className="py-16 max-w-xl">
          <p className="text-[15px] text-ink-secondary leading-relaxed mb-8">
            Envoyez-nous votre CV et quelques lignes sur ce qui vous
            intéresse dans le recouvrement de créances. Nous répondons à
            chaque candidature, même en l&apos;absence de poste ouvert.
          </p>
          <Button href="mailto:marecoov@gmail.com" variant="primary">
            Envoyer une candidature spontanée
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
