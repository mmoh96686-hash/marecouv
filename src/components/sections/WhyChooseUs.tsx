import { Container } from "@/components/ui/Container";

const reasons = [
  {
    title: "Un interlocuteur, du début à la fin",
    text: "La personne qui ouvre votre dossier est celle qui le suit jusqu'à l'encaissement.",
  },
  {
    title: "Des honoraires posés dès le devis",
    text: "La structure tarifaire est communiquée avant que vous ne vous engagiez, pas découverte en cours de dossier.",
  },
  {
    title: "L'amiable avant la confrontation",
    text: "Nous privilégions le dialogue chaque fois qu'il a une chance réelle d'aboutir.",
  },
  {
    title: "Un dossier documenté à chaque étape",
    text: "Vous savez toujours où en est votre créance, sans avoir à demander.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-stone-line">
      <Container className="py-16">
        <div className="flex gap-4">
          <div className="w-[2px] bg-navy flex-shrink-0" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-6">
              Pourquoi choisir Marecouv
            </p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-navy"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-sm text-navy mb-1">
                      {reason.title}
                    </p>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
