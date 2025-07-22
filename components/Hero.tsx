'use client'

import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [weather, setWeather] = useState<{ tempZrak?: number; veter?: number }>({})

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch('/.netlify/functions/weather')
        if (!res.ok) throw new Error('HTTP ' + res.status)
        const data = await res.json()
        setWeather(data)
      } catch (err) {
        console.error('❌ Napaka pri vremenu:', err)
      }
    }
    fetchWeather()
  }, [])

  return (
    <section
      id="domov"
      className="relative min-h-[100dvh] flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Izola – pogled na morje"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10"></div>

      {/* Desktop Weather */}
      <div className="absolute top-4 right-4 z-20 bg-white/80 text-black rounded-2xl px-4 py-2 shadow-md text-sm backdrop-blur-sm hidden md:block">
        <div className="flex items-center justify-center gap-1 text-primary font-medium mb-1">
          <HiOutlineLocationMarker className="text-base" />
          <span className="text-black">Izola</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-primary">
            <WiThermometer className="text-xl" />
            <span className="text-black font-medium">{weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
          </div>
          <div className="flex items-center gap-1 text-primary font-bold">
            <WiStrongWind className="text-xl" />
            <span className="text-black font-medium">{weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl px-6 flex flex-col items-center">
        {/* Weather - mobile (above title) */}
        <div className="bg-white/80 text-black rounded-2xl px-4 py-2 shadow-md text-sm backdrop-blur-sm mb-6 md:hidden">
          <div className="flex items-center justify-center gap-1 text-primary font-medium mb-1">
            <HiOutlineLocationMarker className="text-base" />
            <span className="text-black">Izola</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-primary">
              <WiThermometer className="text-xl" />
              <span className="text-black font-medium">{weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
            </div>
            <div className="flex items-center gap-1 text-primary font-bold">
              <WiStrongWind className="text-xl" />
              <span className="text-black font-medium">{weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold font-display mb-2 leading-tight text-white animate-bounce-slow">
          <div>Studio</div>
          <div className="text-primary">Aurora</div>
        </h1>

        <p className="text-xl md:text-2xl mb-6 font-body" data-aos="fade-up" data-aos-delay="200">
          Sodoben apartma v umirjenem delu Izole.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
          <a
            href="#rezervacija"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2 justify-center"
          >
            <FaCalendarAlt />
            Rezerviraj zdaj
          </a>
          <a
            href="#galerija"
            className="px-6 py-3 rounded-full font-semibold transition bg-white/20 border border-white hover:bg-gradient-to-r from-primary to-gradientEnd hover:border-transparent"
          >
            Poglej galerijo
          </a>
        </div>
      </div>
    </section>
  )
}
