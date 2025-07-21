'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const SectionApartma = () => {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const selectImage = (index: number) => setCurrent(index)

  return (
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">Galerija</span>
        <h2 className="text-3xl font-bold mb-2">
          Odkrijte <span className="text-blue-500">udobje</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš počitek.
        </p>

        <div className="relative w-full max-w-3xl mx-auto mb-4">
          <Image
            src={images[current]}
            alt={`Studio Aurora ${current + 1}`}
            width={800}
            height={600}
            onClick={() => setOpen(true)}
            className="rounded-xl mx-auto cursor-pointer object-cover w-full h-[400px]"
          />
          <span className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded-md shadow">
            {current + 1} / {images.length}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-2 justify-center mb-6 max-w-3xl mx-auto">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              width={160}
              height={100}
              onClick={() => selectImage(idx)}
              className={`rounded-md object-cover h-24 w-full cursor-pointer border-2 transition-all duration-300 ${
                current === idx ? 'border-blue-500' : 'border-transparent'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="px-5 py-2 rounded-full bg-red-200 hover:bg-red-300 text-red-900 transition-colors"
          >
            ← Prejšnja
          </button>
          <button
            onClick={nextSlide}
            className="px-5 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-900 transition-colors"
          >
            Naslednja →
          </button>
        </div>

        {/* Fullscreen modal */}
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="relative max-w-4xl mx-auto bg-white p-4 rounded-lg">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
              <div className="flex items-center justify-between">
                <button onClick={prevSlide}>
                  <ArrowLeftIcon className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                </button>
                <Image
                  src={images[current]}
                  alt={`Modal Image ${current + 1}`}
                  width={900}
                  height={600}
                  className="rounded-lg object-cover max-h-[80vh]"
                />
                <button onClick={nextSlide}>
                  <ArrowRightIcon className="w-6 h-6 text-gray-800 hover:text-blue-500" />
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  )
}

export default SectionApartma
