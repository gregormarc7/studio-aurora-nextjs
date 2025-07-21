import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const SectionApartma = () => {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = () => setIsOpen(true)
  const closeLightbox = () => setIsOpen(false)

  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length)

  return (
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
          Galerija
        </span>
        <h2 className="text-3xl font-bold">
          Odkrijte <span className="text-blue-500">udobje</span>
        </h2>
        <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš počitek.
        </p>

        {/* Večja slika z gumbom za povečavo */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Studio Aurora ${currentIndex + 1}`}
            className="object-contain w-full h-full"
          />
          {/* Slika indikator znotraj slike */}
          <span className="absolute bottom-2 left-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </span>

          {/* Gumb Povečaj na sredini */}
          <button
            onClick={openLightbox}
            className="absolute inset-0 flex justify-center items-center group transition"
            aria-label="Povečaj sliko"
          >
            <div className="bg-white/80 px-4 py-2 rounded-full flex items-center gap-2 shadow hover:bg-blue-200 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 group-hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm font-medium text-blue-800 group-hover:text-red-700">
                Povečaj
              </span>
            </div>
          </button>
        </div>

        {/* Predogledne slike */}
        <div className="grid grid-cols-5 gap-2 mt-6 max-w-4xl mx-auto">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Studio Aurora ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer rounded-md border-2 transition-all duration-200 h-28 object-cover w-full ${
                idx === currentIndex ? 'border-blue-500' : 'border-transparent'
              }`}
            />
          ))}
        </div>

        {/* Navigacija */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={showPrev}
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-red-200 hover:text-red-900 transition"
          >
            ← Prejšnja
          </button>
          <button
            onClick={showNext}
            className="px-5 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-red-200 hover:text-red-900 transition"
          >
            Naslednja →
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onClose={closeLightbox} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-3xl w-full bg-white rounded-lg overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={`Studio Aurora ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
              <ArrowRightIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 bg-white text-gray-600 rounded-full px-2 py-1"
            >
              ✕
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}

export default SectionApartma
