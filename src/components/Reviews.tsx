"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  text: string;
}

const allReviews: Review[] = [
  {
    name: "Laure Montagne",
    text: "Vincent est tout simplement un super coiffeur/coloriste qui est a l'ecoute et qui sait realiser tous nos souhaits.",
  },
  {
    name: "Fabrice Tai",
    text: "Je recommande vivement ce salon de coiffure ! L'accueil est toujours chaleureux, Vincent est aux petits soins et tres professionnel. Le cadre est agreable et apaisant. Bref, un vrai coup de coeur, c'est devenu mon salon de reference !",
  },
  {
    name: "Solene Caridroit",
    text: "Un magicien ! Je n'ai jamais eu un balayage aussi beau ! Fluide, la couleur est splendide et la coupe aussi. Quel plaisir d'avoir un coiffeur qui comprend egalement les cheveux textures !",
  },
  {
    name: "Stephane Besombes",
    text: "Avec Mazette c'est Bien ! Avec Vincent c'est Mieux...",
  },
  {
    name: "Jayson Jurquet",
    text: "Un immense bravo a Vincent pour l'ouverture de son salon Mazette ! C'est toujours un vrai plaisir de passer entre ses mains : a l'ecoute et talentueux.",
  },
  {
    name: "Monica Torchio",
    text: "Vincent a toute ma confiance depuis de nombreuses annees, autant pour la coupe que la couleur. Il cache mes cheveux blancs et leur offre de beaux reflets naturels. Toujours un plaisir.",
  },
  {
    name: "Pascale Beigbeder-Calay",
    text: "Vincent me coiffe depuis plusieurs annees. Je ne peux que recommander de faire appel a son professionnalisme. Conseils coupe et couleur sont toujours pertinents et adaptes.",
  },
  {
    name: "Marie Helene Valette",
    text: "Vincent me fait une coupe courte toujours parfaite. Je n'ai pas hesite a traverser tout Bordeaux pour le retrouver dans son nouveau salon. Je recommande fortement.",
  },
  {
    name: "Philippine Grisard Pernel",
    text: "Super salon, Vincent me suit pour ma couleur et mes coupes depuis des annees et j'en suis tres satisfaite. Tres sympa, de bons conseils et en prime un espace vintage pour denicher des vetements !",
  },
  {
    name: "Mathilde Audebert",
    text: "Vincent est mon coiffeur depuis 4 ans maintenant et il est le seul a qui je laisse mes cheveux. Merci encore a lui pour toutes les coupes, du court au long, du blond au chatain... je continue a venir meme de Paris.",
  },
  {
    name: "Armand Audet",
    text: "Si vous cherchez un salon chaleureux et un coiffeur talentueux et a l'ecoute, alors foncez chez Mazette. Je ne fais pas 6km en velo pour aller voir Vincent pour rien, c'est le meilleur !",
  },
  {
    name: "Sonia Bourgeois",
    text: "Cliente de Vincent dans le salon pour lequel il travaillait precedemment, j'ai decide de lui rester fidele et de le suivre dans son nouveau salon. Gentil, a l'ecoute et de bons conseils.",
  },
  {
    name: "Nolwenn Urien",
    text: "Super experience avec Vincent ! Il est tres pro et sait vous conseiller afin de vous proposer la coupe la mieux adaptee a votre visage ainsi qu'a votre mode de vie.",
  },
  {
    name: "Lionel Marty",
    text: "Vincent est toujours agreable, a l'ecoute des envies des clients et toujours de bon conseil. Je suis toujours satisfait des coupes effectuees. Je recommande vivement !",
  },
  {
    name: "Emanuelle Rey",
    text: "Jamais decue, Vincent me coupe les cheveux depuis plus d'1 an. Je n'ai jamais eu autant de compliments sur ma coupe ! Reco a 100%.",
  },
  {
    name: "Maxence H.",
    text: "Vincent est un coiffeur passionne, et dont le talent vous ravira ! Je recommande ++",
  },
  {
    name: "Catherine Bernard",
    text: "Pour la premiere fois que je decouvre ce salon j'ai ete tres agreablement surprise. Vincent est tres a l'ecoute, tres professionnel. C'est un salon qui est vraiment a conseiller.",
  },
  {
    name: "Arnaud Pedebas",
    text: "Tres satisfait des prestations de Vincent, ca correspond toujours a ce que je souhaite, et il est meme de tres bon conseils. C'est bien situe et le lieu est en plus tres chaleureux !",
  },
  {
    name: "Marine Grauer",
    text: "Merci a Vincent pour son professionnalisme et sa gentillesse, il est parfait ! Je recommande les yeux fermes, mes balayages sont parfaits.",
  },
  {
    name: "Bastien Meurer",
    text: "Tres bonne experience dans ce nouveau salon des chartrons, on est toujours tres bien accueilli par Vincent, je recommande !",
  },
  {
    name: "Pierre-Amaury Ranger",
    text: "Salon tres bien place aux chartrons et coiffeur tres professionnel ! Merci pour les coupes.",
  },
  {
    name: "Caroline Dekyvere",
    text: "Tres belle decouverte ! Vous pouvez y aller les yeux fermes. Et ressortir en sachant enfin la nature de vos cheveux.",
  },
  {
    name: "Ugo Navarro",
    text: "Super prestation realisee par Vincent, il est a l'ecoute et attentionne ! En prime le lieu est genial, je recommande vivement !",
  },
  {
    name: "Francois Massiat",
    text: "Vincent est fraichement proprietaire de ce joli lieu tres cosy, il est tres pro je recommande a 1000%.",
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [selectedReviews, setSelectedReviews] = useState<Review[]>([]);

  useEffect(() => {
    setSelectedReviews(shuffleArray(allReviews).slice(0, 6));
  }, []);

  if (selectedReviews.length === 0) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Temoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Ils Nous Font Confiance
          </h2>
          <a
            href="https://www.google.com/maps/place/Mazette/@44.853878,-0.5693644,17z/data=!4m16!1m7!3m6!1s0xd55299fb4fd8b0f:0xd046328116ea8a59!2sMazette!8m2!3d44.853878!4d-0.5693644!16s%2Fg%2F11zj8_tz3s!3m7!1s0xd55299fb4fd8b0f:0xd046328116ea8a59!8m2!3d44.853878!4d-0.5693644!9m1!1b1!16s%2Fg%2F11zj8_tz3s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 mt-4 max-w-xl mx-auto text-lg block hover:text-violet transition-colors underline underline-offset-4"
          >
            100% d&apos;avis 5 etoiles sur Google.
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Stars />
              <p className="text-foreground/70 leading-relaxed mt-4 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-violet rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-violet">
                  {review.name.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
