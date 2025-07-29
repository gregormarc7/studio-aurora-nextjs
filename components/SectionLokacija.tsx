'use client';

import { FaStore, FaUtensils, FaUmbrellaBeach } from 'react-icons/fa';

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
        <p className="mt-3 mb-10 text-center text-gray-700 max-w-2xl mx-auto">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij.
        </p>

        {/* Zemljevid – responsive in centered */}
        <div
          className="w-full max-w-6xl mx-auto aspect-[4/3] rounded-xl overflow-hidden shadow mb-10"
          aria-label="Zemljevid z označenimi lokacijami v Izoli"
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zemljevid ključnih lokacij v Izoli"
          ></iframe>
        </div>

        {/* Lokacije – 3 stolpci */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Plaže */}
          <div>
            <h4
              className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-3"
              id="plaze-heading"
            >
              <FaUmbrellaBeach /> Plaže
            </h4>
            <ul className="space-y-1 text-sm text-gray-700" role="list" aria-labelledby="plaze-heading">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <h4
              className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-3"
              id="restavracije-heading"
            >
              <FaUtensils /> Restavracije
            </h4>
            <ul className="space-y-1 text-sm text-gray-700" role="list" aria-labelledby="restavracije-heading">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <h4
              className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-3"
              id="trgovine-heading"
            >
              <FaStore /> Trgovine
            </h4>
            <ul className="space-y-1 text-sm text-gray-700" role="list" aria-labelledby="trgovine-heading">
              <li>Hipermarket SPAR</li>
              <li>Dm Drogerie Markt</li>
              <li>Poslovni sistem Mercator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
