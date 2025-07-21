'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SectionApartma() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="apartma" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Apartma</h2>
        <p className="mb-8">Naš apartma ponuja udobje in razgled, ki vam bo ostal v spominu.</p>

        {/* Velika slika */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={images[selectedIndex]}
            alt={`Studio Aurora ${selectedIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 ${
                idx === selectedIndex ? 'border-blue-500' : 'border-transparent'
              }`}
            >
              <Image src={src} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
