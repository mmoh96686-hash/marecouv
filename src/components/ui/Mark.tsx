import Image from "next/image";

type MarkProps = {
  size?: number;
  variant?: "navy" | "white";
  className?: string;
};

/**
 * Symbole de marque Marecouv — monogramme M/R fourni par le client.
 * Rendu à partir du fichier source (pas d'approximation vectorielle),
 * en variante navy (fond clair) ou blanche (fond sombre).
 */
export function Mark({ size = 28, variant = "navy", className }: MarkProps) {
  const src =
    variant === "white" ? "/brand/mark-white.png" : "/brand/mark-navy.png";

  return (
    <Image
      src={src}
      alt="Marecouv"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
