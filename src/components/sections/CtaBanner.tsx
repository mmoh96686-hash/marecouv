import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute -top-10 -left-8 w-40 h-40 opacity-[0.12]" aria-hidden="true">
        <Mark size={160} variant="white" className="w-full h-full object-contain" />
      </div>
      <Container className="py-16 text-center relative">
        <h2 className="font-display font-medium text-2xl text-white mb-6">
          Confiez-nous votre dossier dès aujourd&apos;hui
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/confier-une-creance" variant="secondary" className="bg-white text-navy border-white hover:bg-stone">
            Confier une créance
          </Button>
          <Button href="/devis" variant="ghost">
            Demander un devis
          </Button>
        </div>
      </Container>
    </section>
  );
}
