import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <section className="border-t border-stone-line">
      <Container className="py-16">
        <Eyebrow>Ce que nous faisons</Eyebrow>
        <div className="border-t border-stone-line">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group flex items-baseline gap-6 py-5 border-b border-stone-line hover:pl-2 transition-all"
            >
              <span className="text-xs text-ink-muted w-6 flex-shrink-0">
                {service.index}
              </span>
              <span className="font-display text-lg text-navy flex-shrink-0 w-full max-w-[220px]">
                {service.title}
              </span>
              <span className="hidden sm:block text-sm text-ink-muted flex-1">
                {service.summary}
              </span>
              <span className="hidden md:inline text-xs text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                Découvrir
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
