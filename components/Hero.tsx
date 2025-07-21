'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="domov" className="relative h-[90vh] flex items-center justify-center text-white text-center overflow-hidden">
      <Image
        src="/images/izola-hero.png"
        alt="Izola – pogled na morje"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"></div>
      <div className="relative z-20 max-w-3xl px-6">
        <h1 className="text-5xl font-bold font-display mb-4">
          Studio <span className="text-accent">Aurora</span>
        </h1>
        <p className="text-xl mb-6 font-body">
          Sodoben apartma v mirnem delu Izole z razgledom na morje.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#rezervacija"
            className="px-6 py-3 bg-white text-accent font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Rezerviraj zdaj
          </a>
          <a
            href="#galerija"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-accent transition"
          >
            Poglej galerijo
          </a>
        </div>
      </div>
    </section>
  )
}
