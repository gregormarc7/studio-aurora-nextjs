'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {
  FaUmbrellaBeach,
  FaUsers,
  FaWifi,
  FaCar,
  FaEyeSlash,
  FaBicycle,
  FaShoppingCart,
  FaUtensils,
  FaTv,
  FaBed,
  FaBath,
  FaWind
} from 'react-icons/fa'

const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)

export default function SectionApartma() {
  const [selected, setSelected] = useState(0)
  const [open, setOpen]      = useState(false)
  const [fade, setFade]      = useState(false)

  /* --- helpers --- */
  useEffect(() => {
    setFade(false)
    const t = setTimeout(() => setFade(true), 80)
    return () => clearTimeout(t)
  }, [selected])

  const prev = () => setSelected(s => (s === 0 ? images.length - 1 : s - 1))
  const next = () => setSelected(s => (s === images.length - 1 ? 0 : s + 1))

  return (
    <section id="apartma" className="bg-gray-50 py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            O Apartmaju
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Vaš popoln <span className="text-[#2DC6F7]">dopust</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Studio Aurora je sodobno opremljen studio-apartma za dve osebi. Nahaja se
            v mirni soseski Izole, 10&nbsp;minut hoje od plaže in 2&nbsp;minuti od
            kolesarske poti&nbsp;Parenzana.
          </p>
        </div>

        {/* Image + right column */}
        <div className="grid lg:grid-cols-[minmax(0,640px)_1fr] gap-14 items-start">

          {/* Image */}
          <div>
            <img
              src="/images/izola-hero.png"
              alt="Pogled na Izolo"
              className="rounded-3xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Zakaj izbrati Studio Aurora?
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Izola očara z obalo, kulturnim utripom in odlično kulinariko. Naš
              apartma je idealna izhodiščna točka, če želite doživeti to
              čarobno&nbsp;mesto v mirnem in udobnem okolju.
            </p>

            {/* 3-column feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              <Feature icon={<FaUmbrellaBeach />} label="850 m do plaže" />
              <Feature icon={<FaUsers />}        label="Do 2 gosta" />
              <Feature icon={<FaWifi />}         label="Brezplačen Wi-Fi" />

              <Feature icon={<FaCar />}          label="Brezplačno parkiranje" />
              <Feature icon={<FaEyeSlash />}     label="Zasebnost" />
              <Feature icon={<FaBicycle />}      label="180 m do Parenzane" />

              <Feature icon={<FaShoppingCart />} label="600 m do trgovine" />
              <Feature icon={<FaUtensils />}     label="800 m do restavracij" />
              <Feature icon={<FaTv />}           label="TV + Netflix" />

              <Feature icon={<FaBed />}          label="Posteljnina & brisače" />
              <Feature icon={<FaBath />}         label="Kuhinja & kopalnica" />
              <Feature icon={<FaWind />}         label="Klima & prezračevanje" />
            </div>
          </div>
        </div>
      </div>

      {/* ------- Galerija ------- */}
      <div className="container mx-auto mt-20 text-center">
        <span className="px-3 py-1 mb-2 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
          Galerija
        </span>
        <h2 className="text-3xl font-bold mb-2">
          Odkrijte <span className="text-[#2DC6F7]">udobje</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Preglejte naš apartma in se prepričajte, zakaj je Studio Aurora popolna
          izbira za vaš dopust.
        </p>

        {/* Main image */}
        <div className="relative group mx-auto max-w-screen-lg rounded-xl overflow-hidden">
          <img
            src={images[selected]}
            alt=""
            className={`w-full transition duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105`}
            onClick={() => setOpen(true)}
          />
          <span className="absolute bottom-2 left-2 px-2 py-1 text-xs bg-black/60 text-white rounded">
            {selected + 1} / {images.length}
          </span>
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <span className="w-10 h-10 bg-white text-[#2DC6F7] rounded-full shadow flex items-center justify-center border border-black text-xl font-bold">
              +
            </span>
          </button>
        </div>

        {/* Thumbs */}
        <div className="grid grid-cols-5 gap-4 mt-6 max-w-screen-lg mx-auto">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`h-24 object-cover w-full rounded-md cursor-pointer border-2 ${
                i === selected ? 'border-[#2DC6F7]' : 'border-transparent'
              }`}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="px-6 py-2 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] hover:bg-pink-200 hover:text-pink-600 transition"
          >
            ← Prejšnja
          </button>
          <button
            onClick={next}
            className="px-6 py-2 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] hover:bg-pink-200 hover:text-pink-600 transition"
          >
            Naslednja →
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg max-w-5xl w-full overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="relative">
              <img src={images[selected]} alt="" className="w-full h-auto" />
              <button
                onClick={prev}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-5xl px-3 select-none"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-5xl px-3 select-none"
              >
                ›
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}

/* En sam “plonk” za ikono + besedilo (vedno ena vrstica) */
function Feature({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm whitespace-nowrap">
      <span className="text-[#2DC6F7] text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
