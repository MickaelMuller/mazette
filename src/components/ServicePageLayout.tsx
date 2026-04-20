import Link from "next/link";
import { ReactNode } from "react";
import type { PriceItem } from "@/data/prices";

interface ServicePageLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  prices: PriceItem[];
}

export default function ServicePageLayout({
  eyebrow,
  title,
  intro,
  children,
  prices,
}: ServicePageLayoutProps) {
  return (
    <article className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <nav
          aria-label="Fil d'Ariane"
          className="text-sm text-foreground/60 mb-8"
        >
          <Link href="/" className="hover:text-violet transition-colors">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-violet">{eyebrow}</span>
        </nav>

        <header className="mb-12">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-violet mt-2 leading-tight">
            {title}
          </h1>
          <p className="text-foreground/70 mt-6 text-lg leading-relaxed">
            {intro}
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-violet [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-violet [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-violet [&_a]:text-orange [&_a]:font-semibold hover:[&_a]:text-orange-light [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
          {children}
        </div>

        <section className="mt-16 bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-black text-violet mb-6">Tarifs</h2>
          <div className="space-y-4">
            {prices.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 pb-4 border-b border-beige last:border-0 last:pb-0"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground/80">
                    {item.name}
                  </div>
                  <div className="text-foreground/60 text-sm">
                    {item.duration}
                  </div>
                </div>
                <span className="text-orange font-bold shrink-0">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/reservation"
            className="inline-block bg-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-light transition-colors"
          >
            Prendre rendez-vous en ligne
          </Link>
        </div>
      </div>
    </article>
  );
}
