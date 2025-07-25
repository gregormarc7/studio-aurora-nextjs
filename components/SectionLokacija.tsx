export default function SectionLokacija() {
  return (
    <section id="lokacija" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        {/* Naslov sekcije */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full mb-3">
            LOKACIJA
          </div>
          <h2 className="text-4xl font-bold">
            Ključne <span className="text-primary">lokacije</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Studio Aurora se nahaja v idealnem delu Izole z lahkim dostopom do vseh pomembnih lokacij
          </p>
        </div>

        {/* Vsebina: zemljevid + lokacije */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Embed Google My Maps */}
          <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1Md86RX51cMSg8EdYq8spTYiMp8suye0&ehbc=2E312F"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Seznam lokacij v 2-3 kolone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              ['Studio Aurora', 'Vaš dom v Izoli'],
              ['Gostilna Marica', '150m – tradicionalna istrska kuhinja'],
              ['Restavracija Ribič', '300m – sveže morske jedi'],
              ['Plaža Simonov zaliv', '400m – modra zastava'],
              ['Mestna plaža', '600m – družinska plaža'],
              ['Mercator Center', '200m – nakupovalni center'],
              ['Staro mestno jedro', '500m – zgodovinske znamenitosti'],
              ['Tunnel Entrance', '200m – Parenzana'],
              ['Beach Delfinček', 'Plaža – 8 min hoje'],
              ['Gostilna Sonja', 'Domača kuhinja'],
              ['Svetilnik Beach', 'Zahodna obala Izole'],
              ['PZA Izola', 'San Simon – parkirišče za avtodome'],
              ['Free Parking', 'Brezplačno parkirišče 50m stran'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white rounded-lg shadow-sm p-4">
                <div className="font-semibold text-gray-800">{title}</div>
                <div className="text-gray-500 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
