import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/whatsapp";

/**
 * Bouton flottant global. Rendu depuis le layout racine, donc présent sur
 * toutes les pages sans avoir à le rajouter dans chaque section.
 * Couleur navy (pas le vert WhatsApp habituel) pour rester dans la
 * palette existante du site plutôt que d'introduire une nouvelle couleur.
 */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec Marecouv sur WhatsApp (ouvre WhatsApp dans un nouvel onglet)"
      title="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/20 transition-transform duration-200 hover:scale-105 hover:bg-navy-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="sr-only">Discuter sur WhatsApp</span>
    </a>
  );
}
