import { useEffect, useState } from 'react'

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
    <div className="fixed top-0 right-0 bg-white bg-opacity-80 px-4 py-1 rounded-bl-lg shadow-md flex items-center gap-2 z-40">
      <span className="font-medium">Izola:</span>
      {weather.ikonaUrl && <img src={weather.ikonaUrl} alt="Vremenska ikona" className="h-6" />}
      <span>{weather.tempZrak ? `${Math.round(weather.tempZrak)} °C` : '-- °C'}</span>
      <span>💨</span>
      <span>{weather.veter ? `${Math.round(weather.veter)} km/h` : '-- km/h'}</span>
    </div>
  )
}
