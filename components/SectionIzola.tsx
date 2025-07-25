"use client"

export default function SectionOIzoli() {
  return (
    <section id="o-izoli" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Naslov */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            O Izoli
          </span>
        </div>
        <h2 className="text-center text-4xl font-bold mt-1">
          Sproščen <span className="text-[#2DC6F7]">mediteranski utrip</span>
        </h2>
        <p className="mt-3 text-center text-gray-700 max-w-3xl mx-auto">
          Izola je očarljivo obmorsko mesto na slovenski obali, kjer se prepletajo bogata ribiška dediščina,
          barvite ulice, številne plaže in izvrstna kulinarika. Sprehodite se po ozkih tlakovanih ulicah, obiščite lokalne
          trge in se prepustite soncu ter morskemu zraku.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold text-[#2DC6F7] mb-2">Zgodovina & Kultura</h4>
            <p className="text-sm text-gray-600">
              Izola je nekdaj bila otok, danes pa njene ribiške in kulturne korenine navdihujejo domačine in obiskovalce.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold text-[#2DC6F7] mb-2">Kolesarjenje & Narava</h4>
            <p className="text-sm text-gray-600">
              Priljubljena Parenzana pot, ki vodi mimo apartmaja, vas popelje skozi slikovite tunelske poti in vinorodne griče.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold text-[#2DC6F7] mb-2">Kulinarični raj</h4>
            <p className="text-sm text-gray-600">
              Od morskih dobrot do domačega vina – Izola ponuja bogat izbor restavracij, vinskih kleti in lokalnih doživetij.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
