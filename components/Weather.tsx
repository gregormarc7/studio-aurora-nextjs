'use client'
import { useEffect, useState } from 'react'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
    <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md rounded-xl px-4 py-2 shadow-md z-40 text-sm text-gray-800">
      {/* Lokacija */}
      <div className="flex items-center justify-center gap-1 mb-1 text-blue-600 font-medium">
        <FaMapMarkerAlt className="text-blue-600" />
        <span>Izola</span>
      </div>

      {/* Vreme info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-blue-600">
          <WiThermometer size={20} />
          <span className="text-gray-800 font-semibold">
            {weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <WiStrongWind size={20} className="text-blue-600" />
          <span className="text-gray-800 font-normal">
            {weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}
          </span>
        </div>
      </div>
    </div>
  )
}
