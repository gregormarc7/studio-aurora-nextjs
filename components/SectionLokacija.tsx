import { MapPin, Store, UtensilsCrossed, Waves } from 'lucide-react'

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-sky-500 mb-2">
          Lokacija
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Ključne <span className="text-sky-500">lokacije</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>

        <div className="mt-10 flex justify-center">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
            width="100%"
            height="450"
            className="rounded-xl shadow-lg border"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 text-left">
          {/* Plaže */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Waves className="text-sky-500 w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Plaže</h3>
            </div>
            <ul className="text-gray-700 space-y-1">
              <li>Beach Delfinček</li>
              <li>Bele Skale beach</li>
              <li>Plaža Simonov zaliv</li>
              <li>Svetilnik Beach Izola</li>
            </ul>
          </div>

          {/* Restavracije */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <UtensilsCrossed className="text-sky-500 w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Restavracije</h3>
            </div>
            <ul className="text-gray-700 space-y-1">
              <li>Gostilna Manjada</li>
              <li>Gostilna Sonja</li>
              <li>Primavera</li>
              <li>Beach Garden Pizza & Grill</li>
            </ul>
          </div>

          {/* Trgovine */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Store className="text-sky-500 w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Trgovine</h3>
            </div>
            <ul className="text-gray-700 space-y-1">
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
