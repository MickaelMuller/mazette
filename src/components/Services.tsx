import { Scissors, Palette, Sparkles, Heart, Crown, Droplets } from 'lucide-react'

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Coupe",
    description: "Coupe personnalisée selon votre style et morphologie",
    price: "À partir de 35€",
    features: ["Consultation style", "Shampoing inclus", "Coiffage"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Coloration",
    description: "Couleurs tendance et techniques de pointe",
    price: "À partir de 60€",
    features: ["Balayage", "Mèches", "Couleur uniforme", "Soins colorants"]
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Soins",
    description: "Traitements réparateurs pour cheveux abîmés",
    price: "À partir de 25€",
    features: ["Masques nutritifs", "Soins kératine", "Reconstruction"]
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Coiffage",
    description: "Mise en plis pour occasions spéciales",
    price: "À partir de 40€",
    features: ["Mariages", "Événements", "Brushing", "Chignons"]
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Soins du cuir chevelu",
    description: "Traitements spécialisés pour un cuir chevelu sain",
    price: "À partir de 30€",
    features: ["Massage relaxant", "Soins anti-chute", "Purification"]
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Lissage",
    description: "Lissage brésilien et japonais longue durée",
    price: "À partir de 120€",
    features: ["Lissage brésilien", "Lissage japonais", "Durée 6 mois"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de coiffure, 
            adaptés à tous vos besoins et envies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-pink-600 mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="text-pink-600 font-bold text-lg mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 bg-pink-600 text-white py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors">
                Réserver
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Forfaits & Packages
            </h3>
            <p className="text-gray-600 mb-6">
              Économisez avec nos forfaits combinés coupe + couleur + soins
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Package Éclat</h4>
                <p className="text-gray-600 mb-4">Coupe + Couleur + Soin</p>
                <div className="text-pink-600 font-bold text-2xl">120€</div>
                <div className="text-gray-500 line-through">140€</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Package Luxe</h4>
                <p className="text-gray-600 mb-4">Coupe + Balayage + Soins + Coiffage</p>
                <div className="text-pink-600 font-bold text-2xl">180€</div>
                <div className="text-gray-500 line-through">210€</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}