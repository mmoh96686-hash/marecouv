import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact | Marecouv",
  description:
    "Contactez Marecouv à Casablanca, par téléphone, WhatsApp, e-mail, ou formulaire. Nous intervenons sur l'ensemble du territoire marocain.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Parlons de votre dossier"
          lead="Un appel de dix minutes suffit souvent pour savoir si votre situation relève de l'amiable, du judiciaire, ou d'une simple relance mieux ciblée."
        />

        <Container className="py-16 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <dl className="space-y-6 mb-10">
              <div>
                <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1">
                  Adresse
                </dt>
                <dd className="text-sm text-ink-secondary">
                  40, Rue Abou Rakrak, 2ème étage, N°6, Benjdia, Casablanca, Maroc
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1">
                  Téléphone
                </dt>
                <dd className="text-sm text-ink-secondary">+212 6 00 09 45 26</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1">
                  WhatsApp
                </dt>
                <dd className="text-sm text-ink-secondary">+212 6 00 09 45 62</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1">
                  E-mail
                </dt>
                <dd className="text-sm text-ink-secondary">marecoov@gmail.com</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.06em] text-ink-muted mb-1">
                  Horaires
                </dt>
                <dd className="text-sm text-ink-secondary">Lundi au vendredi, 9h à 18h</dd>
              </div>
            </dl>

            <WhatsAppButton
              label="Nous écrire sur WhatsApp"
              variant="primary"
              className="mb-8"
            />

            <div className="rounded-[10px] overflow-hidden border border-stone-line h-64">
              <iframe
                title="Localisation Marecouv, Casablanca"
                src="https://www.google.com/maps?q=40+Rue+Abou+Rakrak+Benjdia+Casablanca+Maroc&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="bg-stone rounded-[10px] p-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-ink-muted mb-1.5">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-xs text-ink-muted mb-1.5">
                  Société
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-ink-muted mb-1.5">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-ink-muted mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs text-ink-muted mb-1.5">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-ink-muted mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-stone-line bg-white px-3.5 py-2.5 text-sm focus-visible:outline-navy"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              Envoyer le message
            </Button>
            <p className="text-xs text-ink-muted">
              Les informations transmises via ce formulaire sont traitées de
              manière confidentielle.
            </p>
            <div className="pt-2 border-t border-stone-line">
              <p className="text-xs text-ink-muted mb-3">
                Vous préférez une réponse plus rapide ?
              </p>
              <WhatsAppButton
                label="Discuter sur WhatsApp"
                variant="secondary"
              />
            </div>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
