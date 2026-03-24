import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            On Papote ?
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Une question, une envie, un doute sur votre prochaine coupe ?
            Contactez-nous, on est la !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="tel:0556000000"
            className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-violet mb-2">Telephone</h3>
            <p className="text-orange font-semibold">05 56 XX XX XX</p>
          </a>

          <a
            href="mailto:contact@mazette-coiffure.fr"
            className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-violet mb-2">Email</h3>
            <p className="text-orange font-semibold text-sm">
              contact@mazette-coiffure.fr
            </p>
          </a>

          <a
            href="https://maps.google.com/?q=Rue+Notre-Dame,+Bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-violet mb-2">Adresse</h3>
            <p className="text-foreground/60 text-sm">
              123 Rue Notre-Dame
              <br />
              33000 Bordeaux
            </p>
          </a>

          <a
            href="https://instagram.com/mazette_coiffure"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-violet mb-2">Instagram</h3>
            <p className="text-orange font-semibold">@mazette_coiffure</p>
          </a>
        </div>

        <div className="bg-violet rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Envie de sauter le pas ?
          </h3>
          <p className="text-beige/80 mb-8 max-w-2xl mx-auto text-lg">
            Reservez directement en ligne sur Planity. Choisissez votre
            prestation, votre creneau, et on s&apos;occupe du reste.
          </p>
          <a
            href="https://www.planity.com/mazette-coiffure-33000-bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-light transition-colors"
          >
            Reserver maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
