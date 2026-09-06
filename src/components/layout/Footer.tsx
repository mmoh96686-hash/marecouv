import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";

export function Footer() {
  return (
    <footer className="border-t border-stone-line bg-white">
      <Container className="py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Mark size={22} />
            <span className="font-medium text-sm text-navy">Marecouv</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed max-w-[220px]">
            Recouvrement amiable et judiciaire de créances pour les
            entreprises marocaines.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-ink-secondary">
            <li><Link href="/a-propos" className="hover:text-navy">À propos</Link></li>
            <li><Link href="/services" className="hover:text-navy">Services</Link></li>
            <li><Link href="/methodologie" className="hover:text-navy">Méthodologie</Link></li>
            <li><Link href="/recrutement" className="hover:text-navy">Recrutement</Link></li>
            <li><Link href="/blog" className="hover:text-navy">Blog</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-ink-secondary">
            <li>40, Rue Abou Rakrak, Benjdia, Casablanca</li>
            <li>+212 6 00 09 45 26</li>
            <li>marecoov@gmail.com</li>
            <li>Lundi au vendredi, 9h à 18h</li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-muted mb-3">
            Langues
          </p>
          <p className="text-sm text-ink-secondary mb-6">Français · العربية</p>
          <ul className="space-y-2 text-xs text-ink-muted">
            <li><Link href="/mentions-legales" className="hover:text-navy">Mentions légales</Link></li>
            <li><Link href="/confidentialite" className="hover:text-navy">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-stone-line">
        <Container className="py-4 text-xs text-ink-muted">
          © {new Date().getFullYear()} Marecouv. Tous droits réservés.
        </Container>
      </div>
    </footer>
  );
}
