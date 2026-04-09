interface ServiceItem {
  name: string;
  duration: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  color: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Coupes",
    color: "bg-rose-500",
    items: [
      { name: "Courte Tondeuse", duration: "30min", price: "32€ - 35€" },
      { name: "Cheveux Courts", duration: "45min", price: "42€ - 50€" },
      { name: "Cheveux Mi-Longs", duration: "1h", price: "63€ - 70€" },
      { name: "Cheveux Longs", duration: "1h15", price: "75€ - 80€" },
    ],
  },
  {
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
    title: "Forfaits",
    color: "bg-emerald-500",
    items: [
      { name: "Couleur + Coupe", duration: "2h", price: "90€ - 160€" },
      { name: "Vernis + Coupe", duration: "1h30", price: "90€ - 160€" },
    ],
  },
  {
    title: "Techniques",
    color: "bg-amber-400",
    items: [
      { name: "Le Balayage", duration: "3h45", price: "200€ - 240€" },
      {
        name: "La Reprise Du Balayage",
        duration: "2h45",
        price: "160€ - 190€",
      },
      { name: "Le Projet Créatif", duration: "5h", price: "Sur devis" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-beige-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Prestations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Nos Tarifs
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Des prestations sur mesure non genrées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl p-5 sm:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <h3 className="text-xl font-bold text-violet mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-2 sm:gap-4 pb-4 border-b border-beige last:border-0 last:pb-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-sm ${category.color} shrink-0`}
                        />
                        <span className="font-medium text-foreground/80 truncate">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-foreground/40 text-sm ml-[18px]">
                        {item.duration}
                      </span>
                    </div>
                    <span className="text-orange font-bold text-right text-sm sm:text-base shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
