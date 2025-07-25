"use client"

import { MapPin, Store, UtensilsCrossed, Waves } from 'lucide-react'

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Naslov */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            Lokacija
          </span>
        </div>
        <h2 className="text-center text-4xl font-bold mt-1">
          Ključne <span className="text-[#2DC6F7]">lokacije</span>
        </h2>
        <p className="mt-3 mb-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>

        {/* Google zemljevid */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Dj0Q2ZwJpXq3OeYZyUVvYAG8eHu7Otk&ehbc=2E312F"
            width="100%"
            height="480"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Seznam lokacij */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Plaže */}
          <div>
            <div className="flex justify-center mb-2">
              <Waves className="text-[#2DC6F7]" />
            </div>
            <h3 className="font-semibold mb-2">Plaže</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <div className="flex justify-center mb-2">
              <UtensilsCrossed className="text-[#2DC6F7]" />
            </div>
            <h3 className="font-semibold mb-2">Restavracije</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <div className="flex justify-center mb-2">
              <Store className="text-[#2DC6F7]" />
            </div>
            <h3 className="font-semibold mb-2">Trgovine</h3>
            <ul className="text-sm text-gray-700 space-y-1">
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
