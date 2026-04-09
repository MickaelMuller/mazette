import { Phone, MapPin, Instagram, ExternalLink } from "lucide-react";

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
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-violet rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-between">
                <div className="space-y-8">
                  <a
                    href="tel:0556047617"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Téléphone</p>
                      <p className="text-white font-semibold text-lg">
                        05 56 04 76 17
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=130+Rue+Notre-Dame+33000+Bordeaux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Adresse</p>
                      <p className="text-white font-semibold">
                        130 Rue Notre-Dame, Bordeaux
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/mazettenotredame/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-orange transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Instagram</p>
                      <p className="text-white font-semibold">
                        @mazettenotredame
                      </p>
                    </div>
                  </a>
                </div>

                <a
                  href="https://www.planity.com/mazette-33300-bordeaux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 flex items-center justify-center gap-2 w-full bg-orange text-white py-4 rounded-full font-bold text-lg hover:bg-orange-light transition-colors"
                >
                  Réserver sur Planity
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-light/30 to-orange/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl font-black text-white/10">M</div>
                    <div className="space-y-2 text-white/60 text-sm px-8 min-w-[220px]">
                      <div className="flex justify-between">
                        <span>Lundi</span>
                        <span className="text-white font-medium">9h - 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mardi</span>
                        <span className="text-white font-medium">9h - 20h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mercredi</span>
                        <span className="text-white font-medium">9h - 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jeudi</span>
                        <span className="text-white font-medium">9h - 20h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vendredi</span>
                        <span className="text-white font-medium">
                          9h - 17h30
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sam - Dim</span>
                        <span className="text-white/30 font-medium">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
