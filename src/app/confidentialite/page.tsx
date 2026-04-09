import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des cookies du site Mazette Coiffure.",
  alternates: {
    canonical: "https://www.mazette-bordeaux-coiffeur.fr/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <section className="pt-28 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-black text-violet mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Responsable du traitement
            </h2>
            <p>Le responsable du traitement des données personnelles est :</p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>BONNIER MAZETTE</strong> (SARL)
              </li>
              <li>130 Rue Notre-Dame, 33000 Bordeaux</li>
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
              Données collectées
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle directement. Aucun
              formulaire de contact, compte utilisateur ou newsletter n&apos;est
              proposé. Les réservations sont gérées par le service tiers
              Planity, soumis à sa propre politique de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Cookies et services tiers
            </h2>
            <p>Ce site utilise les services tiers suivants :</p>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Google Maps</strong> (Google LLC) : affichage de la
                carte de localisation du salon. Ce service peut déposer des
                cookies et collecter des données de navigation conformément à la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  politique de confidentialité de Google
                </a>
                .
              </li>
              <li>
                <strong>Planity</strong> (Planity SAS) : widget de réservation
                en ligne. Ce service peut déposer des cookies pour son
                fonctionnement conformément à la{" "}
                <a
                  href="https://www.planity.com/politique-de-confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  politique de confidentialité de Planity
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics</strong> (Vercel Inc.) :
                l&apos;hébergeur peut collecter des données techniques anonymes
                (adresse IP, type de navigateur, pages visitées) à des fins de
                performance et de sécurité.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">
              Gestion des cookies
            </h2>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies
              ou être alerté lors de leur dépôt. Voici les liens vers les
              instructions des principaux navigateurs :
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet hover:text-orange transition-colors"
                >
                  Safari
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants sur vos données personnelles :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit d&apos;effacement</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la portabilité</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous par téléphone au{" "}
              <a
                href="tel:0556047617"
                className="text-violet hover:text-orange transition-colors"
              >
                05 56 04 76 17
              </a>{" "}
              ou directement au salon.
            </p>
            <p className="mt-3">
              Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet hover:text-orange transition-colors"
              >
                CNIL
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-violet mb-3">Mise à jour</h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout
              moment. La version en vigueur est celle accessible sur cette page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
