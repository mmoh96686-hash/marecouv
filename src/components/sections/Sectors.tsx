import { Container, Eyebrow } from "@/components/ui/Container";

const sectors = [
  "l'industrie",
  "le BTP",
  "l'immobilier",
  "la santé",
  "la distribution",
  "les banques et assurances",
  "les professions libérales",
];

export function Sectors() {
  return (
    <Container className="py-16 border-t border-stone-line">
      <Eyebrow>Secteurs accompagnés</Eyebrow>
      <p className="font-display text-xl lg:text-2xl leading-[1.6] text-navy max-w-2xl">
        Nous accompagnons des entreprises de toutes tailles, de{" "}
        {sectors.slice(0, -1).join(", ")} et {sectors[sectors.length - 1]},
        partout au Maroc.
      </p>
    </Container>
  );
}
