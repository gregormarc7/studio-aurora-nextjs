'use client'

import Image from 'next/image'
import Weather from './Weather'

export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-[100dvh] flex items-center justify-center text-white text-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Izola – pogled na morje"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"></div>

      {/* Vreme desno zgoraj */}
      <div className="absolute top-4 right-4 z-30">
        <Weather />
      </div>

      {/* Glavna vsebina */}
      <div className="relative z-20 max-w-3xl px-6">
        <h1 className="text-5xl font-bold font-display mb-4 leading-tight" data-aos="fade-up">
          <span>Studio</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
            Aurora
          </span>
        </h1>
        <p
          className="text-xl mb-6 font-body"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Sodoben apartma v umirjenem delu Izole.
        </p>
        <div
          className="flex gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#rezervacija"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
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
