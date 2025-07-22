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
    <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md px-4 py-3 z-30 w-fit text-sm flex flex-col items-center gap-2">
      <div className="flex flex-col items-center">
        <HiLocationMarker className="text-blue-500 text-lg" />
        <span className="text-gray-800 text-xs font-medium">Izola</span>
      </div>

      <div className="flex items-center gap-4 text-gray-800 font-semibold">
        <div className="flex items-center gap-1">
          <WiThermometer className="text-blue-500 text-lg" />
          <span>{weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
        </div>

        <div className="flex items-center gap-1">
          <WiStrongWind className="text-blue-500 text-lg" />
          <span className="text-gray-500 text-sm font-normal">
            {weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}
          </span>
        </div>
      </div>
    </div>
  )
}
