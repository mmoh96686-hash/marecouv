import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";

const links = [
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/methodologie", label: "Méthodologie" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-line">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Mark size={26} />
          <span className="font-medium text-[15px] text-navy">Marecouv</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-secondary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Changer de langue"
            className="hidden sm:inline text-xs text-ink-muted hover:text-navy"
          >
            FR · ع
          </button>
          <Button href="/devis" variant="primary" className="px-4 py-2.5 text-xs">
            Demander un devis
          </Button>
        </div>
      </Container>
    </header>
  );
}
