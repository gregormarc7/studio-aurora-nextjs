'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const SectionApartma = () => {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => setCurrentImageIndex((currentImageIndex + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)

  return (
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="inline-block text-xs px-2 py-1 bg-gray-200 rounded-full mb-2">Galerija</div>
        <h2 className="text-3xl font-bold">
          Odkrijte <span className="text-primary">udobje</span>
        </h2>
        <p className="text-sm text-gray-600 mt-2 mb-8">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš
          počitek.
        </p>

        {/* Main image */}
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Studio Aurora ${currentImageIndex + 1}`}
            width={800}
            height={600}
            className="rounded-lg mx-auto object-cover transition-opacity duration-500 ease-in-out"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/70 text-xl px-4 py-2 rounded shadow">🔍 Povečaj</div>
          </div>
          <div className="absolute bottom-2 left-2 text-xs bg-white/80 rounded-full px-2 py-1">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="mt-6 grid grid-cols-5 gap-3 justify-center items-center">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Studio Aurora ${idx + 1}`}
              width={160}
              height={120}
              onClick={() => setCurrentImageIndex(idx)}
              className={`cursor-pointer rounded object-cover transition-transform duration-200 hover:scale-105 border-2 ${
                idx === currentImageIndex ? 'border-primary' : 'border-transparent'
              }`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Prev / Next buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevImage}
            className="flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-red-200 transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Prejšnja
          </button>
          <button
            onClick={nextImage}
            className="flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-red-200 transition-all"
          >
            Naslednja <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentImageIndex ? 'bg-primary scale-125' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImageIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Modal gallery */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 bg-black/50 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
          <div className="relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={() => setIsOpen(false)}>✕</button>
            <Image
              src={images[currentImageIndex]}
              alt="Povečana slika"
              width={900}
              height={700}
              className="mx-auto rounded object-cover"
            />
            <div className="absolute inset-y-1/2 left-2 flex items-center">
              <button onClick={prevImage} className="bg-white/70 p-2 rounded-full shadow">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute inset-y-1/2 right-2 flex items-center">
              <button onClick={nextImage} className="bg-white/70 p-2 rounded-full shadow">
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  )
}

export default SectionApartma
