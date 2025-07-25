"use client"

import { FaUmbrellaBeach, FaUtensils, FaStore } from "react-icons/fa"

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Naslov */}
        <div className="flex justify-center mb-2">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            Lokacija
          </span>
        </div>
        <h2 className="text-center text-4xl font-bold">
          Ključne <span className="text-[#2DC6F7]">lokacije</span>
        </h2>
        <p className="mt-2 mb-10 text-center text-gray-700 text-lg max-w-3xl mx-auto">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>

        {/* Zemljevid */}
        <div className="rounded-xl overflow-hidden shadow mb-12">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Lokacije – 3 kolone */}
        <div className="grid md:grid-cols-3 gap-10 text-sm text-gray-800">
          {/* Plaže */}
          <div>
            <h3 className="flex items-center gap-2 text-[#2DC6F7] font-semibold text-lg mb-3">
              <FaUmbrellaBeach /> Plaže
            </h3>
            <ul className="space-y-1">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <h3 className="flex items-center gap-2 text-[#2DC6F7] font-semibold text-lg mb-3">
              <FaUtensils /> Restavracije
            </h3>
            <ul className="space-y-1">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <h3 className="flex items-center gap-2 text-[#2DC6F7] font-semibold text-lg mb-3">
              <FaStore /> Trgovine
            </h3>
            <ul className="space-y-1">
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
