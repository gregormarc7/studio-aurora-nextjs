'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/apartma1.jpg',
  '/images/apartma2.jpg',
  '/images/apartma3.jpg',
  '/images/apartma4.jpg',
  '/images/apartma5.jpg',
  '/images/apartma6.jpg',
  '/images/apartma7.jpg',
  '/images/apartma8.jpg',
  '/images/apartma9.jpg',
  '/images/apartma10.jpg',
];

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="galerija"
      aria-label="Galerija apartmaja Studio Aurora v Izoli"
      className="w-full max-w-5xl mx-auto"
    >
      {/* Glavna slika */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={images[selectedIndex]}
          alt={`Fotografija apartmaja Studio Aurora ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Predogledne sličice */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            title={`Prikaži sliko ${idx + 1}`}
            aria-current={idx === selectedIndex ? 'true' : undefined}
            className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 ${
              idx === selectedIndex ? 'border-[#2DC6F7]' : 'border-transparent'
            }`}
          >
            <Image
              src={src}
              alt={`Predogled slike apartmaja ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
