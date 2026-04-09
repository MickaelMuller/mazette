"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import reviews from "@/data/reviews";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [selectedReviews, setSelectedReviews] = useState<typeof reviews>([]);

  useEffect(() => {
    setSelectedReviews(shuffleArray(reviews).slice(0, 6));
  }, []);

  if (selectedReviews.length === 0) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Leur Confiance
          </h2>
          <a
            href="https://www.google.com/maps/place/Mazette/@44.853878,-0.5693644,17z/data=!4m16!1m7!3m6!1s0xd55299fb4fd8b0f:0xd046328116ea8a59!2sMazette!8m2!3d44.853878!4d-0.5693644!16s%2Fg%2F11zj8_tz3s!3m7!1s0xd55299fb4fd8b0f:0xd046328116ea8a59!8m2!3d44.853878!4d-0.5693644!9m1!1b1!16s%2Fg%2F11zj8_tz3s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 mt-4 max-w-xl mx-auto text-lg block hover:text-violet transition-colors underline underline-offset-4"
          >
            100% d&apos;avis 5 étoiles sur Google.
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Stars />
              <p className="text-foreground/70 leading-relaxed mt-4 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-violet rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-violet">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
