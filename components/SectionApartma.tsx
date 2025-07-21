'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SectionApartma() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="apartma" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm uppercase text-gray-500">Galerija</span>
        <h2 className="text-4xl font-bold mb-2">
          Odkrijte <span className="text-blue-500">udobje</span>
        </h2>
        <p className="mb-8 text-gray-600">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora
          popolna izbira za vaš počitek.
        </p>

        {/* Velika slika */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
          <Image
            src={images[selectedIndex]}
            alt={`Studio Aurora ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 text-sm px-2 py-1 rounded">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-3 mb-4 max-w-4xl mx-auto">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-full h-20 rounded-lg overflow-hidden border-2 ${
                idx === selectedIndex ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <Image src={src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            ◀ Prejšnja
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Naslednja ▶
          </button>
        </div>
      </div>
    </section>
  )
}
