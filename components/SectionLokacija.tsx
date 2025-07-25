import { MapPin, ParkingCircle, Store, UtensilsCrossed, Mountain, Waves } from 'lucide-react'

export default function SectionLokacija() {
  return (
    <section id="lokacija" className="py-20 bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-gray-500 bg-gray-200 rounded-full px-4 py-1">LOKACIJA</span>
        <h2 className="text-4xl font-bold mt-4">
          Ključne <span className="text-[#2DC6F7]">lokacije</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-md">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
            width="100%"
            height="100%"
            className="w-full h-full border-0 rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        {/* PLAŽE */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Waves className="w-5 h-5 text-[#2DC6F7]" />Plaže</h3>
          <ul className="space-y-2">
            <li>Beach Delfinček – 300m</li>
            <li>Beach Garden Pizza & Grill – 350m</li>
            <li>Bele Skale beach – 400m</li>
            <li>Plaža Simonov zaliv – 500m</li>
            <li>Svetilnik Beach Izola – 850m</li>
          </ul>
        </div>

        {/* RESTAVRACIJE */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><UtensilsCrossed className="w-5 h-5 text-[#2DC6F7]" />Restavracije</h3>
          <ul className="space-y-2">
            <li>Gostilna Manjada – 300m</li>
            <li>Gostilna Sonja – 350m</li>
            <li>Primavera – 600m</li>
          </ul>
        </div>

        {/* TRGOVINE */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Store className="w-5 h-5 text-[#2DC6F7]" />Trgovine</h3>
          <ul className="space-y-2">
            <li>Hipermarket SPAR – 400m</li>
            <li>Dm Drogerie Markt – 350m</li>
            <li>Poslovni sistem Mercator – 300m</li>
          </ul>
        </div>

        {/* PARKIRIŠČA */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><ParkingCircle className="w-5 h-5 text-[#2DC6F7]" />Parkirišča</h3>
          <ul className="space-y-2">
            <li>Free-of-Charge Temporary Parking – 200m</li>
            <li>PZA Izola San Simon – 500m</li>
            <li>Parkirišče San Simon – 500m</li>
            <li>Parkirišče za motorna kolesa – 150m</li>
          </ul>
        </div>

        {/* DRUGE LOKACIJE */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Mountain className="w-5 h-5 text-[#2DC6F7]" />Ostalo</h3>
          <ul className="space-y-2">
            <li>Tunnel Entrance – 100m</li>
            <li>Jagodje Viewpoint – 250m</li>
            <li>Pri ladjedelnici – 700m</li>
          </ul>
        </div>

        {/* APARTMA */}
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><MapPin className="w-5 h-5 text-[#2DC6F7]" />Studio Aurora</h3>
          <ul className="space-y-2">
            <li>Na terasah 2, 6310 Izola – vaš dom v Izoli</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
