import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mazette Coiffure - Salon de Coiffure à Bordeaux",
  description: "Salon de coiffure professionnel à Bordeaux, rue Notre-Dame. Coupe, couleur, soins capillaires. Réservation en ligne sur Planity.",
  keywords: "coiffeur bordeaux, salon coiffure bordeaux, coupe cheveux, coloration, balayage, rue notre dame",
  openGraph: {
    title: "Mazette Coiffure - Salon de Coiffure à Bordeaux",
    description: "Votre salon de coiffure de confiance au cœur de Bordeaux",
    locale: "fr_FR",
    type: "website",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
