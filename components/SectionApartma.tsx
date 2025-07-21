import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const SectionApartma = () => {
  const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setSelected((prev) => (prev + 1) % images.length);
  const prev = () => setSelected((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="apartma" className="py-16 bg-gray-50 text-gray-800 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="inline-block mb-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">Galerija</div>
        <h2 className="text-3xl font-bold mb-1">
          Odkrijte <span className="text-blue-600">udobje</span>
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Preglejte naš sodobno opremljen apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš
          počitek.
        </p>

        {/* LARGE IMAGE + Overlay */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
          <img src={images[selected]} alt={`Studio Aurora ${selected + 1}`} className="w-full h-auto object-cover" />
          
          {/* Counter bottom-left */}
          <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            {selected + 1} / {images.length}
          </div>

          {/* Magnify center */}
          <button
            onClick={() => setOpen(true)}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2 text-sm shadow transition"
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-800">Povečaj</span>
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-5 gap-3 mt-6">
          {images.map((img, i) => (
            <button
              key={i}
              className={`overflow-hidden rounded-lg border-2 ${
                selected === i ? 'border-blue-500' : 'border-transparent'
              } transition`}
              onClick={() => setSelected(i)}
            >
              <img src={img} alt={`thumb ${i}`} className="w-full h-24 object-cover" />
            </button>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-red-300 hover:text-red-800 transition flex items-center gap-1"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Prejšnja
          </button>
          <button
            onClick={next}
            className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-red-300 hover:text-red-800 transition flex items-center gap-1"
          >
            Naslednja <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* MODAL */}
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white p-2 rounded-lg max-w-3xl w-full relative">
              <img src={images[selected]} alt="modal" className="w-full h-auto rounded-md object-cover" />
              <button onClick={() => setOpen(false)} className="absolute top-2 right-3 text-gray-500 hover:text-red-500">
                ✕
              </button>
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <button onClick={prev} className="text-white bg-black/50 hover:bg-black px-2 py-1 rounded-full">←</button>
              </div>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <button onClick={next} className="text-white bg-black/50 hover:bg-black px-2 py-1 rounded-full">→</button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default SectionApartma;
