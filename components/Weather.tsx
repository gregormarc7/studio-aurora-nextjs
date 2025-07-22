'use client'

import { useEffect, useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState<{
    tempZrak?: number
    veter?: number
    ikonaUrl?: string
    opis?: string
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
    <div className="fixed top-4 right-4 bg-blue-100 text-blue-900 px-4 py-3 rounded-xl shadow-lg text-sm flex flex-col items-start min-w-[160px] z-50">
      <div className="flex items-center justify-between w-full mb-1">
        <span className="font-semibold">🌍 Izola</span>
        {weather.ikonaUrl && (
          <img src={weather.ikonaUrl} alt="Vremenska ikona" className="h-5 w-5 ml-2" />
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">🌡️ {weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}</span>
        <span className="text-sm">💨 {weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
      </div>
      <span className="text-xs text-gray-600 mt-1">Sunny in Izola</span>
    </div>
  )
}
