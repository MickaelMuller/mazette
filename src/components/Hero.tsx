import { Scissors, Phone, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Mazette
                <span className="block text-pink-600">Coiffure</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Votre salon de coiffure de confiance au cœur de Bordeaux. 
                Expertise, créativité et passion pour sublimer votre beauté.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2 justify-center"
              >
                <Scissors className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <a
                href="#contact"
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Nous appeler
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Horaires</p>
                  <p className="text-gray-600">Mar-Sam 9h-19h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">05 56 XX XX XX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 text-center">
                <Scissors className="w-20 h-20 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">25+ ans</h3>
                <p className="text-gray-600">d&apos;expérience en coiffure</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Expertise</p>
                  <p className="text-gray-600 text-sm">Coupe • Couleur • Soins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}