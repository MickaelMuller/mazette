import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PlanityWidget from "@/components/PlanityWidget";

export const metadata: Metadata = {
  title: "Reservation - Mazette Coiffure",
  description:
    "Reservez votre rendez-vous en ligne chez Mazette Coiffure, salon de coiffure a Bordeaux quartier Notre-Dame.",
};

export default function ReservationPage() {
  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Reservation
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Prendre Rendez-vous
          </h1>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg">
            Choisissez votre prestation et reservez directement en ligne.
          </p>
          <a
            href="https://www.planity.com/mazette-33300-bordeaux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-violet hover:text-orange font-medium transition-colors"
          >
            Ou reservez directement sur Planity
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <PlanityWidget />
      </div>
    </section>
  );
}
