import Image from "next/image";
import Link from "next/link";
import { Clock, CalendarDays } from "lucide-react";

const horaires = [
  { jour: "Lundi", heures: "9h - 18h", isClosed: false },
  { jour: "Mardi", heures: "9h - 20h", isClosed: false },
  { jour: "Mercredi", heures: "9h - 18h", isClosed: false },
  { jour: "Jeudi", heures: "9h - 20h", isClosed: false },
  { jour: "Vendredi", heures: "9h - 17h30", isClosed: false },
  { jour: "Samedi", heures: "Fermé", isClosed: true },
  { jour: "Dimanche", heures: "Fermé", isClosed: true },
];

export default function Booking() {
  return (
    <section id="salon" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Bienvenue
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Le Salon
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Un espace où l&apos;on se sent bien, comme à la maison.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/salon3.jpeg"
                  alt="Espace détente du salon"
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/salon1.jpeg"
                  alt="Décoration du salon"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/salon2.jpeg"
                  alt="Vue intérieure du salon"
                  width={400}
                  height={600}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-violet mb-4">
                Un lieu unique à Bordeaux
              </h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Installé dans le quartier Notre-Dame, Mazette Coiffure vous
                accueille dans un cadre chaleureux et authentique. Canapé
                vintage, tapis coloré, plantes vertes et boule disco — ici, on
                vient pour se faire belle et beau mais aussi pour passer un bon
                moment.
              </p>
            </div>

            <div className="bg-beige-light rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-orange" />
                <h4 className="text-xl font-bold text-violet">Horaires</h4>
              </div>
              <div className="space-y-3">
                {horaires.map((h) => (
                  <div
                    key={h.jour}
                    className="flex justify-between items-center"
                  >
                    <span
                      className={
                        h.isClosed
                          ? "text-foreground/40"
                          : "font-medium text-foreground/80"
                      }
                    >
                      {h.jour}
                    </span>
                    <span
                      className={
                        h.isClosed
                          ? "text-foreground/40"
                          : "font-semibold text-violet"
                      }
                    >
                      {h.heures}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/reservation"
            className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-light transition-colors"
          >
            <CalendarDays className="w-5 h-5" />
            Réserver en ligne
          </Link>
        </div>
      </div>
    </section>
  );
}
