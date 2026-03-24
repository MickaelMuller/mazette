import { MapPin, Car, Train } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Acces
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Nous Trouver
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-violet" />
            </div>
            <h3 className="text-xl font-bold text-violet mb-3">Adresse</h3>
            <p className="text-foreground/60 leading-relaxed">
              123 Rue Notre-Dame
              <br />
              33000 Bordeaux
            </p>
            <a
              href="https://maps.google.com/?q=Rue+Notre-Dame,+Bordeaux"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-orange font-semibold hover:text-orange-dark transition-colors"
            >
              Voir sur Google Maps
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
              <Train className="w-8 h-8 text-violet" />
            </div>
            <h3 className="text-xl font-bold text-violet mb-3">Transports</h3>
            <ul className="text-foreground/60 space-y-2">
              <li>Tram B : Gambetta (3 min)</li>
              <li>Tram A : Ste-Catherine (5 min)</li>
              <li>Bus 4, 5, 15 : Notre-Dame</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6">
              <Car className="w-8 h-8 text-violet" />
            </div>
            <h3 className="text-xl font-bold text-violet mb-3">Parking</h3>
            <p className="text-foreground/60 leading-relaxed">
              Parking Place Gambetta
              <br />
              a 2 min a pied.
              <br />
              Stationnement rue Notre-Dame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
