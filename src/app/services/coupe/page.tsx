import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { coupePrices } from "@/data/prices";

const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";
const PAGE_URL = `${BASE_URL}/services/coupe`;

export const metadata: Metadata = {
  title: "Coupe de cheveux à Bordeaux — Coiffeur non genré",
  description:
    "Coupe de cheveux à Bordeaux chez Mazette Coiffure, quartier Notre-Dame. Coupes courtes, mi-longues, longues et tondeuse — tarifs basés sur la longueur, pas sur le genre. Réservation en ligne.",
  keywords:
    "coupe cheveux bordeaux, coiffeur non genre bordeaux, coupe femme bordeaux, coupe homme bordeaux, coupe enfant bordeaux, coupe tondeuse bordeaux, coupe courte bordeaux, coupe longue bordeaux",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Coupe de cheveux à Bordeaux — Mazette Coiffure",
    description:
      "Coupes sur mesure, tarifs non genrés au salon Mazette à Bordeaux Notre-Dame.",
    url: PAGE_URL,
    images: [
      {
        url: "/images/salon1.jpeg",
        width: 1200,
        height: 630,
        alt: "Coupe de cheveux à Bordeaux — Mazette Coiffure",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coupe de cheveux à Bordeaux",
  serviceType: "Coupe et coiffure capillaire",
  description:
    "Coupe de cheveux sur mesure au salon Mazette Coiffure à Bordeaux : coupes courtes, mi-longues, longues, tondeuse et mise en forme. Tarifs basés sur la longueur, prestations non genrées.",
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
    { "@type": "ListItem", position: 2, name: "Coupe", item: PAGE_URL },
  ],
};

export default function CoupePage() {
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
        eyebrow="Coupe"
        title="Coupe de cheveux à Bordeaux — coiffeur non genré"
        intro="Chez Mazette Coiffure, rue Notre-Dame à Bordeaux, nos tarifs de coupe sont basés uniquement sur la longueur et le temps nécessaire — pas sur le genre. Coupes courtes, mi-longues, longues, tondeuse ou mise en forme : chaque prestation est pensée pour vous ressembler."
        prices={coupePrices}
      >
        <h2>Une coupe adaptée à chaque longueur</h2>
        <h3>Coupe courte tondeuse</h3>
        <p>
          Pour les coupes très courtes réalisées principalement à la tondeuse,
          avec dégradés, fondus ou textures. Comptez <strong>30 minutes</strong>{" "}
          environ. Cette prestation inclut le shampoing et la finition.
        </p>

        <h3>Coupe cheveux courts</h3>
        <p>
          Pour les coupes travaillées aux ciseaux sur cheveux courts : carrés
          plongeants courts, pixies, undercuts, dégradés texturisés. Nous
          prenons le temps de construire la coupe avec vous —{" "}
          <strong>45 minutes</strong> environ.
        </p>

        <h3>Coupe cheveux mi-longs</h3>
        <p>
          Carrés classiques, carrés plongeants, mi-longs dégradés, coupes
          wolf&nbsp;: nous adaptons la technique à la nature de vos cheveux et
          au style recherché. Comptez <strong>1 heure</strong> en moyenne.
        </p>

        <h3>Coupe cheveux longs</h3>
        <p>
          Pour les longueurs qui demandent un travail de dégradé et de
          mouvement. Shampoing, coupe et brushing compris —{" "}
          <strong>1h15</strong> environ.
        </p>

        <h3>Mise en forme</h3>
        <p>
          Un <strong>brushing</strong> ou une mise en forme sans coupe, avec ou
          sans fer ou boucleur selon le rendu recherché. Parfait pour un
          évènement, une soirée ou simplement se faire plaisir.
        </p>

        <h2>Pourquoi un salon non genré à Bordeaux ?</h2>
        <p>
          Mazette est un <strong>salon de coiffure inclusif</strong>. Nos tarifs
          dépendent de la longueur de vos cheveux et du temps technique, pas de
          votre identité de genre. C&apos;est plus juste, plus simple, et ça
          permet d&apos;accueillir tout le monde — femmes, hommes, personnes
          non-binaires, enfants — sans étiquette ni supposition.
        </p>

        <h2>Comment se passe un rendez-vous ?</h2>
        <ul>
          <li>
            <strong>Consultation</strong> : nous prenons le temps de discuter de
            votre projet, de votre quotidien et de la tenue attendue.
          </li>
          <li>
            <strong>Shampoing</strong> et soin adapté à votre fibre capillaire.
          </li>
          <li>
            <strong>Coupe</strong> réalisée aux ciseaux ou à la tondeuse selon
            la prestation.
          </li>
          <li>
            <strong>Finition</strong> : brushing, mise en forme et conseils
            d&apos;entretien à la maison.
          </li>
        </ul>

        <h2>Réserver une coupe à Bordeaux</h2>
        <p>
          Le salon se trouve au{" "}
          <strong>130 rue Notre-Dame, 33000 Bordeaux</strong>, à deux pas des
          Chartrons et du centre. Réservez en ligne via Planity, directement
          depuis notre site.
        </p>
      </ServicePageLayout>
    </>
  );
}
