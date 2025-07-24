'use client'

import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [weather, setWeather] = useState<{ tempZrak?: number; veter?: number }>({})

  useEffect(() => {
    fetch('/.netlify/functions/weather')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(setWeather)
      .catch(e => console.error('❌ Napaka pri vremenu:', e))
  }, [])

  const temp = weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'
  const wind = weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'

  return (
    <section
      id="domov"
      className="relative h-[100dvh] flex items-center justify-center text-white text-center overflow-hidden scroll-mt-24"
    >
      {/* ozadje */}
      <Image
        src="/images/hero.jpg"
        alt="Izola – pogled na morje"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/20 to-black/60" />

      {/* vreme – desktop */}
      <div className="hidden md:block absolute top-4 right-4 z-20">
        <WeatherBox temp={temp} wind={wind} />
      </div>

      {/* vreme – mobile */}
      <div className="block md:hidden absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <WeatherBox temp={temp} wind={wind} />
      </div>

      {/* vsebina */}
      <div className="relative z-20 max-w-3xl px-6 flex flex-col items-center">
        <h1 className="font-display font-bold leading-tight animate-bounce-slow text-6xl md:text-7xl">
          <div>Studio</div>
          <div className="text-primary">Aurora</div>
        </h1>
        <p className="text-xl md:text-2xl mt-4 mb-8">
          Sodoben apartma v umirjenem delu Izole.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#povprasevanje"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2 justify-center"
          >
            <FaCalendarAlt /> Rezerviraj zdaj
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

function WeatherBox({ temp, wind }: { temp: string; wind: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm text-black rounded-2xl px-4 py-2 shadow-md text-sm">
      <div className="flex items-center justify-center gap-1 text-primary font-medium mb-1">
        <HiOutlineLocationMarker className="text-base" />
        <span className="text-black">Izola</span>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="flex items-center gap-1 text-primary">
          <WiThermometer className="text-xl" />
          <span className="text-black font-medium">{temp}</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-bold">
          <WiStrongWind className="text-xl" />
          <span className="text-black font-medium">{wind}</span>
        </div>
      </div>
    </div>
  )
}
