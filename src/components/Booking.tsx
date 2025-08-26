import { Calendar, Clock, User, ExternalLink } from 'lucide-react'

export default function Booking() {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prendre Rendez-vous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réservez facilement votre créneau en ligne avec Planity 
            ou appelez-nous directement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Réservation en ligne
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Planning en temps réel</h4>
                    <p className="text-gray-600">Consultez les créneaux disponibles</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Choisissez votre coiffeur</h4>
                    <p className="text-gray-600">Sélectionnez le professionnel de votre choix</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confirmation immédiate</h4>
                    <p className="text-gray-600">Recevez la confirmation par SMS</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.planity.com/mazette-coiffure-33000-bordeaux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-pink-600 text-white py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                Réserver sur Planity
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Réservation par téléphone
              </h3>
              <p className="text-gray-600 mb-6">
                Préférez-vous parler directement à notre équipe ? 
                Appelez-nous pendant nos heures d&apos;ouverture.
              </p>
              <a
                href="tel:0556000000"
                className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Appeler le salon
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Horaires d&apos;ouverture
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Lundi</span>
                  <span className="text-gray-600">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Mardi</span>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Mercredi</span>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Jeudi</span>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Vendredi</span>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-pink-200">
                  <span className="font-semibold text-gray-900">Samedi</span>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-900">Dimanche</span>
                  <span className="text-gray-600">Fermé</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Politique d&apos;annulation
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                  Annulation gratuite jusqu&apos;à 24h avant le rendez-vous
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                  Retard de plus de 15 min = report du rendez-vous
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2"></div>
                  Facilité de paiement : CB, espèces, chèques acceptés
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Première visite ?
          </h3>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Bénéficiez d&apos;une consultation gratuite pour définir ensemble le style qui vous correspond. 
            Nos experts sont là pour vous conseiller.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors">
            Réserver ma consultation gratuite
          </button>
        </div>
      </div>
    </section>
  )
}