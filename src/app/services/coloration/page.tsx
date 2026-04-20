import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { colorationPrices } from "@/data/prices";

const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";
const PAGE_URL = `${BASE_URL}/services/coloration`;

export const metadata: Metadata = {
  title: "Coloration à Bordeaux — Couleur sur mesure",
  description:
    "Coloration à Bordeaux chez Mazette Coiffure, quartier Notre-Dame. Couleur sur mesure, couvrance des cheveux blancs, forfait couleur + coupe. Prestations non genrées, réservation en ligne.",
  keywords:
    "coloration bordeaux, couleur cheveux bordeaux, coloration cheveux blancs bordeaux, coiffeur coloration bordeaux, forfait couleur coupe bordeaux, coloration inclusive bordeaux",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Coloration à Bordeaux — Mazette Coiffure",
    description:
      "Colorations sur mesure et forfaits couleur + coupe au salon Mazette à Bordeaux Notre-Dame.",
    url: PAGE_URL,
    images: [
      {
        url: "/images/salon1.jpeg",
        width: 1200,
        height: 630,
        alt: "Coloration à Bordeaux — Mazette Coiffure",
      },
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coloration à Bordeaux",
  serviceType: "Coloration et patine capillaire",
  description:
    "Coloration capillaire sur mesure : couvrance des cheveux blancs, changement de couleur, vernis gloss pour raviver reflets et brillance. Couleur adaptée à la carnation et au projet.",
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
    { "@type": "ListItem", position: 2, name: "Coloration", item: PAGE_URL },
  ],
};

export default function ColorationPage() {
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
        eyebrow="Coloration"
        title="Coloration à Bordeaux — couleur sur mesure"
        intro="Au salon Mazette, rue Notre-Dame à Bordeaux, nous concevons chaque coloration comme un projet unique : couvrance des cheveux blancs, changement de ton, vernis pour intensifier les reflets. Nous choisissons ensemble la nuance qui s'accorde à votre carnation et à votre style."
        prices={colorationPrices}
      >
        <h2>Nos prestations de coloration</h2>
        <h3>Le forfait Couleur + Coupe</h3>
        <p>
          Notre forfait complet associe une{" "}
          <strong>coloration sur mesure</strong> et une coupe adaptée à vos
          longueurs. Idéal pour couvrir les cheveux blancs, changer de nuance ou
          raviver votre couleur naturelle. La prestation comprend le diagnostic,
          la pose, le shampoing technique, la coupe et le brushing de finition.
        </p>

        <h3>Le forfait Vernis + Coupe</h3>
        <p>
          Le <strong>vernis</strong> (ou gloss) est une coloration douce sans
          ammoniaque qui vient intensifier les reflets, raviver une couleur qui
          s&apos;est ternie ou neutraliser des nuances indésirables (jaune,
          orangé). Associé à une coupe, c&apos;est la prestation idéale pour
          retrouver éclat et brillance entre deux colorations complètes.
        </p>

        <h2>Une coloration adaptée à chaque personne</h2>
        <p>
          Nous travaillons avec des colorations professionnelles pour garantir
          tenue et respect de la fibre capillaire. Avant chaque prestation, nous
          prenons le temps de :
        </p>
        <ul>
          <li>
            <strong>Analyser votre cheveu</strong> : porosité, état, historique
            des colorations précédentes.
          </li>
          <li>
            <strong>Comprendre votre projet</strong> : couvrance, reflets,
            éclaircissement ou assombrissement.
          </li>
          <li>
            <strong>Proposer la bonne technique</strong> : coloration racines,
            coloration totale, patine, vernis, ou combinaison.
          </li>
        </ul>

        <h2>Coloration et cheveux blancs</h2>
        <p>
          La couvrance des cheveux blancs demande une technique précise : choix
          du pigment, temps de pause, concentration adaptée. Nous réalisons
          aussi bien des couvrances 100% qu&apos;un <em>blending</em> qui
          intègre les blancs à la couleur naturelle pour un rendu plus doux et
          naturel.
        </p>

        <h2>Un salon inclusif à Bordeaux Notre-Dame</h2>
        <p>
          Mazette Coiffure est un <strong>salon non genré</strong> : nos tarifs
          dépendent uniquement de la longueur de vos cheveux et du temps
          nécessaire, jamais de votre genre. Tout le monde est bienvenu·e,
          quelle que soit votre identité, votre style ou votre projet
          capillaire.
        </p>

        <h2>Réserver une coloration à Bordeaux</h2>
        <p>
          Rendez-vous au <strong>130 rue Notre-Dame, 33000 Bordeaux</strong>.
          Réservation en ligne via Planity, directement depuis notre site.
        </p>
      </ServicePageLayout>
    </>
  );
}
