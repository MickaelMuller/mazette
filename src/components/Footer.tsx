import { Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-violet-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-mazette.svg"
                alt="Mazette Coiffure"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 leading-relaxed">
              Votre salon de coiffure chaleureux et créatif au cœur de Bordeaux,
              quartier Notre-Dame.
            </p>
            <a
              href="https://www.instagram.com/mazettenotredame/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/70 hover:text-orange transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @mazettenotredame
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Prestations</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/services/coupe"
                  className="hover:text-orange transition-colors"
                >
                  Coupe de cheveux
                </Link>
              </li>
              <li>
                <Link
                  href="/services/coloration"
                  className="hover:text-orange transition-colors"
                >
                  Coloration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/balayage"
                  className="hover:text-orange transition-colors"
                >
                  Balayage
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="hover:text-orange transition-colors"
                >
                  Réservation en ligne
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-white/70">
              <a
                href="tel:0556047617"
                className="flex items-center gap-3 hover:text-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                05 56 04 76 17
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  130 Rue Notre-Dame
                  <br />
                  33000 Bordeaux
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Horaires</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex justify-between">
                <span>Lundi</span>
                <span className="text-white">9h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Mardi</span>
                <span className="text-white">9h - 20h</span>
              </div>
              <div className="flex justify-between">
                <span>Mercredi</span>
                <span className="text-white">9h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Jeudi</span>
                <span className="text-white">9h - 20h</span>
              </div>
              <div className="flex justify-between">
                <span>Vendredi</span>
                <span className="text-white">9h - 17h30</span>
              </div>
              <div className="flex justify-between">
                <span>Sam - Dim</span>
                <span className="text-white/60">Fermé</span>
              </div>
            </div>
            <Link
              href="/reservation"
              className="inline-block mt-8 bg-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-light transition-colors text-sm"
            >
              Réserver en ligne
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            &copy; 2025 Mazette Coiffure. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <Link
              href="/mentions-legales"
              className="hover:text-orange transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-orange transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
