"use client"

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
        <p className="mt-2 mb-10 text-center text-gray-700 max-w-2xl mx-auto">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>

        {/* Zemljevid */}
        <div className="mb-12 flex justify-center">
          <iframe
            title="Studio Aurora Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1v9mWk_pMqNLoy3Jjc2scvwEO-d_UzPc&ehbc=2E312F"
            width="100%"
            height="500"
            className="rounded-xl shadow-lg w-full max-w-6xl"
            allowFullScreen
          ></iframe>
        </div>

        {/* Kategorije lokacij */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-center text-gray-800 max-w-4xl mx-auto">
          {/* Plaže */}
          <div>
            <div className="flex items-center justify-center gap-2 font-semibold text-[#2DC6F7] mb-2">
              <span>🌊</span> <span>Plaže</span>
            </div>
            <ul className="space-y-1">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <div className="flex items-center justify-center gap-2 font-semibold text-[#2DC6F7] mb-2">
              <span>🍽️</span> <span>Restavracije</span>
            </div>
            <ul className="space-y-1">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <div className="flex items-center justify-center gap-2 font-semibold text-[#2DC6F7] mb-2">
              <span>🛒</span> <span>Trgovine</span>
            </div>
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
