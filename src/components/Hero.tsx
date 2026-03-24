import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/salon2.jpeg"
          alt="Interieur du salon Mazette Coiffure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-dark/90 via-violet/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-beige text-sm">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              Bordeaux - Quartier Notre-Dame
            </div>
            <h1>
              <Image
                src="/images/logo-mazette.svg"
                alt="Mazette Coiffure"
                width={400}
                height={125}
                priority
              />
            </h1>
            <p className="text-xl text-beige/90 leading-relaxed max-w-lg">
              Notre salon est un lieu ouvert et bienveillant, où chacun·e est
              accueilli·e avec simplicité et attention.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.planity.com/mazette-33300-bordeaux"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-light transition-colors text-center"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#salon"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-center backdrop-blur-sm"
            >
              Decouvrir le salon
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-black text-orange">10+</div>
              <div className="text-beige/70 text-sm">ans d&apos;experience</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-black text-orange">Lun-Ven</div>
              <div className="text-beige/70 text-sm">9h - 20h</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
