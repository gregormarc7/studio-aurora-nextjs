export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-gradientStart to-gradientEnd text-white text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold font-display mb-4">Studio <span className="text-accent">Aurora</span></h1>
        <p className="text-xl mb-6 font-body">Sodoben apartma v mirnem delu Izole z razgledom na morje.</p>
        <div className="flex gap-4 justify-center">
          <a href="#rezervacija" className="px-6 py-3 bg-white text-gradientEnd font-semibold rounded-full shadow-lg hover:scale-105 transition">Rezerviraj zdaj</a>
          <a href="#galerija" className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gradientEnd transition">Poglej galerijo</a>
        </div>
      </div>
    </section>
  )
}
