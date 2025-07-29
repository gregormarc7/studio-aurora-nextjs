'use client';

import Image from 'next/image';
import { FaLeaf, FaUtensils, FaHistory } from 'react-icons/fa';

export default function SectionOIzoli() {
  return (
    <section
      id="o-izoli"
      className="bg-white py-20 px-4 scroll-mt-24"
      aria-label="Informacije o Izoli – zgodovina, narava, kulinarika"
    >
      <div className="max-w-6xl mx-auto">
        {/* Nadnaslov */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            O Izoli
          </span>
        </div>

        {/* Glavni naslov */}
        <h2 className="text-center text-4xl font-bold mt-1">
          Spoznajte <span className="text-[#2DC6F7]">Izolo</span>
        </h2>
        <p className="mt-3 mb-12 text-center text-gray-700 max-w-3xl mx-auto text-lg">
          Izola je slikovito obmorsko mesto na slovenski obali, kjer se prepletajo bogata zgodovina, naravna
          lepota in vrhunska kulinarika. Idealna destinacija za oddih in sprostitev v vseh letnih časih.
        </p>

        {/* Kartice z ikonami */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Zgodovina */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4" aria-hidden="true">
              <FaHistory />
            </div>
            <h4 className="font-semibold text-lg mb-2">Bogata zgodovina</h4>
            <p className="text-sm text-gray-600">
              Mesto z beneškim pridihom, ozkimi ulicami in starim mestnim jedrom, nekoč obdanim z obzidjem.
            </p>
          </div>

          {/* Narava */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4" aria-hidden="true">
              <FaLeaf />
            </div>
            <h4 className="font-semibold text-lg mb-2">Narava in sprostitev</h4>
            <p className="text-sm text-gray-600">
              Obalne poti, oljčni nasadi, čiste plaže in številne možnosti za kolesarjenje ali pohodništvo.
            </p>
          </div>

          {/* Kulinarika */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4" aria-hidden="true">
              <FaUtensils />
            </div>
            <h4 className="font-semibold text-lg mb-2">Kulinarična raznolikost</h4>
            <p className="text-sm text-gray-600">
              Sveža morska hrana, domače vino, oljčno olje in tipične istrske dobrote vas bodo navdušile.
            </p>
          </div>
        </div>

        {/* Galerija slik o Izoli */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/beach_sansimo.jpg"
              alt="Plaža San Simon v Izoli – pogled na obalo in mirno morje"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/kolesarska_pot_parenzana1.jpg"
              alt="Kolesarska pot Parenzana – naravna senca in urejena pot v Izoli"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/kolesarska_pot_parenzana2.jpg"
              alt="Tunel na Parenzani – priljubljena kolesarska pot blizu apartmaja"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
