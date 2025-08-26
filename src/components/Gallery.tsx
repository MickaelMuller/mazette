'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: "/api/placeholder/400/600",
    alt: "Coupe bob moderne",
    category: "Coupes"
  },
  {
    id: 2,
    src: "/api/placeholder/400/600",
    alt: "Balayage blond",
    category: "Colorations"
  },
  {
    id: 3,
    src: "/api/placeholder/400/600",
    alt: "Coiffure de mariée",
    category: "Événements"
  },
  {
    id: 4,
    src: "/api/placeholder/400/600",
    alt: "Coupe pixie",
    category: "Coupes"
  },
  {
    id: 5,
    src: "/api/placeholder/400/600",
    alt: "Ombré hair",
    category: "Colorations"
  },
  {
    id: 6,
    src: "/api/placeholder/400/600",
    alt: "Chignon sophistiqué",
    category: "Événements"
  },
  {
    id: 7,
    src: "/api/placeholder/400/600",
    alt: "Coupe dégradée",
    category: "Coupes"
  },
  {
    id: 8,
    src: "/api/placeholder/400/600",
    alt: "Highlights caramel",
    category: "Colorations"
  }
]

const categories = ["Tous", "Coupes", "Colorations", "Événements"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez nos réalisations et laissez-vous inspirer par notre savoir-faire.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-pink-600 hover:bg-pink-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-pink-600 font-bold">M</span>
                    </div>
                    <p className="text-gray-700 font-medium">{image.alt}</p>
                    <p className="text-gray-500 text-sm">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="font-semibold mb-2">{image.alt}</p>
                    <p className="text-sm opacity-90">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl p-4">
                <div className="aspect-[3/4] relative bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-pink-600 font-bold text-2xl">M</span>
                    </div>
                    <p className="text-gray-700 font-bold text-xl mb-2">{filteredImages[selectedImage].alt}</p>
                    <p className="text-gray-500">{filteredImages[selectedImage].category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Suivez-nous sur Instagram pour voir plus de nos réalisations
          </p>
          <a
            href="https://instagram.com/mazette_coiffure"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @mazette_coiffure
          </a>
        </div>
      </div>
    </section>
  )
}