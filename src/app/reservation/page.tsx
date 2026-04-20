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

          <div className="max-w-2xl mx-auto mb-10 bg-white border border-beige rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-violet/10 text-violet text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-violet rounded-full" />
                Réservation via Planity
              </span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              La prise de rendez-vous est assurée par{" "}
              <strong className="text-violet">Planity</strong>, notre partenaire
              de réservation en ligne. Le module ci-dessous est le widget
              officiel Planity intégré à notre site.
            </p>
            <ul className="mt-4 space-y-2 text-foreground/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange mt-1" aria-hidden="true">
                  →
                </span>
                <span>
                  Vous avez déjà un compte Planity ?{" "}
                  <strong>Connectez-vous</strong> depuis le widget pour réserver
                  en quelques clics.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange mt-1" aria-hidden="true">
                  →
                </span>
                <span>
                  Pas encore de compte ? <strong>Créez-le gratuitement</strong>{" "}
                  au moment de la réservation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange mt-1" aria-hidden="true">
                  →
                </span>
                <span>
                  Vous recevrez une confirmation par email ainsi qu&apos;un
                  rappel avant votre rendez-vous.
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-beige flex flex-wrap items-center justify-between gap-3">
              <p className="text-foreground/60 text-sm">
                Vous préférez réserver depuis Planity ?
              </p>
              <a
                href="https://www.planity.com/mazette-33300-bordeaux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-violet-light transition-colors"
              >
                Ouvrir sur Planity
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <PlanityWidget />
        </div>
      </section>
    </>
  );
}
