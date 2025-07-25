"use client";

import { FaUmbrellaBeach, FaUtensils, FaShoppingCart } from "react-icons/fa";

export default function LokacijaSection() {
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

        {/* Zemljevid */}
        <div className="overflow-hidden rounded-xl shadow-xl w-full aspect-[3/2] mb-12">
          <iframe
            title="Studio Aurora Map"
            src="https://www.google.com/maps/d/embed?mid=1AsgZmpLBRDnEhJbLv4l_B4rpLEvw2Hs&ehbc=2E312F"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>

        {/* Seznami lokacij */}
        <div className="grid md:grid-cols-3 gap-8 text-sm text-center">
          {/* Plaže */}
          <div>
            <div className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-2">
              <FaUmbrellaBeach className="text-base" /> Plaže
            </div>
            <ul className="space-y-1 text-gray-800">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <div className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-2">
              <FaUtensils className="text-base" /> Restavracije
            </div>
            <ul className="space-y-1 text-gray-800">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <div className="flex items-center justify-center gap-2 text-[#2DC6F7] font-semibold mb-2">
              <FaShoppingCart className="text-base" /> Trgovine
            </div>
            <ul className="space-y-1 text-gray-800">
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
