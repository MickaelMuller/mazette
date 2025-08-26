import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un conseil ? N&apos;hésitez pas à nous contacter. 
            Notre équipe sera ravie de vous répondre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement</p>
                <a 
                  href="tel:0556000000"
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  05 56 XX XX XX
                </a>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Écrivez-nous un message</p>
                <a 
                  href="mailto:contact@mazette-coiffure.fr"
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors break-all"
                >
                  contact@mazette-coiffure.fr
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Horaires d&apos;ouverture</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mardi</span>
                    <span className="font-semibold">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mercredi</span>
                    <span className="font-semibold">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jeudi</span>
                    <span className="font-semibold">9h00 - 19h00</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vendredi</span>
                    <span className="font-semibold">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-600">Dim/Lun</span>
                    <span className="text-red-600 font-semibold">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Adresse</h3>
                  <p className="text-gray-600">
                    123 Rue Notre-Dame<br />
                    33000 Bordeaux
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors">
                Voir l&apos;itinéraire
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service souhaité
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="coupe">Coupe</option>
                  <option value="coloration">Coloration</option>
                  <option value="soins">Soins</option>
                  <option value="coiffage">Coiffage</option>
                  <option value="lissage">Lissage</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 text-center">
                Suivez-nous sur les réseaux sociaux
              </h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/mazette_coiffure"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/mazette.coiffure"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Urgence ou question rapide ?
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Pour les demandes urgentes ou les questions rapides, 
              n&apos;hésitez pas à nous appeler directement pendant nos heures d&apos;ouverture.
            </p>
            <a
              href="tel:0556000000"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}