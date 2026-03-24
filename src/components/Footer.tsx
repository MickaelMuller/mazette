import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-violet-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-black">Mazette</span>
              <span className="text-orange ml-2 text-sm font-medium uppercase tracking-widest">
                Coiffure
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Votre salon de coiffure chaleureux et creatif au coeur de
              Bordeaux, quartier Notre-Dame.
            </p>
            <a
              href="https://instagram.com/mazette_coiffure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-orange transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @mazette_coiffure
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4 text-white/60">
              <a
                href="tel:0556000000"
                className="flex items-center gap-3 hover:text-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                05 56 XX XX XX
              </a>
              <a
                href="mailto:contact@mazette-coiffure.fr"
                className="flex items-center gap-3 hover:text-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@mazette-coiffure.fr
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  123 Rue Notre-Dame
                  <br />
                  33000 Bordeaux
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Horaires</h3>
            <div className="space-y-2 text-white/60 text-sm">
              <div className="flex justify-between">
                <span>Mar - Sam</span>
                <span className="text-white">9h00 - 19h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dim - Lun</span>
                <span className="text-white/40">Ferme</span>
              </div>
            </div>
            <a
              href="https://www.planity.com/mazette-coiffure-33000-bordeaux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-light transition-colors text-sm"
            >
              Reserver en ligne
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            &copy; 2025 Mazette Coiffure. Tous droits reserves.
          </div>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-orange transition-colors">
              Mentions legales
            </a>
            <a href="#" className="hover:text-orange transition-colors">
              Confidentialite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
