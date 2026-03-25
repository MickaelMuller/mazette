"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#salon", label: "Le Salon" },
    { href: "/#realisations", label: "Realisations" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  const scrolledBg = isScrolled
    ? "bg-white/95 backdrop-blur-sm shadow-md"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledBg}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo-mazette.svg"
              alt="Mazette Coiffure"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-violet font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0556047617"
              className="flex items-center gap-2 text-foreground/70 hover:text-violet transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">05 56 04 76 17</span>
            </a>
            <a
              href="/reservation"
              className="bg-violet text-white px-6 py-2.5 rounded-full font-semibold hover:bg-violet-light transition-colors"
            >
              Reserver
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-beige transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mb-4 overflow-hidden">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-6 py-3 text-foreground/80 hover:text-violet hover:bg-beige-light font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-4 border-t border-beige space-y-3">
                <a
                  href="tel:0556047617"
                  className="flex items-center gap-2 text-foreground/70 hover:text-violet transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">05 56 04 76 17</span>
                </a>
                <a
                  href="/reservation"
                  className="block w-full bg-violet text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-light transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reserver
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
