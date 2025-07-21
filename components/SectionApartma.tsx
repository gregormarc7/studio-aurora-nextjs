"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const SectionApartma = () => {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length)
  const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section id="apartma" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 mb-2">Galerija</p>
        <h2 className="text-3xl font-bold">
          Odkrijte <span className="text-blue-500">udobje</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-8">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš počitek.
        </p>

        {/* Velika slika */}
        <div className="relative group max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md mb-4">
          <img
            src={images[current]}
            alt={`Slika ${current + 1}`}
            className="w-full h-auto object-cover cursor-pointer transition duration-300 hover:opacity-90"
            onClick={() => setIsOpen(true)}
          />
          <div className="absolute bottom-2 left-2 text-xs bg-white px-2 py-1 rounded-full shadow">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Sličice spodaj */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Sličica ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`rounded-lg h-20 w-full object-cover cursor-pointer border-2 ${
                current === idx ? 'border-blue-500' : 'border-transparent'
              } hover:scale-105 transition`}
            />
          ))}
        </div>

        {/* Gumbi */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-4 py-2 bg-red-300 text-black font-semibold rounded-full hover:bg-red-400 active:bg-red-500 transition"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Prejšnja
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 border border-blue-300 font-semibold rounded-full hover:bg-blue-100 active:bg-blue-200 transition"
          >
            Naslednja
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* MODAL POVEČAVA */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl overflow-hidden relative max-w-3xl w-full">
            <img src={images[current]} alt={`Povečana slika ${current + 1}`} className="w-full object-contain" />
            <button
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full px-3 py-1 hover:bg-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full px-2 py-1 hover:bg-black"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full px-2 py-1 hover:bg-black"
            >
              ›
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}

export default SectionApartma
