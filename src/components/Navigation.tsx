'use client'

import { useState } from 'react'
import { Menu, X, Scissors, Phone, Calendar } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#booking', label: 'Réservation' },
    { href: '#location', label: 'Localisation' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">Mazette</div>
              <div className="text-pink-600 text-sm font-medium">Coiffure</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0556000000"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">05 56 XX XX XX</span>
            </a>
            <a
              href="#booking"
              className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Réserver
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:0556000000"
                  className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">05 56 XX XX XX</span>
                </a>
                <a
                  href="#booking"
                  className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="w-4 h-4" />
                  Réserver
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}