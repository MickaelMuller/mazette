import type { Metadata } from "next";

import PlanityWidget from "@/components/PlanityWidget";

const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";

export const metadata: Metadata = {
  title: "Réservation en ligne - Coiffeur Bordeaux",
  description:
    "Réservez votre rendez-vous en ligne chez Mazette Coiffure, salon de coiffure inclusif à Bordeaux quartier Notre-Dame. Coupes, colorations, balayages — prestations non genrées, réservation rapide.",
  keywords:
    "reservation coiffeur bordeaux, prendre rdv coiffeur bordeaux, coiffeur en ligne bordeaux, rendez-vous coiffure bordeaux, planity mazette bordeaux",
  alternates: {
    canonical: `${BASE_URL}/reservation`,
  },
  openGraph: {
    title: "Réservation en ligne - Mazette Coiffure Bordeaux",
    description:
      "Réservez votre rendez-vous en ligne chez Mazette Coiffure à Bordeaux. Coupes, colorations, balayages pour tous.",
    url: `${BASE_URL}/reservation`,
    images: [
      {
        url: "/images/salon1.jpeg",
        width: 1200,
        height: 630,
        alt: "Mazette Coiffure - Réservation en ligne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réservation en ligne - Mazette Coiffure Bordeaux",
    description:
      "Réservez votre rendez-vous chez Mazette Coiffure à Bordeaux. Coupes, colorations, balayages — prestations non genrées.",
    images: ["/images/salon1.jpeg"],
  },
};

const reservationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  target: {
    "@type": "EntryPoint",
    urlTemplate: `${BASE_URL}/reservation`,
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
  result: {
    "@type": "Reservation",
    provider: {
      "@type": "HairSalon",
      name: "Mazette Coiffure",
      address: {
        "@type": "PostalAddress",
        streetAddress: "130 Rue Notre-Dame",
        addressLocality: "Bordeaux",
        postalCode: "33000",
        addressCountry: "FR",
      },
    },
  },
};

export default function ReservationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationJsonLd) }}
      />
      <section className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold uppercase tracking-widest text-sm">
              Réservation
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-violet mt-2">
              Réservez chez Mazette Coiffure à Bordeaux
            </h1>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto text-lg">
              Choisissez votre prestation et réservez directement en ligne.
              Coupes, colorations, balayages — des prestations sur mesure non
              genrées.
            </p>
          </div>
          <p className="text-foreground/60 text-sm text-center max-w-2xl mx-auto mb-10">
            La réservation est assurée par Planity. Connectez-vous à votre
            compte ou créez-en un pour réserver directement depuis cette page.
            Salon de coiffure inclusif au 130 rue Notre-Dame à Bordeaux —
            coupes, colorations et balayages adaptés à vos envies, sans
            distinction de genre.
          </p>
          <PlanityWidget />
        </div>
      </section>
    </>
  );
}
