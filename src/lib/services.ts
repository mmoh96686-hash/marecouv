export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  audience: string;
  process: string;
  benefit: string;
};

export const services: Service[] = [
  {
    slug: "recouvrement-amiable",
    index: "01",
    title: "Recouvrement amiable",
    summary: "Le point de départ de tous nos dossiers : le dialogue avant la confrontation.",
    audience: "Toute entreprise avec une créance récente, ou qui souhaite préserver sa relation avec le débiteur.",
    process: "Analyse du dossier, prise de contact, négociation d'un plan de règlement, suivi jusqu'à l'encaissement.",
    benefit: "Une résolution souvent plus rapide qu'une procédure, et une relation commerciale qui peut continuer.",
  },
  {
    slug: "recouvrement-judiciaire",
    index: "02",
    title: "Recouvrement judiciaire",
    summary: "Lorsque l'amiable a été tenté sérieusement et que la situation l'exige.",
    audience: "Entreprises confrontées à un débiteur silencieux, de mauvaise foi, ou qui conteste sans fondement.",
    process: "Constitution du dossier, engagement de la procédure adaptée, suivi jusqu'à exécution du jugement.",
    benefit: "Un rapport de force rétabli, avec un dossier déjà documenté depuis la phase amiable.",
  },
  {
    slug: "gestion-poste-client",
    index: "03",
    title: "Gestion du poste client",
    summary: "Un suivi structuré de vos encours, avant qu'ils ne deviennent des impayés.",
    audience: "Entreprises avec un volume de factures régulier et peu de temps pour les suivre une à une.",
    process: "Mise en place d'un suivi des échéances, relances calibrées, reporting régulier.",
    benefit: "Moins de créances qui glissent silencieusement vers l'impayé.",
  },
  {
    slug: "audit-creances",
    index: "04",
    title: "Audit des créances",
    summary: "Un état des lieux clair de votre portefeuille d'impayés.",
    audience: "Entreprises qui veulent prioriser leurs dossiers avant d'agir, ou évaluer un portefeuille avant une décision stratégique.",
    process: "Analyse de l'ensemble des créances, classement par probabilité de recouvrement, recommandations.",
    benefit: "Une vision réaliste de ce qui est récupérable, et dans quel ordre agir.",
  },
  {
    slug: "enquete-patrimoniale",
    index: "05",
    title: "Enquête patrimoniale",
    summary: "Savoir si le débiteur a les moyens de payer, avant d'engager une procédure.",
    audience: "Entreprises hésitant à engager des frais de procédure contre un débiteur dont la solvabilité est incertaine.",
    process: "Recherche des actifs identifiables du débiteur dans le cadre légal applicable, restitution d'un rapport.",
    benefit: "Une décision éclairée avant d'investir du temps et des frais.",
  },
  {
    slug: "conseil-prevention",
    index: "06",
    title: "Conseil et prévention",
    summary: "Réduire le risque d'impayés avant qu'il ne se transforme en dossier.",
    audience: "Entreprises souhaitant sécuriser leurs contrats, CGV ou processus de facturation.",
    process: "Revue des pratiques actuelles, recommandations contractuelles et opérationnelles.",
    benefit: "Moins de dossiers à traiter en aval, une trésorerie plus prévisible.",
  },
];
