"use client"

import Image from "next/image"
import { FaLeaf, FaUtensils, FaHistory } from "react-icons/fa"

export default function SectionOIzoli() {
  return (
    <section id="o-izoli" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Naslov */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            O Izoli
          </span>
        </div>
        <h2 className="text-center text-4xl font-bold mt-1">
          Spoznajte <span className="text-[#2DC6F7]">Izolo</span>
        </h2>
        <p className="mt-3 mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          Izola je slikovito obmorsko mesto, ki združuje bogato zgodovino, pristno kulinariko in čudovito naravo. Idealna destinacija za sprostitev ob morju.
        </p>

        {/* Tri kartice: zgodovina, narava, kulinarika */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Zgodovina */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4"><FaHistory /></div>
            <h4 className="font-semibold text-lg mb-2">Bogata zgodovina</h4>
            <p className="text-sm text-gray-600">
              Mesto z beneškim pridihom, ozkimi ulicami in starim mestnim jedrom obdanem z obzidjem.
            </p>
          </div>

          {/* Narava */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4"><FaLeaf /></div>
            <h4 className="font-semibold text-lg mb-2">Narava in sprostitev</h4>
            <p className="text-sm text-gray-600">
              Obalne poti, oljčni nasadi, čiste plaže in možnosti za kolesarjenje ali pohodništvo.
            </p>
          </div>

          {/* Kulinarika */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center">
            <div className="flex justify-center text-[#2DC6F7] text-3xl mb-4"><FaUtensils /></div>
            <h4 className="font-semibold text-lg mb-2">Kulinarična raznolikost</h4>
            <p className="text-sm text-gray-600">
              Sveža morska hrana, domače vino, olivno olje in tipične istrske dobrote vas bodo navdušile.
            </p>
          </div>
        </div>

        {/* Galerija slik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/beach_sansimo.jpg"
              alt="Plaža San Simon"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/kolesarska_pot_parenzana1.jpg"
              alt="Kolesarska pot Parenzana"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/images/kolesarska_pot_parenzana2.jpg"
              alt="Kolesarska pot Parenzana"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
