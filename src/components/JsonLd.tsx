const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Mazette Coiffure",
  description:
    "Salon de coiffure inclusif et non genré au cœur de Bordeaux, quartier Notre-Dame. Coupes, colorations, balayages pour tous. Ambiance chaleureuse et bienveillante.",
  slogan: "Coiffeur pour humain.e(s)",
  knowsAbout: [
    "Coiffure inclusive",
    "Coupe non genrée",
    "Coloration",
    "Balayage",
    "Soins capillaires",
  ],
  url: BASE_URL,
  telephone: "+33556047617",
  image: `${BASE_URL}/images/salon1.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "130 Rue Notre-Dame",
    addressLocality: "Bordeaux",
    postalCode: "33000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.853878,
    longitude: -0.5693644,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "17:30",
    },
  ],
  priceRange: "32€ - 240€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  sameAs: ["https://www.instagram.com/mazettenotredame/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "31",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
