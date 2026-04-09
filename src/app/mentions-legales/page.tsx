import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Mazette Coiffure.",
  alternates: {
    canonical: "https://www.mazette-bordeaux-coiffeur.fr/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-violet mb-12">
          Mentions légales
        </h1>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site <strong>www.mazette-bordeaux-coiffeur.fr</strong> est
              édité par la société :
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>BONNIER MAZETTE</strong>
              </li>
              <li>Société à responsabilité limitée (SARL)</li>
              <li>Siège social : 130 Rue Notre-Dame, 33000 Bordeaux</li>
              <li>SIREN : 990 702 607</li>
              <li>SIRET : 990 702 607 00013</li>
              <li>N° TVA Intracommunautaire : FR91 990 702 607</li>
              <li>Code NAF : 96.02A - Coiffure</li>
              <li>
                Téléphone :{" "}
                <a
                  href="tel:0556047617"
                  className="text-violet hover:text-orange transition-colors"
                >
                  05 56 04 76 17
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est le représentant légal de la
              société BONNIER MAZETTE.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>Vercel Inc.</strong>
              </li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images,
              photographies, logos, icônes) est la propriété exclusive de
              BONNIER MAZETTE, sauf mention contraire. Toute reproduction,
              distribution, modification ou utilisation de ces contenus sans
              autorisation préalable écrite est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Limitation de responsabilité
            </h2>
            <p>
              BONNIER MAZETTE s&apos;efforce de fournir des informations exactes
              et à jour sur ce site. Toutefois, elle ne peut garantir
              l&apos;exactitude, la complétude ou l&apos;actualité des
              informations diffusées. BONNIER MAZETTE décline toute
              responsabilité pour les éventuelles erreurs ou omissions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Liens externes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers (Planity,
              Google Maps, Instagram). BONNIER MAZETTE ne saurait être tenue
              responsable du contenu de ces sites externes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
