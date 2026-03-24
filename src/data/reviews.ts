interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Mickael",
    text: "J'ai eu la chance de decouvrir ce nouveau salon tenu par Vincent, et quelle belle surprise ! Le lieu est spacieux et moderne, avec une decoration vraiment soignee qui met tout de suite a l'aise. Vincent est non seulement tres professionnel, mais aussi de tres bon conseil. Il prend le temps d'ecouter ce qu'on souhaite et propose des solutions adaptees. J'ai particulierement apprecie son approche inclusive et bienveillante. Le salon etant tout neuf, tout est impeccable et l'ambiance est chaleureuse. Vincent s'est montre tres arrangeant pour le rendez-vous, ce qui est vraiment appreciable. Je recommande vivement Mazette pour tous ceux qui cherchent un salon de qualite a Bordeaux ou on se sent bien accueilli. Une belle adresse a soutenir !",
  },
  {
    name: "Melinda",
    text: "Vincent est un coiffeur tres agreable et a l'ecoute. Il s'occupe de mes cheveux depuis quelques annees a present, j'ai toujours ete tres satisfaite de ses prestations et de ses conseils. C'est donc naturellement que je l'ai suivi dans son nouveau salon car quand on trouve un bon coiffeur on le garde. Je lui souhaite beaucoup de reussite dans cette nouvelle aventure.",
  },
  {
    name: "Maxime",
    text: "C'etait en tout logique que je me devais de suivre Vincent dans son nouveau salon apres plus de 2 ans a lui faire confiance pour mes cheveux. Et bien ce nouveau lieu est encore plus chouette ! La deco y est plus joli, le cafe y est meilleur et mes coupes sont toujours aussi reussi ! A tres vite !",
  },
  {
    name: "Florent",
    text: "Vincent est mon coiffeur depuis mon arrivee a Bordeaux, et il a toujours su repondre a mes attentes dans la joie et la bonne humeur ! Son nouveau salon Mazette est a son image : accueillant, moderne et chaleureux. Je le recommande vivement a celles et ceux qui cherchent un coiffeur talentueux et attentionne.",
  },
  {
    name: "Marie",
    text: "J'ai pris rendez-vous avec Vincent qui a repris le salon de mon ancien coiffeur et c'etait vraiment un super moment. Je suis tres contente d'y etre allee. Vincent est tres a l'ecoute, il m'a demande de bien detailler ce que je voulais et le resultat patine et coupe est top ! J'ai passe un bon moment de detente, nous avons bien discute et il m'a tres bien conseille. J'y retourne en debut d'annee !",
  },
  {
    name: "Laure",
    text: "Vincent est tout simplement un super coiffeur/coloriste qui est a l'ecoute et qui sait realiser tous nos souhaits.",
  },
  {
    name: "Fabrice",
    text: "Je recommande vivement ce salon de coiffure ! L'accueil est toujours chaleureux, Vincent est aux petits soins et tres professionnel. Le cadre est agreable et apaisant, ce qui rend le moment encore plus plaisant. Bref, un vrai coup de coeur, c'est devenu mon salon de reference !",
  },
  {
    name: "Solene",
    text: "Un magicien ! Je n'ai jamais eu un balayage aussi beau ! Fluide, la couleur est splendide et la coupe aussi. Quel plaisir d'avoir un coiffeur qui comprend egalement les cheveux textures !",
  },
  {
    name: "Stephane",
    text: "Avec Mazette c'est Bien ! Avec Vincent c'est Mieux... Veritable Professionnel de la coiffure, Vincent sait etre a l'ecoute mais fait egalement de bonnes propositions... c'est un artiste et en plus il est sympathique !",
  },
  {
    name: "Jayson",
    text: "Un immense bravo a Vincent pour l'ouverture de son salon Mazette ! C'est toujours un vrai plaisir de passer entre ses mains : a l'ecoute, attentionne, talentueux et toujours de bon conseil. On se sent accueilli comme a la maison, dans une ambiance chaleureuse et detendue. Je lui souhaite tout le succes qu'il merite dans cette nouvelle aventure.",
  },
  {
    name: "Monica",
    text: "Vincent a toute ma confiance depuis de nombreuses annees, autant pour la coupe que la couleur. Il cache mes cheveux blancs et leur offre de beaux reflets naturels sans me laisser m'ennuyer en sa compagnie. Toujours un plaisir pour moi.",
  },
  {
    name: "Pascale",
    text: "Vincent me coiffe depuis plusieurs annees. Je ne peux que recommander de faire appel a son professionnalisme. Conseils coupe et couleur sont toujours pertinents et adaptes. Il tient egalement compte de la nature de vos cheveux et vos habitudes de soins et de coiffure. Vous aurez toujours ce qui convient a vos cheveux, a votre style et a vos habitudes. Il prend toujours le temps de verifier avec moi ce que je souhaite a chaque prestation alors qu'il me coiffe depuis longtemps. Pour terminer il est super agreable et sympa !",
  },
  {
    name: "Marie Helene",
    text: "Vincent me fait une coupe courte toujours parfaite. Je n'ai pas hesite a traverser tout Bordeaux pour le retrouver dans son nouveau salon. Je recommande fortement.",
  },
  {
    name: "Philippine",
    text: "Super salon, Vincent me suit pour ma couleur et mes coupes depuis des annees et j'en suis tres satisfaite. Tres sympa, de bons conseils et en prime un espace vintage pour denicher des vetements !",
  },
  {
    name: "Mathilde",
    text: "Vincent est mon coiffeur depuis 4 ans maintenant et il est le seul a qui je laisse mes cheveux. Merci encore a lui pour toutes les coupes, du court au long, du blond au chatain... je continue a venir meme de Paris.",
  },
  {
    name: "Armand",
    text: "Si vous cherchez un salon chaleureux et un coiffeur talentueux et a l'ecoute, alors foncez chez Mazette. Je ne fais pas 6km en velo pour aller voir Vincent pour rien, c'est le meilleur !",
  },
  {
    name: "Sonia",
    text: "Cliente de Vincent dans le salon pour lequel il travaillait precedemment, j'ai decide de lui rester fidele et de le suivre dans son nouveau salon. Gentil, a l'ecoute et de bons conseils.",
  },
  {
    name: "Nolwenn",
    text: "Super experience avec Vincent ! Il est tres pro et sait vous conseiller afin de vous proposer la coupe la mieux adaptee a votre visage ainsi qu'a votre mode de vie. Il est en plus tres sympathique ! Tout ce qu'il faut pour passer un bon moment, je ne peux que recommander.",
  },
  {
    name: "Lionel",
    text: "Vincent est toujours agreable, a l'ecoute des envies des clients et toujours de bon conseil. Je suis toujours satisfait des coupes effectuees. Je recommande vivement !",
  },
  {
    name: "Emanuelle",
    text: "Jamais decue, Vincent me coupe les cheveux depuis plus d'1 an. Je n'ai jamais eu autant de compliments sur ma coupe ! Reco a 100%.",
  },
  {
    name: "Maxence",
    text: "Vincent est un coiffeur passionne, et dont le talent vous ravira ! Je recommande ++",
  },
  {
    name: "Catherine",
    text: "Pour la premiere fois que je decouvre ce salon j'ai ete tres agreablement surprise. Vincent est tres a l'ecoute, tres professionnel. C'est un salon qui est vraiment a conseiller.",
  },
  {
    name: "Arnaud",
    text: "Tres satisfait des prestations de Vincent, ca correspond toujours a ce que je souhaite, et il est meme de tres bon conseils pour apporter quelques changements a ma coupe de temps en temps. C'est bien situe et le lieu est en plus tres chaleureux !",
  },
  {
    name: "Marine",
    text: "Merci a Vincent pour son professionnalisme et sa gentillesse, il est parfait ! Je recommande les yeux fermes, mes balayages sont parfaits.",
  },
  {
    name: "Bastien",
    text: "Tres bonne experience dans ce nouveau salon des chartrons, on est toujours tres bien accueilli par Vincent, je recommande !",
  },
  {
    name: "Pierre-Amaury",
    text: "Salon tres bien place aux chartrons et coiffeur tres professionnel ! Merci pour les coupes.",
  },
  {
    name: "Caroline",
    text: "Tres belle decouverte ! Vous pouvez y aller les yeux fermes. Et ressortir en sachant enfin la nature de vos cheveux.",
  },
  {
    name: "Ugo",
    text: "Super prestation realisee par Vincent, il est a l'ecoute et attentionne ! En prime le lieu est genial, je recommande vivement !",
  },
  {
    name: "Francois",
    text: "Vincent est fraichement proprietaire de ce joli lieu tres cosy, il est tres pro je recommande a 1000%.",
  },
  {
    name: "Alissa",
    text: "Tres a l'ecoute et prend le temps de conseiller le tout dans une ambiance conviviale, je conseille fortement.",
  },
  {
    name: "Margot",
    text: "Toujours au top pour sublimer mes cheveux blonds !",
  },
];

export default reviews;
