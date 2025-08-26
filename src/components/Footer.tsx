import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Mazette Coiffure</div>
                <div className="text-pink-400">Votre beauté, notre passion</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Salon de coiffure professionnel situé au cœur de Bordeaux. 
              Nous mettons notre expertise et notre créativité au service de votre beauté depuis plus de 25 ans.
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/mazette_coiffure"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/mazette.coiffure"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <a href="tel:0556000000" className="hover:text-pink-400 transition-colors">
                  05 56 XX XX XX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <a href="mailto:contact@mazette-coiffure.fr" className="hover:text-pink-400 transition-colors">
                  contact@mazette-coiffure.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-0.5" />
                <div>
                  123 Rue Notre-Dame<br />
                  33000 Bordeaux
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-gray-300">Ouvert du mardi au samedi</span>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mar - Ven</span>
                  <span>9h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Samedi</span>
                  <span>9h00 - 19h00</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Dim - Lun</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Mazette Coiffure. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}