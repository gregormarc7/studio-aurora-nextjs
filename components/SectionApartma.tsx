'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'

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
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 mb-2 rounded-full bg-blue-100 text-blue-600 text-sm">Galerija</span>
        <h2 className="text-3xl font-bold mb-2">Odkrijte <span className="text-blue-600">udobje</span></h2>
        <p className="text-sm mb-8">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš počitek.
        </p>

        {/* Main image */}
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

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-4 mt-6 max-w-screen-lg mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              className={`cursor-pointer h-24 object-cover w-full rounded-md border-2 ${
                index === selectedImageIndex ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>

        {/* Prev / Next buttons */}
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

      {/* Lightbox modal */}
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
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl px-3"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl px-3"
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
