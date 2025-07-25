export default function SectionLokacija() {
  return (
    <section id="lokacija" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Naslov sekcije */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            LOKACIJA
          </span>
          <h2 className="text-4xl font-bold">
            Ključne <span className="text-primary">lokacije</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
          </p>
        </div>

        {/* Zemljevid */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg aspect-video">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Lokacije v več kolonah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            ['Hipermarket SPAR', 'Trgovina z živili'],
            ['Apartma - Studio Aurora Izola', 'Vaš dom v Izoli'],
            ['Beach Delfinček', 'Plaža'],
            ['Beach Garden Pizza & Grill', 'Restavracija'],
            ['Bele Skale beach', 'Plaža'],
            ['Dm Drogerie Markt', 'Trgovina'],
            ['Free-of-Charge Temporary Parking', 'Parkirišče'],
            ['Gostilna Manjada... pu naše', 'Restavracija'],
            ['Gostilna Sonja', 'Restavracija'],
            ['Jagodje Viewpoint', 'Razgledna točka'],
            ['PZA Izola, San Simon', 'Parkirišče'],
            ['Parkirišče San Simon', 'Parkirišče'],
            ['Parkirišče za motorna kolesa', 'Parkirišče'],
            ['Plaža Simonov zaliv', 'Plaža'],
            ['Poslovni sistem Mercator d.d.', 'Trgovina'],
            ['Pri ladjedelnici', 'Lokacija'],
            ['Primavera', 'Restavracija'],
            ['Svetilnik Beach Izola', 'Plaža'],
            ['Tunnel Entrance', 'Parenzana']
          ].map(([ime, opis]) => (
            <div key={ime} className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-primary text-sm mb-1">{ime}</h3>
              <p className="text-xs text-gray-500">{opis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
