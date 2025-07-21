export default function Hero() {
  return (
    <section
      id="domov"
      className="relative h-screen flex items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage: `url('/images/cover_izola.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gradientStart/60 to-gradientEnd/80 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
          Studio <span className="text-accent">Aurora</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 font-body">
          Sodoben apartma v umirjenem delu Izole z razgledom na morje.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rezervacija"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Rezerviraj zdaj
          </a>
          <a
            href="#galerija"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gradientEnd transition"
          >
            Poglej galerijo
          </a>
        </div>
      </div>

      {/* optional scroll hint */}
      <div className="absolute bottom-8 animate-bounce text-white">
        ⬇️
      </div>
    </section>
  )
}
