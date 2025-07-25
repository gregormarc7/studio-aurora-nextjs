"use client"

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

        {/* Glavna mreža */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Leva stran – Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.2968893705326!2d13.631671476303728!3d45.52827097107571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6dca6f45c71f%3A0xc537336d7c3fa9cf!2sNa%20terasah%202%2C%206310%20Izola!5e0!3m2!1ssl!2ssi!4v1721874857343!5m2!1ssl!2ssi"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Desna stran – ključne točke */}
          <div className="space-y-4">
            {[
              ["Studio Aurora", "Vaš dom v Izoli", "🏠"],
              ["Gostilna Marica", "150m – tradicionalna istrska kuhinja", "🍽️"],
              ["Restavracija Ribič", "300m – fresh seafood", "🍤"],
              ["Plaža Simonov zaliv", "400m – modra zastava", "🌊"],
              ["Mestna plaža", "600m – družinska plaža", "🏖️"],
              ["Mercator Center", "200m – nakupovalni center", "🛒"],
              ["Staro mestno jedro", "500m – zgodovinske znamenitosti", "🏛️"],
            ].map(([title, desc, icon], i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="text-2xl">{icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">{title}</div>
                  <div className="text-sm text-gray-500">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dostopnost in parkirišča */}
        <div className="bg-white rounded-xl shadow mt-16 p-6 md:p-8 grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Dostopnost</h4>
            <ul className="space-y-1">
              <li>Letališče Portorož: <strong>15 min</strong></li>
              <li>Koper: <strong>20 min</strong></li>
              <li>Ljubljana: <strong>1h 30min</strong></li>
              <li>Benetke: <strong>2h</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Parkirišče</h4>
            <ul className="space-y-1">
              <li>Brezplačno parkiranje na voljo v bližini apartmaja</li>
              <li>Javno parkirišče: <strong>50m</strong></li>
              <li>Ulično parkiranje: <strong>brezplačno</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
