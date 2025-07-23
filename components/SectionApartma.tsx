'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FaUmbrellaBeach, FaUsers, FaWifi, FaCar, FaEye, FaHeadset } from 'react-icons/fa'

const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)

export default function SectionApartma() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setFade(false)
    const timeout = setTimeout(() => setFade(true), 100)
    return () => clearTimeout(timeout)
  }, [selectedImageIndex])

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const prevImage = () =>
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  const nextImage = () =>
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <section id="apartma" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="/images/izola-hero.png"
            alt="Izola pogled"
            className="rounded-3xl shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div>
          <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 text-blue-600 text-sm">
            O Studio Aurora
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Vaš popoln <span className="text-pink-400">počitek</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
           Studio Aurora je nov, sodobno opremljen studio apartma za dve osebi, ki ponuja mir, zasebnost in udobje. 
           Nahaja se v mirni soseski Izole, le 10 minut hoje od plaže in le dve minuti od priljubljene kolesarske poti Parenzana. 
           Idealna izbira za pare, poslovneže ali solo popotnike, ki iščejo čist, praktičen in sproščen oddih ob morju.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Zakaj izbrati Studio Aurora?</h3>
          <p className="text-gray-600 mb-6">
            Izola je slikovito obmorsko mesto z bogatim kulturnim dogajanjem, odlično kulinariko
            in razgledom na slovensko obalo. Naš apartma je idealna izhodiščna točka za sprostitev
            in raziskovanje vsega, kar ponuja ta čudovita destinacija.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
  <Feature icon={<FaUmbrellaBeach />} label="850m do plaže" />
  <Feature icon={<FaUsers />} label="Do 2 gosta" />
  <Feature icon={<FaWifi />} label="Brezplačen WiFi" />
  <Feature icon={<FaCar />} label="Brezplačno parkiranje" />
  <Feature icon={<FaEye />} label="Zasebnost" />
  <Feature icon={<FaBicycle />} label="2 min do Parenzane" />
  <Feature icon={<FaShoppingCart />} label="600m do trgovine" />
  <Feature icon={<FaUtensils />} label="800m do restavracij" />
  <Feature icon={<FaTv />} label="Netflix" />
  <Feature icon={<FaBed />} label="Posteljnina in brisače vključene" />
</div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="container mx-auto mt-20 text-center">
        <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 text-blue-600 text-sm">Galerija</span>
        <h2 className="text-3xl font-bold mb-2">Odkrijte <span className="text-blue-600">udobje</span></h2>
        <p className="text-sm mb-8">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš počitek.
        </p>

        <div className="relative group mx-auto w-full max-w-screen-lg rounded-xl overflow-hidden">
          <img
            src={images[selectedImageIndex]}
            alt={`Studio Aurora ${selectedImageIndex + 1}`}
            loading="lazy"
            className={`w-full h-auto transition-transform duration-300 transform group-hover:scale-105 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => openModal(selectedImageIndex)}
          />
          <span className="absolute bottom-2 left-2 px-2 py-1 text-xs bg-black bg-opacity-50 text-white rounded">
            {selectedImageIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => openModal(selectedImageIndex)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-blue-700 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center border border-black"
          >
            <span className="text-xl font-bold">+</span>
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-6 max-w-screen-lg mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              className={`cursor-pointer h-24 object-cover w-full rounded-md border-2 ${index === selectedImageIndex ? 'border-blue-500' : 'border-transparent'}`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={prevImage}
            className="bg-blue-200 hover:bg-red-300 text-blue-900 hover:text-red-900 px-5 py-2 rounded-full transition-colors"
          >
            ← Prejšnja
          </button>
          <button
            onClick={nextImage}
            className="bg-blue-200 hover:bg-red-300 text-blue-900 hover:text-red-900 px-5 py-2 rounded-full transition-colors"
          >
            Naslednja →
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg max-w-5xl w-full overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="relative">
              <img
                src={images[selectedImageIndex]}
                alt="Povečana slika"
                loading="lazy"
                className="w-full h-auto"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-8xl px-3"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-8xl px-3"
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

function Feature({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm">
      <div className="text-blue-500 text-lg">{icon}</div>
      <span>{label}</span>
    </div>
  )
}
