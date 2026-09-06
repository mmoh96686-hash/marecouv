/**
 * Configuration WhatsApp centralisée.
 *
 * Pour changer de numéro plus tard, il suffit de modifier WHATSAPP_NUMBER
 * ci-dessous. Aucune autre modification n'est nécessaire ailleurs dans le
 * projet : tous les boutons WhatsApp du site lisent cette valeur.
 *
 * Format attendu : indicatif pays + numéro, sans "+", sans espaces,
 * sans tirets (norme wa.me). Exemple pour +212 6 00 09 45 26 -> 212600094526
 */
export const WHATSAPP_NUMBER = "212600094526";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour, je souhaite obtenir des informations concernant vos services de recouvrement de créances. Je vous contacte depuis le site de Marecouv et j'aimerais être accompagné dans l'étude de mon dossier. Merci de me recontacter.";

/**
 * Construit une URL wa.me valide et correctement encodée.
 * wa.me redirige automatiquement vers l'app WhatsApp installée sur mobile,
 * ou vers WhatsApp Web/Desktop sur ordinateur, sans configuration supplémentaire.
 */
export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
