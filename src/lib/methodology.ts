export type MethodologyStep = {
  index: string;
  title: string;
  text: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    index: "01",
    title: "Analyse du dossier",
    text: "Nous étudions les pièces transmises, la solvabilité présumée du débiteur et l'historique de la relation commerciale.",
  },
  {
    index: "02",
    title: "Stratégie amiable",
    text: "Nous définissons l'approche la plus adaptée au profil du débiteur, plutôt qu'une relance standardisée.",
  },
  {
    index: "03",
    title: "Négociation et relances",
    text: "Prise de contact, mise en demeure si nécessaire, négociation d'un plan de règlement réaliste.",
  },
  {
    index: "04",
    title: "Recours judiciaire, si nécessaire",
    text: "Si l'amiable échoue malgré des relances sérieuses, nous engageons la procédure adaptée à la situation.",
  },
  {
    index: "05",
    title: "Suivi du règlement",
    text: "Nous suivons l'exécution jusqu'à l'encaissement effectif, et vous tenons informé à chaque étape.",
  },
];
