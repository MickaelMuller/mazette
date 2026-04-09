export default function Location() {
  return (
    <section className="py-24 bg-beige-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold uppercase tracking-widest text-sm">
            Accès
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-violet mt-2">
            Nous Trouver
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=130+Rue+Notre-Dame+33000+Bordeaux&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mazette Coiffure - Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
