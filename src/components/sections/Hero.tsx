import { Button } from "@/components/ui/Button";
import { Mark } from "@/components/ui/Mark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 items-stretch">
      <div className="flex flex-col justify-center px-6 lg:px-14 py-16 lg:py-24">
        <h1 className="font-display font-medium text-[32px] leading-[1.2] lg:text-[40px] text-navy mb-5 max-w-md">
          La récupération de vos créances, gérée avec rigueur et discrétion
        </h1>
        <p className="text-[15px] text-ink-secondary leading-relaxed mb-8 max-w-sm">
          Recouvrement amiable et judiciaire pour les entreprises
          marocaines, partout sur le territoire.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/confier-une-creance" variant="primary">
            Confier une créance
          </Button>
          <Button href="/devis" variant="secondary">
            Demander un devis
          </Button>
          <WhatsAppButton label="WhatsApp" variant="secondary" />
        </div>
      </div>

      <div className="relative min-h-[320px] lg:min-h-[420px] bg-navy overflow-hidden flex items-center justify-center">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56 overflow-hidden">
          <Mark size={224} variant="white" className="w-full h-full object-contain" />
          <div
            className="mark-sheen absolute inset-y-0 -left-1/2 w-1/3 bg-white/30 blur-xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
