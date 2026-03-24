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
  title: "Mazette Coiffure - Salon de Coiffure a Bordeaux",
  description:
    "Salon de coiffure au coeur de Bordeaux, quartier Notre-Dame. Coupes, colorations, soins. Ambiance chaleureuse et creative. Reservation sur Planity.",
  keywords:
    "coiffeur bordeaux, salon coiffure bordeaux, coupe cheveux, coloration, balayage, rue notre dame, mazette coiffure",
  openGraph: {
    title: "Mazette Coiffure - Salon de Coiffure a Bordeaux",
    description:
      "Votre salon de coiffure chaleureux et creatif au coeur de Bordeaux",
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
