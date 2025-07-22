'use client'

import { useEffect, useState } from 'react'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'

export default function Weather() {
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
    <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-sm text-gray-900 flex items-center gap-3">
      <WiThermometer className="text-blue-500 text-xl" />
      <span className="font-semibold">{weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
      <WiStrongWind className="text-blue-500 text-xl" />
      <span>{weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
    </div>
  )
}
