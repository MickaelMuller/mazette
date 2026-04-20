import Link from "next/link";
import { priceCategories } from "@/data/prices";

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
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto text-lg">
            Des prestations sur mesure non genrées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {priceCategories.map((category) => (
            <div
              key={category.key}
              className="bg-white rounded-3xl p-5 sm:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 gap-2">
                <h3 className="text-xl font-bold text-violet">
                  {category.title}
                </h3>
                {category.href && (
                  <Link
                    href={category.href}
                    className="text-sm font-semibold text-orange hover:text-orange-light transition-colors shrink-0"
                  >
                    En savoir plus →
                  </Link>
                )}
              </div>

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
                      <span className="text-foreground/60 text-sm ml-[18px]">
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
