"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const realisations = [
  { src: "/images/femme1.jpeg", alt: "Boucles dorees" },
  { src: "/images/femme2.jpeg", alt: "Reflets violets" },
  { src: "/images/femme3.jpeg", alt: "Balayage blond" },
  { src: "/images/femme5.jpeg", alt: "Balayage caramel" },
  { src: "/images/femme6.jpeg", alt: "Blond rose" },
  { src: "/images/femme7.jpeg", alt: "Brushing naturel" },
  { src: "/images/femme8.jpeg", alt: "Coupe courte texturee" },
  { src: "/images/homme1.jpeg", alt: "Boucles naturelles homme" },
  { src: "/images/homme2.jpeg", alt: "Mullet boucle" },
  { src: "/images/homme3.jpeg", alt: "Coupe classique homme" },
  { src: "/images/homme4.jpeg", alt: "Coupe courte homme" },
  { src: "/images/femme4.jpeg", alt: "Ombre cuivre" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goTo = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedIndex - 1 + realisations.length) % realisations.length
        : (selectedIndex + 1) % realisations.length;
    setSelectedIndex(newIndex);
  };

  return (
    <section id="realisations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Nos Realisations
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Chaque coupe raconte une histoire. Decouvrez le savoir-faire
            Mazette.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {realisations.map((item, index) => (
            <div
              key={item.src}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{item.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/mazette_coiffure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-violet text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-light transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Voir plus sur Instagram
          </a>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goTo("prev");
            }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goTo("next");
            }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={realisations[selectedIndex].src}
              alt={realisations[selectedIndex].alt}
              width={800}
              height={1200}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <p className="text-white text-center mt-4 font-medium text-lg">
              {realisations[selectedIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
