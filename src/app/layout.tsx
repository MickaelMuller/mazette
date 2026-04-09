import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://www.mazette-bordeaux-coiffeur.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mazette Coiffure - Salon de Coiffure a Bordeaux",
    template: "%s | Mazette Coiffure",
  },
  description:
    "Salon de coiffure inclusif et non genre au coeur de Bordeaux, quartier Notre-Dame. Coupes, colorations, balayages et soins pour tous. Ambiance chaleureuse et bienveillante. Reservation en ligne.",
  keywords:
    "coiffeur bordeaux, salon coiffure bordeaux, coiffeur inclusif bordeaux, salon non genre bordeaux, coupe cheveux bordeaux, coloration bordeaux, balayage bordeaux, coiffeur notre dame bordeaux, mazette coiffure, salon coiffure chartrons",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Mazette Coiffure - Salon de Coiffure a Bordeaux",
    description:
      "Salon de coiffure inclusif et non genre au coeur de Bordeaux, quartier Notre-Dame. Coupes, colorations, balayages pour tous.",
    locale: "fr_FR",
    type: "website",
    url: BASE_URL,
    siteName: "Mazette Coiffure",
    images: [
      {
        url: "/images/salon1.jpeg",
        width: 1200,
        height: 630,
        alt: "Mazette Coiffure - Salon de coiffure a Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazette Coiffure - Salon de Coiffure a Bordeaux",
    description:
      "Salon de coiffure inclusif et non genre au coeur de Bordeaux. Coupes, colorations, balayages pour tous.",
    images: ["/images/salon1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
