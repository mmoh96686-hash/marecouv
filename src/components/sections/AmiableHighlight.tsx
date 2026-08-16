import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const reasons = [
  "Le dialogue préserve une relation commerciale que le judiciaire referme.",
  "Un débiteur en difficulté temporaire répond souvent mieux à une négociation qu'à une sommation.",
  "C'est en général la voie la plus rapide vers l'encaissement.",
];

export function AmiableHighlight() {
  return (
    <section id="recouvrement-amiable" className="bg-stone border-t border-stone-line">
      <Container className="py-16 grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-4">
            Notre point de départ
          </p>
          <h2 className="font-display text-2xl lg:text-[28px] leading-[1.3] text-navy mb-5 max-w-lg">
            Avant d&apos;envisager une procédure, nous tentons toujours le
            recouvrement amiable
          </h2>
          <p className="text-[15px] text-ink-secondary leading-relaxed max-w-lg mb-6">
            Un débiteur qui ne paie pas n&apos;est pas toujours de mauvaise
            foi. Un problème de trésorerie, un désaccord sur une prestation,
            une facture égarée : ces situations se résolvent souvent par un
            échange direct et bien mené, sans qu&apos;il soit nécessaire
            d&apos;aller plus loin.
          </p>
          <Button href="/services#recouvrement-amiable" variant="primary">
            Comprendre notre méthode
          </Button>
        </div>

        <div className="bg-navy rounded-[10px] p-7">
          <ul className="space-y-5">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white"
                  aria-hidden="true"
                />
                <span className="text-sm text-white/85 leading-relaxed">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
