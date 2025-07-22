'use client'

import { useEffect, useState } from 'react'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'

export default function Weather() {
  const [weather, setWeather] = useState<{ tempZrak?: number; veter?: number; ikonaUrl?: string }>({})

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
    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md shadow flex items-center gap-2 text-xs sm:text-sm text-gray-800">
      <span className="font-semibold">Izola:</span>

      <WiThermometer className="text-blue-600 text-lg" />
      <span>{weather.tempZrak ? `${Math.round(weather.tempZrak)} °C` : '-- °C'}</span>

      <WiStrongWind className="text-blue-600 text-lg" />
      <span>{weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
    </div>
  )
}
