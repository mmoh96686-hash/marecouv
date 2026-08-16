"use client";

import { useState } from "react";
import { Container, Eyebrow } from "@/components/ui/Container";

const items = [
  {
    question: "Comment fonctionne le recouvrement amiable ?",
    answer:
      "Nous prenons contact avec le débiteur pour négocier un règlement, en préservant autant que possible votre relation commerciale.",
  },
  {
    question: "Quand lancer une procédure judiciaire ?",
    answer: "Lorsque la voie amiable a échoué et que la situation le justifie.",
  },
  {
    question: "Quels documents fournir ?",
    answer: "Facture, contrat, bon de commande, mise en demeure et tout justificatif de la créance.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Container className="py-16">
      <Eyebrow>Questions fréquentes</Eyebrow>
      <div className="border-t border-stone-line">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question} className="border-b border-stone-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between py-3.5 text-left"
              >
                <span className="text-sm font-medium text-navy">
                  {item.question}
                </span>
                <span className="text-navy font-medium" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="text-xs text-ink-muted leading-relaxed pb-4 max-w-xl">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
