'use client'

import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import clsx from 'clsx'

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
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"></div>

      <div className="relative z-20 max-w-3xl px-6 flex flex-col items-center">
        <h1
          className={clsx(
            'text-6xl md:text-7xl font-bold font-display mb-2',
            'animate-[wiggle_2s_infinite]'
          )}
        >
          <span className="block">Studio</span>
          <span className="block text-[#63b3ed]">Aurora</span>
        </h1>
        <p
          className="text-xl mb-8 font-body text-white"
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
            className="px-6 py-3 bg-[#63b3ed] hover:bg-[#4299e1] text-white font-semibold rounded-full shadow-lg flex items-center gap-2 transition"
          >
            <FaCalendarAlt /> Rezerviraj zdaj
          </a>
          <a
            href="#galerija"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-accent transition"
          >
            Poglej galerijo
          </a>
        </div>
      </div>

      {/* Tailwind plugin za custom animacijo */}
      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  )
}
