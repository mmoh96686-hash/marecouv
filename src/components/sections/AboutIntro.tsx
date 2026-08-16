import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutIntro() {
  return (
    <section className="border-t border-stone-line">
      <Container className="py-16 grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16">
        <p className="text-xs uppercase tracking-[0.08em] text-ink-muted">
          Qui nous sommes
        </p>
        <div className="max-w-2xl">
          <p className="font-display text-[22px] leading-[1.5] text-navy mb-5">
            Trop d&apos;entreprises marocaines perdent du temps et de
            l&apos;énergie à courir après des factures impayées, souvent
            avec des méthodes qui abîment durablement la relation
            commerciale.
          </p>
          <p className="text-[15px] text-ink-secondary leading-relaxed mb-4">
            Marecouv a été fondé sur une autre approche : le dialogue en
            premier, la fermeté quand elle devient nécessaire, et un
            dossier suivi par la même personne du premier appel jusqu&apos;à
            l&apos;encaissement. Basés à Casablanca, nous intervenons sur
            l&apos;ensemble du territoire marocain, pour des PME comme pour
            des groupes établis.
          </p>
          <Link
            href="/a-propos"
            className="text-sm text-navy font-medium hover:underline"
          >
            En savoir plus sur notre approche
          </Link>
        </div>
      </Container>
    </section>
  );
}
