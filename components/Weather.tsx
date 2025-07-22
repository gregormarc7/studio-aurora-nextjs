'use client'
import { useEffect, useState } from 'react'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'
import { HiLocationMarker } from 'react-icons/hi'

export default function Weather() {
  const [weather, setWeather] = useState<{
    tempZrak?: number
    veter?: number
  }>({})

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
    <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md text-sm rounded-xl shadow-md px-4 py-2 flex flex-col items-start gap-1 z-30">
      <div className="flex items-center gap-1 text-gray-700 font-medium">
        <HiLocationMarker className="text-red-500 text-lg" />
        <span>Izola</span>
      </div>
      <div className="flex items-center gap-2 text-gray-800 font-semibold">
        <WiThermometer className="text-blue-500 text-xl" />
        <span>{weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
        <WiStrongWind className="text-gray-400 text-xl" />
        <span className="text-gray-500 font-normal">
          {weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}
        </span>
      </div>
    </div>
  )
}
