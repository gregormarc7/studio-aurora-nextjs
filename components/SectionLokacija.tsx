'use client'

import {
  Waves,
  UtensilsCrossed,
  Store
} from 'lucide-react'

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full bg-blue-100 text-blue-500">
          Lokacija
        </span>
        <h2 className="text-4xl font-bold mb-4">
          Ključne <span className="text-blue-500">lokacije</span>
        </h2>
        <p className="mb-10 max-w-xl mx-auto text-gray-600">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>

        {/* Zemljevid */}
        <div className="rounded-xl overflow-hidden shadow-lg aspect-video mb-12">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Lokacije */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Plaže */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <Waves className="w-5 h-5 text-sky-500" /> Plaže
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <UtensilsCrossed className="w-5 h-5 text-sky-500" /> Restavracije
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <Store className="w-5 h-5 text-sky-500" /> Trgovine
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Hipermarket SPAR</li>
              <li>Dm Drogerie Markt</li>
              <li>Poslovni sistem Mercator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
