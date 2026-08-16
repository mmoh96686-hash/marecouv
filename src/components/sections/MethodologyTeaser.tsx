import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { methodologySteps } from "@/lib/methodology";

export function MethodologyTeaser() {
  return (
    <section className="bg-stone border-t border-stone-line">
      <Container className="py-16">
        <div className="flex items-baseline justify-between mb-8">
          <Eyebrow>Notre méthode, en cinq étapes</Eyebrow>
          <Link
            href="/methodologie"
            className="text-xs text-navy font-medium hover:underline hidden sm:inline"
          >
            Voir le détail
          </Link>
        </div>
        <div className="grid sm:grid-cols-5 gap-x-6 gap-y-8">
          {methodologySteps.map((step) => (
            <div key={step.index}>
              <p className="font-display text-lg text-navy mb-2">
                {step.index}
              </p>
              <p className="font-medium text-sm text-navy mb-1">
                {step.title}
              </p>
              <p className="text-xs text-ink-muted leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/methodologie"
          className="text-xs text-navy font-medium hover:underline sm:hidden inline-block mt-8"
        >
          Voir le détail
        </Link>
      </Container>
    </section>
  );
}
