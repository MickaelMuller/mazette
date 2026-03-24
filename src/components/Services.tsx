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
      { name: "Cheveux Courts", duration: "45min", price: "40€ - 50€" },
      { name: "Cheveux Mi-Longs", duration: "1h", price: "63€ - 70€" },
      { name: "Cheveux Longs", duration: "1h15", price: "75€ - 80€" },
    ],
  },
  {
    title: "Mise en Forme",
    color: "bg-purple-500",
    items: [
      { name: "Mise en forme", duration: "30min", price: "30€" },
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
      { name: "Le Projet Creatif", duration: "5h", price: "Sur devis" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Prestations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Nos Tarifs
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Des prestations sur-mesure pour sublimer chaque chevelure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-violet mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 pb-4 border-b border-beige last:border-0 last:pb-0"
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
                    <span className="text-orange font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-violet rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Premiere visite ?
          </h3>
          <p className="text-beige/80 mb-8 max-w-2xl mx-auto text-lg">
            Beneficiez d&apos;une consultation gratuite pour definir ensemble le
            style qui vous correspond. Nos experts sont la pour vous conseiller.
          </p>
          <a
            href="https://www.planity.com/mazette-33300-bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-light transition-colors"
          >
            Reserver ma consultation
          </a>
        </div>
      </div>
    </section>
  );
}
