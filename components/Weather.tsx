'use client'
import { useEffect, useState } from 'react'
import { WiThermometer, WiStrongWind } from 'react-icons/wi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function WeatherFloating() {
  const [weather, setWeather] = useState<{ tempZrak?: number; veter?: number }>({})

  useEffect(() => {
    fetch('/.netlify/functions/weather')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(setWeather)
      .catch(console.error)
  }, [])

  const temp = weather.tempZrak ? `${Math.round(weather.tempZrak)}°C` : '--°C'
  const wind = weather.veter     ? `${Math.round(weather.veter)} km/h` : '-- km/h'

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
    </div>
  )
}
