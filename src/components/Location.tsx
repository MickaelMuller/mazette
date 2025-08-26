'use client'

import { MapPin, Navigation, Car, Bus } from 'lucide-react'

export default function Location() {
  const openInMaps = () => {
    window.open('https://maps.google.com/?q=Rue+Notre-Dame,+Bordeaux', '_blank')
  }

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Où nous trouver
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Situé au cœur de Bordeaux, rue Notre-Dame, notre salon vous accueille 
            dans un cadre moderne et chaleureux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-600 text-lg">
                    123 Rue Notre-Dame<br />
                    33000 Bordeaux<br />
                    France
                  </p>
                </div>
              </div>
              
              <button
                onClick={openInMaps}
                className="w-full bg-pink-600 text-white py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Itinéraire Google Maps
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Comment venir
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Car className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">En voiture</h4>
                    <p className="text-gray-600">
                      Parking gratuit disponible dans la rue Notre-Dame et les rues adjacentes. 
                      Parking payant Place Gambetta à 2 min à pied.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Bus className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">En transport</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Tram A : Arrêt Sainte-Catherine (5 min à pied)</li>
                      <li>• Tram B : Arrêt Gambetta (3 min à pied)</li>
                      <li>• Bus lignes 4, 5, 15 : Arrêt Notre-Dame</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                À proximité
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Rue Sainte-Catherine (shopping)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Place Gambetta
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Grosse Cloche
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                  Nombreux cafés et restaurants
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative bg-gradient-to-br from-pink-200 to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Mazette Coiffure
                    </h3>
                    <p className="text-gray-700">123 Rue Notre-Dame, Bordeaux</p>
                    <button
                      onClick={openInMaps}
                      className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
                    >
                      Voir sur la carte
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">Ouvert</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">Aujourd&apos;hui</h4>
                  <span className="text-gray-600">9h00 - 19h00</span>
                </div>
                
                <button
                  onClick={openInMaps}
                  className="w-full bg-gray-100 text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Voir les horaires complets
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accessibilité
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">♿</span>
                </div>
                <p className="text-gray-600">Accès PMR</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">📶</span>
                </div>
                <p className="text-gray-600">Wi-Fi gratuit</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">💳</span>
                </div>
                <p className="text-gray-600">Paiement CB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}