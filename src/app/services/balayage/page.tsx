import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { balayagePrices } from "@/data/prices";

const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";
const PAGE_URL = `${BASE_URL}/services/balayage`;

export const metadata: Metadata = {
  title: "Balayage à Bordeaux — Technique et éclaircissement",
  description:
    "Balayage à Bordeaux chez Mazette Coiffure, quartier Notre-Dame. Éclaircissement sur mesure, reprise de balayage, projet créatif. Prestations non genrées, réservation en ligne.",
  keywords:
    "balayage bordeaux, balayage blond bordeaux, eclaircissement bordeaux, mèches bordeaux, balayage caramel bordeaux, coiffeur balayage bordeaux, reprise balayage bordeaux",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Balayage à Bordeaux — Mazette Coiffure",
    description:
      "Balayage sur mesure, reprise de balayage et projets créatifs au salon Mazette à Bordeaux Notre-Dame.",
    url: PAGE_URL,
    images: [
      {
        url: "/images/salon1.jpeg",
        width: 1200,
        height: 630,
        alt: "Balayage à Bordeaux — Mazette Coiffure",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Balayage à Bordeaux",
  serviceType: "Balayage et éclaircissement capillaire",
  description:
    "Balayage sur mesure réalisé à main levée pour un éclaircissement naturel et lumineux. Technique adaptée à votre type de cheveux et à vos envies.",
  provider: {
    "@type": "HairSalon",
    name: "Mazette Coiffure",
    url: BASE_URL,
    telephone: "+33556047617",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 Rue Notre-Dame",
      addressLocality: "Bordeaux",
      postalCode: "33000",
      addressCountry: "FR",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Bordeaux",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Balayage", item: PAGE_URL },
  ],
};

export default function BalayagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicePageLayout
        eyebrow="Balayage"
        title="Balayage à Bordeaux — éclaircissement sur mesure"
        intro="Chez Mazette Coiffure, au cœur du quartier Notre-Dame à Bordeaux, nous réalisons des balayages travaillés à main levée pour un rendu naturel, lumineux et adapté à votre couleur de base. Que vous souhaitiez un premier balayage, une reprise, ou un projet plus créatif, nous construisons ensemble une proposition sur mesure."
        prices={balayagePrices}
      >
        <h2>Qu&apos;est-ce qu&apos;un balayage ?</h2>
        <p>
          Le balayage est une technique d&apos;éclaircissement localisé,
          réalisée à main levée pour éviter les démarcations et obtenir un rendu
          dégradé très naturel. Contrairement aux mèches classiques posées sur
          papillotes régulières, le balayage suit le mouvement de la coupe et
          apporte de la lumière là où elle se pose naturellement.
        </p>
        <p>
          Chez <strong>Mazette Coiffure</strong>, chaque balayage est adapté à
          votre longueur, à votre couleur naturelle et au rendu recherché :
          blond vénitien, caramel, blond polaire, reflets cuivrés ou nuances
          froides — nous en discutons ensemble avant toute application.
        </p>

        <h2>Nos prestations de balayage</h2>
        <h3>Le balayage complet</h3>
        <p>
          Idéal pour une première fois ou pour repartir de zéro : nous
          éclaircissons l&apos;ensemble des longueurs avec une technique adaptée
          à votre projet. La prestation comprend la consultation, la pose, la
          pause, le shampoing, le patina / gloss de finition et le brushing.
        </p>

        <h3>La reprise de balayage</h3>
        <p>
          Pour entretenir un balayage existant en ne reprenant que les racines
          et les zones qui ont besoin de lumière. Cette prestation est plus
          rapide et plus douce pour la fibre capillaire — parfaite pour espacer
          les rendez-vous tout en gardant un rendu frais.
        </p>

        <h3>Le projet créatif</h3>
        <p>
          Pour les transformations plus ambitieuses : passages au blond polaire,
          décolorations complètes, couleurs vives (rose, violet, bleu),
          combinaisons de techniques. Ces projets se construisent sur devis
          après un diagnostic capillaire complet.
        </p>

        <h2>Pourquoi choisir Mazette pour votre balayage ?</h2>
        <ul>
          <li>
            <strong>Un diagnostic capillaire</strong> avant chaque prestation
            pour adapter la technique à la nature de vos cheveux.
          </li>
          <li>
            <strong>Des prestations non genrées</strong> : tarifs basés sur la
            longueur et la technique, pas sur le genre.
          </li>
          <li>
            <strong>Une ambiance chaleureuse</strong> en plein centre de
            Bordeaux, à deux pas des Chartrons et du quartier Notre-Dame.
          </li>
          <li>
            <strong>Des conseils d&apos;entretien</strong> adaptés pour
            préserver la tenue de votre balayage dans la durée.
          </li>
        </ul>

        <h2>Combien de temps dure un balayage ?</h2>
        <p>
          Comptez <strong>3h45 environ</strong> pour un balayage complet,{" "}
          <strong>2h45</strong> pour une reprise et jusqu&apos;à{" "}
          <strong>5 heures</strong> pour un projet créatif. Nous prévoyons le
          temps nécessaire pour travailler sans précipitation et obtenir un
          résultat à la hauteur.
        </p>

        <h2>Réserver un balayage à Bordeaux</h2>
        <p>
          Le salon est situé au{" "}
          <strong>130 rue Notre-Dame, 33000 Bordeaux</strong>. Vous pouvez
          réserver directement en ligne via Planity, depuis notre site.
        </p>
      </ServicePageLayout>
    </>
  );
}
