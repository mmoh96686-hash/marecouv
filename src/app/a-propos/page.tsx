import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "À propos | Marecouv",
  description:
    "Marecouv accompagne les entreprises marocaines dans la récupération de leurs créances, avec une priorité donnée au dialogue.",
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="À propos"
          title="Une équipe qui traite chaque dossier comme s'il était le seul"
        />
        <Container className="py-16 max-w-2xl space-y-6 text-[15px] text-ink-secondary leading-relaxed">
          <p>
            Marecouv est né d&apos;un constat simple : trop d&apos;entreprises
            marocaines perdent du temps, de l&apos;argent et de
            l&apos;énergie à courir après des factures impayées, souvent
            avec des méthodes qui abîment leurs relations commerciales plus
            qu&apos;elles ne résolvent le problème.
          </p>
          <p>
            Nous avons choisi une autre voie : le dialogue en premier, la
            fermeté quand elle devient nécessaire, et un dossier suivi par
            la même personne du premier contact jusqu&apos;à
            l&apos;encaissement. Basés à Casablanca, nous intervenons sur
            l&apos;ensemble du territoire marocain, pour des PME comme pour
            des groupes établis.
          </p>
          <h2 className="font-display text-xl text-navy pt-4">
            Notre engagement
          </h2>
          <p>
            Chaque dossier est traité dans le respect de la législation
            marocaine et dans la plus stricte confidentialité. Nous ne
            promettons pas de résultat garanti, personne ne le peut
            honnêtement dans ce métier, mais nous nous engageons à vous
            donner, à chaque étape, une vision claire de ce qui est
            probable, pas seulement de ce qui est possible.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
