// Imports statiques : Vite optimise, versionne et embarque ces images dans le build de production.
import huileEssentielleImage from "../assets/huile.webp";
import huileRicinImage from "../assets/ricin.webp";
import baseLavanteImage from "../assets/baseLavante.webp";

export const contact = {
  phone: "07 62 71 61 18",
  email: "Mlcheadspa@gmail.com",
  address: "2 rue de Saintonge, 17120 Boutenac-Touvent",
  opening: "Janvier 2027",
};

// Les contenus éditoriaux restent ici pour faciliter leur mise à jour sans modifier les composants.
export const about =
  "Inspiré des traditions ancestrales de bien-être, le Head Spa trouve ses origines dans différentes cultures, notamment en Asie. Au Japon, il s’est développé comme un rituel associant massages du cuir chevelu, soins capillaires et relaxation profonde. Inspiré du massage japonais et du Shiatsu, il aide à prendre soin du cuir chevelu tout en libérant les tensions et en apaisant l’esprit. Répandu à travers le monde, le Head Spa associe aujourd’hui gestes traditionnels, soins adaptés et expérience sensorielle. Chez MLC Head Spa, je vous invite à découvrir ce rituel venu d’ailleurs et à vous offrir un moment rien qu’à vous.";

// Les bénéfices et leur clé d’icône restent groupés pour permettre leur réorganisation facilement.
export const benefits = [
  {
    icon: "droplets",
    title: "Purifier",
    description:
      "Éliminer les impuretés, les résidus de produits et l’excès de sébum.",
  },
  {
    icon: "circulation",
    title: "Stimuler",
    description:
      "Encourager la circulation sanguine grâce aux massages du cuir chevelu.",
  },
  {
    icon: "nourish",
    title: "Nourrir",
    description: "Hydrater le cuir chevelu pour retrouver confort et douceur.",
  },
  {
    icon: "release",
    title: "Délier",
    description: "Libérer les tensions du cuir chevelu, de la nuque et du cou.",
  },
  {
    icon: "relax",
    title: "Apaiser",
    description: "Réduire le stress et favoriser un profond lâcher-prise.",
  },
] satisfies {
  icon: "droplets" | "circulation" | "nourish" | "release" | "relax";
  title: string;
  description: string;
}[];

export const products = [
  {
    name: "Huile de ricin",
    description: "Un soin nourrissant et enveloppant pour les cheveux.",
    image: huileRicinImage,
  },
  {
    name: "Base lavante douce",
    description:
      "Nettoie le cuir chevelu et élimine délicatement les résidus d’huile.",
    image: baseLavanteImage,
  },
  {
    name: "Huiles essentielles",
    description:
      "Éventuellement utilisées dans certains rituels adultes, selon le soin choisi et les précautions adaptées.",
    image: huileEssentielleImage,
  },
];

export const adultPrices = [
  { duration: "60 min", price: "100 €" },
  { duration: "90 min", price: "150 €" },
];

type RitualPhase = {
  title: string;
  duration?: string;
  details?: string[];
  description?: string;
};

type Ritual = {
  name: string;
  duration: string;
  price: string;
  description: string;
  ageGuidance?: string;
  phases: RitualPhase[];
  closing: string;
};

// Chaque rituel partage la même structure afin d’être affiché et enrichi de façon cohérente.
export const rituals = [
  {
    name: "Rituel adulte - 1 h",
    duration: "1 h",
    price: "100 €",
    description:
      "Une parenthèse de détente et de bien-être dédiée à la beauté, à la relaxation et au lâcher-prise.",
    phases: [
      {
        title: "Accueil et questionnaire",
        duration: "10 min",
        description:
          "Un moment d’échange pour faire connaissance, comprendre vos attentes, découvrir vos habitudes et identifier vos éventuelles sensibilités ou contre-indications afin d’adapter le soin à vos besoins.",
      },
      {
        title: "Installation et préparation",
        description:
          "Vous prenez place confortablement dans un environnement chaleureux et apaisant, propice à la détente.",
      },
      {
        title: "Le rituel Head Spa",
        duration: "40 min",
        details: [
          "Massage du buste, de la nuque et des épaules.",
          "Massage relaxant du visage.",
          "Massage du cuir chevelu à l’aide d’accessoires spécifiques.",
          "Expérience sensorielle autour de l’eau et de la vapeur.",
          "Gestes enveloppants et relaxants autour des bras et des mains.",
        ],
      },
      {
        title: "Réveil en douceur et retour à soi",
        duration: "10 min",
        description:
          "Un temps pour revenir tranquillement à l’instant présent, reprendre vos esprits et prolonger les bienfaits de cette parenthèse de détente.",
      },
    ],
    closing:
      "Une heure pour ralentir, vous détendre et vous reconnecter à votre bien-être.",
  },
  {
    name: "Rituel adulte",
    duration: "1 h 30",
    price: "150 €",
    description:
      "Un rituel complet dédié à la détente, à la beauté et au lâcher-prise.",
    phases: [
      {
        title: "Accueil et questionnaire",
        duration: "15 min",
        description:
          "Un échange pour faire connaissance, comprendre vos attentes, vos habitudes et vos éventuelles sensibilités ou contre-indications, afin d’adapter le soin à vos besoins.",
      },
      {
        title: "Installation et préparation",
        description:
          "Vous prenez place confortablement dans un environnement chaleureux et apaisant, pour profiter pleinement de votre expérience.",
      },
      {
        title: "Le rituel Head Spa",
        duration: "60 min",
        details: [
          "Massage du buste, de la nuque et des épaules.",
          "Massage relaxant du visage.",
          "Massage du cuir chevelu à l’aide d’accessoires spécifiques.",
          "Expérience sensorielle autour de l’eau et de la vapeur.",
          "Gestes enveloppants et relaxants autour des bras et des mains.",
        ],
        description:
          "Chaque geste est réalisé avec douceur pour vous offrir une expérience de détente profonde.",
      },
      {
        title: "Réveil en douceur et retour à soi",
        duration: "15 min",
        description:
          "Prenez le temps de reprendre vos esprits, de revenir tranquillement à l’instant présent et de profiter des dernières sensations de détente.",
      },
    ],
    closing:
      "Pendant 1 h 30, laissez le quotidien de côté et profitez d’une expérience sensorielle unique, une véritable invitation à prendre soin de vous.",
  },
  {
    name: "Rituel enfant",
    duration: "1 h de rituel",
    price: "120 €",
    description:
      "Une première découverte du Head Spa, imaginée tout en douceur dans une ambiance rassurante et adaptée aux enfants.",
    ageGuidance:
      "À partir de 4 ans, en présence d’un parent ou représentant légal.",
    phases: [
      {
        title: "Accueil et découverte",
        duration: "5 à 10 min",
        description:
          "Un petit moment pour faire connaissance, découvrir l’univers du Head Spa et rassurer l’enfant avant de commencer.",
      },
      {
        title: "Installation et préparation",
        description:
          "Une installation confortable avec une approche douce, adaptée à son âge et toujours respectueuse de ses envies et de son rythme.",
      },
      {
        title: "Le rituel Kids",
        duration: "1 h",
        details: [
          "Massage doux et relaxant du cuir chevelu.",
          "Découverte des sensations de l’eau.",
          "Petit massage de la nuque et des épaules.",
          "Soin lavant adapté aux enfants et rinçage tout en douceur.",
          "Petit moment cocooning pour les mains.",
        ],
      },
      {
        title: "Retour au calme",
        duration: "5 à 10 min",
        description:
          "Un réveil en douceur et quelques instants pour retrouver ses esprits avant de repartir avec le sourire.",
      },
    ],
    closing:
      "Parce que les enfants aussi ont le droit à leur moment de douceur, MLC Head Spa leur propose une première expérience placée sous le signe de la détente et du plaisir.",
  },
] satisfies Ritual[];

export const faqs = [
  {
    question: "Qu’est-ce qu’un Head Spa ?",
    answer:
      "Un Head Spa est un rituel dédié au cuir chevelu qui associe soins, massages et instants de relaxation. Une expérience complète pour prendre soin de soi et relâcher les tensions.",
  },
  {
    question: "Quand MLC Head Spa ouvrira-t-il ses portes ?",
    answer:
      "L’ouverture est prévue en janvier 2027. L’adresse exacte, les horaires et les modalités de réservation seront annoncés prochainement.",
  },
  {
    question: "Comment réserver un rituel ?",
    answer:
      "Les réservations pourront se faire par téléphone ou par e-mail dès l’ouverture des créneaux. Vous pouvez déjà nous contacter pour être informé en priorité.",
  },
  {
    question: "Que faut-il prévoir avant sa séance ?",
    answer:
      "Venez simplement avec l’envie de ralentir. Pour profiter pleinement du soin, il est préférable d’éviter d’arriver avec les cheveux très mouillés ou fraîchement attachés.",
  },
];
