import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { methodologySteps } from "@/lib/methodology";

export const metadata: Metadata = {
  title: "Notre méthodologie | Marecouv",
  description:
    "De l'analyse du dossier au suivi du règlement : les cinq étapes de notre méthode de recouvrement de créances.",
};

export default function MethodologiePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Notre méthodologie"
          title="Une méthode, pas une formule"
          lead="Chaque dossier suit ces cinq étapes, mais leur contenu (durée, ton, intensité) s'adapte au débiteur et à la situation. Ce qui ne change pas, c'est la rigueur avec laquelle chacune est menée."
        />

        <Container className="py-16">
          <div className="max-w-3xl">
            {methodologySteps.map((step, i) => (
              <div
                key={step.index}
                className="grid sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 border-t border-stone-line py-8"
              >
                <p className="font-display text-3xl text-navy">
                  {step.index}
                </p>
                <div>
                  <h2 className="font-display text-xl text-navy mb-2">
                    {step.title}
                  </h2>
                  <p className="text-[15px] text-ink-secondary leading-relaxed max-w-lg">
                    {step.text}
                  </p>
                  {i === 3 && (
                    <p className="text-xs text-ink-muted mt-3 leading-relaxed max-w-lg">
                      Cette étape n&apos;intervient que si les relances
                      amiables sérieuses n&apos;ont pas abouti, jamais par
                      principe.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
