import { Scissors, Palette, Sparkles, Crown } from "lucide-react";

const services = [
  {
    icon: <Scissors className="w-7 h-7" />,
    title: "Coupe",
    description:
      "Coupe personnalisee selon votre style, votre texture et votre personnalite.",
    price: "Des 35€",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Coloration",
    description:
      "Balayage, meches, couleur uniforme, ombre... Toutes les techniques tendance.",
    price: "Des 60€",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Soins",
    description:
      "Masques nutritifs, soins keratine, reconstruction pour des cheveux sublimes.",
    price: "Des 25€",
  },
  {
    icon: <Crown className="w-7 h-7" />,
    title: "Coiffage",
    description:
      "Brushing, chignons, mises en plis pour vos evenements et occasions speciales.",
    price: "Des 40€",
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
            Nos Services
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Des prestations sur-mesure pour sublimer chaque chevelure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-beige rounded-2xl flex items-center justify-center text-violet mb-6 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-violet mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-orange font-bold text-lg">
                {service.price}
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
            href="https://www.planity.com/mazette-coiffure-33000-bordeaux"
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
