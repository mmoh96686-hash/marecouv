import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="border-b border-stone-line bg-stone">
      <Container className="py-16 lg:py-20">
        <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display font-medium text-[30px] lg:text-[36px] leading-[1.25] text-navy max-w-2xl">
          {title}
        </h1>
        {lead && (
          <p className="text-[15px] text-ink-secondary leading-relaxed mt-4 max-w-xl">
            {lead}
          </p>
        )}
      </Container>
    </div>
  );
}
