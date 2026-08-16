import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors duration-150";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-navy text-white hover:bg-navy-strong",
  secondary:
    "bg-white text-navy border border-navy hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-white border border-white/30 hover:border-white/60",
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
