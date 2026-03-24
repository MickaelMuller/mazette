"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

const SPARKLES = [
  {
    left: "5%",
    top: "12%",
    delay: "0s",
    duration: "3s",
    size: "w-1.5 h-1.5",
    color: "bg-white/80",
  },
  {
    left: "14%",
    top: "78%",
    delay: "1.2s",
    duration: "2.5s",
    size: "w-1 h-1",
    color: "bg-orange/60",
  },
  {
    left: "24%",
    top: "32%",
    delay: "0.5s",
    duration: "4s",
    size: "w-2 h-2",
    color: "bg-white/60",
  },
  {
    left: "36%",
    top: "62%",
    delay: "2s",
    duration: "3.5s",
    size: "w-1 h-1",
    color: "bg-violet-light/70",
  },
  {
    left: "44%",
    top: "18%",
    delay: "1.5s",
    duration: "2.8s",
    size: "w-1.5 h-1.5",
    color: "bg-white/70",
  },
  {
    left: "56%",
    top: "82%",
    delay: "0.8s",
    duration: "3.2s",
    size: "w-1 h-1",
    color: "bg-orange/50",
  },
  {
    left: "64%",
    top: "42%",
    delay: "2.5s",
    duration: "2.6s",
    size: "w-2.5 h-2.5",
    color: "bg-white/40",
  },
  {
    left: "76%",
    top: "22%",
    delay: "1s",
    duration: "3.8s",
    size: "w-1 h-1",
    color: "bg-white/80",
  },
  {
    left: "84%",
    top: "68%",
    delay: "0.3s",
    duration: "4.2s",
    size: "w-1.5 h-1.5",
    color: "bg-violet-light/50",
  },
  {
    left: "93%",
    top: "38%",
    delay: "1.8s",
    duration: "3s",
    size: "w-1 h-1",
    color: "bg-orange/70",
  },
  {
    left: "10%",
    top: "52%",
    delay: "3s",
    duration: "2.5s",
    size: "w-2 h-2",
    color: "bg-white/50",
  },
  {
    left: "48%",
    top: "6%",
    delay: "0.7s",
    duration: "3.5s",
    size: "w-1 h-1",
    color: "bg-white/90",
  },
  {
    left: "82%",
    top: "88%",
    delay: "2.2s",
    duration: "2.8s",
    size: "w-1.5 h-1.5",
    color: "bg-orange/40",
  },
  {
    left: "32%",
    top: "90%",
    delay: "1.3s",
    duration: "3.2s",
    size: "w-1 h-1",
    color: "bg-violet-light/60",
  },
  {
    left: "72%",
    top: "8%",
    delay: "0.2s",
    duration: "4s",
    size: "w-2 h-2",
    color: "bg-white/70",
  },
  {
    left: "18%",
    top: "45%",
    delay: "0.9s",
    duration: "3.3s",
    size: "w-1 h-1",
    color: "bg-white/60",
  },
  {
    left: "88%",
    top: "55%",
    delay: "1.7s",
    duration: "2.7s",
    size: "w-1.5 h-1.5",
    color: "bg-orange/50",
  },
  {
    left: "42%",
    top: "75%",
    delay: "2.8s",
    duration: "3.8s",
    size: "w-1 h-1",
    color: "bg-white/80",
  },
  {
    left: "60%",
    top: "15%",
    delay: "0.4s",
    duration: "4.5s",
    size: "w-2.5 h-2.5",
    color: "bg-violet-light/30",
  },
  {
    left: "28%",
    top: "25%",
    delay: "3.2s",
    duration: "2.9s",
    size: "w-1 h-1",
    color: "bg-white/70",
  },
];

const VISIBLE_RANGE = 3;

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((direction: "prev" | "next") => {
    setCurrentIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + realisations.length) % realisations.length
        : (prev + 1) % realisations.length,
    );
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) return;
    const timer = setInterval(() => goTo("next"), 4000);
    return () => clearInterval(timer);
  }, [goTo, selectedIndex, currentIndex]);

  const getOffset = (imageIndex: number) => {
    let offset = imageIndex - currentIndex;
    const half = realisations.length / 2;
    if (offset > half) offset -= realisations.length;
    if (offset < -half) offset += realisations.length;
    return offset;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? "next" : "prev");
    }
  };

  const goToLightbox = (direction: "prev" | "next") => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      direction === "prev"
        ? (selectedIndex - 1 + realisations.length) % realisations.length
        : (selectedIndex + 1) % realisations.length,
    );
  };

  return (
    <section
      id="realisations"
      className="relative py-24 bg-violet-dark overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-orange/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-violet-light/20 rounded-full blur-[80px]" />

      <div
        className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] rounded-full animate-disco-rotate opacity-[0.07]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.7) 1.5deg, transparent 3deg, transparent 15deg, rgba(239,125,21,0.5) 16.5deg, transparent 18deg, transparent 30deg, rgba(255,255,255,0.6) 31.5deg, transparent 33deg, transparent 45deg, rgba(122,74,130,0.5) 46.5deg, transparent 48deg, transparent 60deg, rgba(255,255,255,0.7) 61.5deg, transparent 63deg, transparent 75deg, rgba(239,125,21,0.5) 76.5deg, transparent 78deg, transparent 90deg, rgba(255,255,255,0.6) 91.5deg, transparent 93deg, transparent 105deg, rgba(122,74,130,0.5) 106.5deg, transparent 108deg, transparent 120deg, rgba(255,255,255,0.7) 121.5deg, transparent 123deg, transparent 135deg, rgba(239,125,21,0.5) 136.5deg, transparent 138deg, transparent 150deg, rgba(255,255,255,0.6) 151.5deg, transparent 153deg, transparent 165deg, rgba(122,74,130,0.5) 166.5deg, transparent 168deg, transparent 180deg, rgba(255,255,255,0.7) 181.5deg, transparent 183deg, transparent 195deg, rgba(239,125,21,0.5) 196.5deg, transparent 198deg, transparent 210deg, rgba(255,255,255,0.6) 211.5deg, transparent 213deg, transparent 225deg, rgba(122,74,130,0.5) 226.5deg, transparent 228deg, transparent 240deg, rgba(255,255,255,0.7) 241.5deg, transparent 243deg, transparent 255deg, rgba(239,125,21,0.5) 256.5deg, transparent 258deg, transparent 270deg, rgba(255,255,255,0.6) 271.5deg, transparent 273deg, transparent 285deg, rgba(122,74,130,0.5) 286.5deg, transparent 288deg, transparent 300deg, rgba(255,255,255,0.7) 301.5deg, transparent 303deg, transparent 315deg, rgba(239,125,21,0.5) 316.5deg, transparent 318deg, transparent 330deg, rgba(255,255,255,0.6) 331.5deg, transparent 333deg, transparent 345deg, rgba(122,74,130,0.5) 346.5deg, transparent 348deg)",
        }}
      />

      {SPARKLES.map((sparkle, i) => (
        <div
          key={i}
          className={`absolute rounded-full animate-sparkle ${sparkle.size} ${sparkle.color}`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        />
      ))}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Nos Realisations
          </h2>
          <p className="text-beige/60 mt-4 max-w-xl mx-auto text-lg">
            Chaque coupe raconte une histoire. Decouvrez le savoir-faire
            Mazette.
          </p>
        </div>

        <div
          className="relative h-96 md:h-[420px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => goTo("prev")}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer border border-white/10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => goTo("next")}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer border border-white/10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {realisations.map((item, i) => {
            const offset = getOffset(i);
            if (Math.abs(offset) > VISIBLE_RANGE) return null;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const isAdjacent = absOffset === 1;
            const scale =
              absOffset === 0
                ? 1
                : absOffset === 1
                  ? 0.78
                  : absOffset === 2
                    ? 0.58
                    : 0.4;
            const opacity =
              absOffset === 0
                ? 1
                : absOffset === 1
                  ? 0.5
                  : absOffset === 2
                    ? 0.2
                    : 0;
            const zIndex = VISIBLE_RANGE + 1 - absOffset;

            return (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-out ${
                  isCenter
                    ? "cursor-pointer group"
                    : isAdjacent
                      ? "cursor-pointer"
                      : "pointer-events-none"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(${offset} * var(--carousel-gap))) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                onClick={() => {
                  if (isCenter) setSelectedIndex(i);
                  else if (offset < 0) goTo("prev");
                  else if (offset > 0) goTo("next");
                }}
              >
                {isCenter && (
                  <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-orange via-violet-light to-orange bg-[length:200%_100%] animate-disco-border" />
                )}
                {isCenter && (
                  <div className="absolute -inset-3 rounded-3xl animate-disco-pulse" />
                )}

                <div className="relative overflow-hidden rounded-2xl w-64 h-80 md:w-72 md:h-96">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-semibold text-lg drop-shadow-lg">
                          {item.alt}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="text-white/40 text-sm font-mono">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(realisations.length).padStart(2, "0")}
          </div>
          <div className="flex justify-center gap-1.5">
            {realisations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? "bg-orange w-8"
                    : "bg-white/20 w-1.5 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/mazettenotredame/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all cursor-pointer border border-white/10"
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
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToLightbox("prev");
            }}
            className="absolute left-4 text-white/70 hover:text-white hover:scale-110 transition-all z-10 cursor-pointer"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToLightbox("next");
            }}
            className="absolute right-4 text-white/70 hover:text-white hover:scale-110 transition-all z-10 cursor-pointer"
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
