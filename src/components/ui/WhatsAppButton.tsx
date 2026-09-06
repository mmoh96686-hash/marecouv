import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { getWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-150";

const variants: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary: "bg-navy text-white hover:bg-navy-strong",
  secondary: "bg-white text-navy border border-navy hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-white border border-white/30 hover:border-white/60",
};

/**
 * Bouton WhatsApp réutilisable. Reprend exactement le style des boutons
 * existants (mêmes classes de base, mêmes variantes de couleur) pour
 * s'intégrer sans rien changer à l'identité visuelle du site.
 */
export function WhatsAppButton({
  label = "Discuter sur WhatsApp",
  message = WHATSAPP_DEFAULT_MESSAGE,
  variant = "secondary",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (ouvre WhatsApp dans un nouvel onglet)`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
      {label}
    </a>
  );
}
