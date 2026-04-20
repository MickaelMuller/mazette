export interface PriceItem {
  name: string;
  duration: string;
  price: string;
}

export interface PriceCategory {
  key: "coupe" | "mise-en-forme" | "coloration" | "balayage";
  title: string;
  color: string;
  href?: string;
  items: PriceItem[];
}

export const priceCategories: PriceCategory[] = [
  {
    key: "coupe",
    title: "Coupes",
    color: "bg-rose-500",
    href: "/services/coupe",
    items: [
      { name: "Courte Tondeuse", duration: "30min", price: "32€ - 35€" },
      { name: "Cheveux Courts", duration: "45min", price: "42€ - 50€" },
      { name: "Cheveux Mi-Longs", duration: "1h", price: "63€ - 70€" },
      { name: "Cheveux Longs", duration: "1h15", price: "75€ - 80€" },
    ],
  },
  {
    key: "mise-en-forme",
    title: "Mise en Forme",
    color: "bg-purple-500",
    items: [
      { name: "Mise en forme", duration: "30min", price: "32€" },
      {
        name: "Mise en forme EXTRA (fer ou boucleur)",
        duration: "45min",
        price: "40€",
      },
    ],
  },
  {
    key: "coloration",
    title: "Forfaits",
    color: "bg-emerald-500",
    href: "/services/coloration",
    items: [
      { name: "Couleur + Coupe", duration: "2h", price: "90€ - 160€" },
      { name: "Vernis + Coupe", duration: "1h30", price: "90€ - 160€" },
    ],
  },
  {
    key: "balayage",
    title: "Techniques",
    color: "bg-amber-400",
    href: "/services/balayage",
    items: [
      { name: "Le Balayage", duration: "3h45", price: "200€ - 250€" },
      {
        name: "La Reprise Du Balayage",
        duration: "2h45",
        price: "160€ - 200€",
      },
      { name: "Le Projet Créatif", duration: "5h", price: "Sur devis" },
    ],
  },
];

const byKey = (key: PriceCategory["key"]) => {
  const category = priceCategories.find((c) => c.key === key);
  if (!category) throw new Error(`Unknown price category: ${key}`);
  return category.items;
};

export const coupePrices: PriceItem[] = [
  ...byKey("coupe"),
  ...byKey("mise-en-forme"),
];

export const colorationPrices = byKey("coloration");

export const balayagePrices = byKey("balayage");
