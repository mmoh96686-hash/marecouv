import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nos services | Marecouv",
  description:
    "Recouvrement amiable, recouvrement judiciaire, gestion du poste client, audit des créances, enquête patrimoniale et conseil en prévention des impayés.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Nos services"
          title="Six façons de reprendre la main sur vos impayés"
          lead="Chaque dossier commence par la même question : quelle approche a le plus de chances d'aboutir, pour ce débiteur précis ? La réponse détermine le service, ou la combinaison de services, que nous mobilisons."
        />

        <Container className="py-16 space-y-20">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 grid lg:grid-cols-[80px_1fr] gap-4 lg:gap-10 border-t border-stone-line pt-10"
            >
              <p className="font-display text-2xl text-navy">
                {service.index}
              </p>
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl text-navy mb-3">
                  {service.title}
                  {i === 0 && (
                    <span className="ml-3 align-middle text-xs font-sans font-medium text-navy bg-stone px-2.5 py-1 rounded-full">
                      Service principal
                    </span>
                  )}
                </h2>
                <p className="text-[15px] text-ink-secondary leading-relaxed mb-6">
                  {service.summary}
                </p>
                <dl className="grid sm:grid-cols-3 gap-6 text-sm mb-6">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1.5">
                      Pour qui
                    </dt>
                    <dd className="text-ink-secondary leading-relaxed">
                      {service.audience}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1.5">
                      Déroulement
                    </dt>
                    <dd className="text-ink-secondary leading-relaxed">
                      {service.process}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1.5">
                      Ce que vous y gagnez
                    </dt>
                    <dd className="text-ink-secondary leading-relaxed">
                      {service.benefit}
                    </dd>
                  </div>
                </dl>
                <Button href="/devis" variant="secondary" className="px-4 py-2.5 text-xs">
                  Demander un devis pour ce service
                </Button>
              </div>
            </article>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
