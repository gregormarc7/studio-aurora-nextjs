"use client";

import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaUmbrellaBeach,
  FaUsers,
  FaWifi,
  FaCar,
  FaEyeSlash,
  FaBicycle,
  FaShoppingCart,
  FaUtensils,
  FaTv,
  FaBed,
  FaBath,
  FaWind,
} from "react-icons/fa";

/* demo galerija */
const images = Array.from({ length: 10 }, (_, i) => `/images/studio${i + 1}.jpg`);

export default function SectionApartma() {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  /* fade-in efekt ob menjavi */
  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 80);
    return () => clearTimeout(t);
  }, [sel]);

  const prev = () => setSel((s) => (s ? s - 1 : images.length - 1));
  const next = () => setSel((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <section id="apartma" className="scroll-mt-24 bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ----- Badge & glavni naslov ----- */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
            O Apartmaju
          </span>
        </div>

        <h2 className="text-center text-4xl font-bold mt-1">
          Vaš popoln <span className="text-[#2DC6F7]">dopust</span>
        </h2>
        <p className="mt-3 mb-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Studio Aurora je sodobno opremljen studio-apartma za dve osebi. Nahaja se v mirni soseski Izole,
          10&nbsp;min hoje od plaže in 2&nbsp;minuti od priljubljene kolesarske poti Parenzana.
        </p>

        {/* ----- slika + opis + “čipke” ----- */}
        <div className="grid lg:grid-cols-[minmax(0,700px)_1fr] gap-14 lg:gap-20 items-start">
          {/* slika */}
          <img
            src="/images/izola-hero.png"
            alt="Pogled na Izolo"
            className="w-full h-full rounded-3xl shadow-md object-cover"
          />

          {/* opis + feature grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Zakaj izbrati Studio Aurora?</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Izola očara z obalo, živahnim kulturnim utripom in izvrstno kulinariko. Naš apartma je idealna
              izhodiščna točka, če želite doživeti to čarobno mesto v mirnem in udobnem okolju.
            </p>

            {/* 1 | 2 | 3 kolone (xl)  — min-width 235 px, da vse vrstice ostanejo enovrstične */}
            <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(235px,1fr))] xl:[grid-template-columns:repeat(3,1fr)]">
              {features.map((f) => (
                <Feature key={f.label} icon={f.icon} label={f.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Galerija ---------- */}
      <div className="container mx-auto mt-24 text-center">
        <span className="px-3 py-1 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] text-sm font-semibold">
          Galerija
        </span>
        <h2 className="text-4xl font-bold mt-1">
          Odkrijte <span className="text-[#2DC6F7]">udobje</span>
        </h2>
        <p className="mt-3 mb-10 text-lg text-gray-600 max-w-xl mx-auto">
          Preglejte apartma in se prepričajte, zakaj je Studio Aurora popolna izbira za vaš dopust.
        </p>

        {/* glavna slika */}
        <div className="relative group mx-auto max-w-screen-lg rounded-xl overflow-hidden">
          <img
            src={images[sel]}
            className={`w-full transition duration-500 ${fade ? "opacity-100" : "opacity-0"} group-hover:scale-105`}
            onClick={() => setOpen(true)}
          />
          <span className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded">
            {sel + 1} / {images.length}
          </span>
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
          >
            <span className="w-10 h-10 bg-white text-[#2DC6F7] rounded-full shadow border border-black flex items-center justify-center text-xl font-bold">
              +
            </span>
          </button>
        </div>

        {/* thumbnails */}
        <div className="grid grid-cols-5 gap-4 mt-6 max-w-screen-lg mx-auto">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              onClick={() => setSel(i)}
              className={`h-24 w-full object-cover rounded-md cursor-pointer border-2 ${i === sel ? "border-[#2DC6F7]" : "border-transparent"}`}
            />
          ))}
        </div>

        {/* kontrole */}
        <div className="mt-8 flex justify-center gap-4">
          <NavBtn onClick={prev}>← Prejšnja</NavBtn>
          <NavBtn onClick={next}>Naslednja →</NavBtn>
        </div>
      </div>

      {/* ---------- Modal ---------- */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-white rounded-lg max-w-5xl w-full overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="relative">
              <img src={images[sel]} className="w-full h-auto" />
              <button
                onClick={prev}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-5xl px-3 select-none"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-5xl px-3 select-none"
              >
                ›
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}

/* ----- helper komponenti ----- */
function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-sm">
      <span className="text-[#2DC6F7] text-lg">{icon}</span>
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}

function NavBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-full bg-[#2DC6F7]/20 text-[#2DC6F7] hover:bg-pink-200 hover:text-pink-600 transition"
    >
      {children}
    </button>
  );
}

/* ----- podatki za “čipke” ----- */
const features = [
  { icon: <FaUmbrellaBeach />, label: "850 m do plaže" },
  { icon: <FaUsers />, label: "Do 2 gosta" },
  { icon: <FaWifi />, label: "Brezplačen Wi-Fi" },

  { icon: <FaCar />, label: "Brezplačno parkiranje" },
  { icon: <FaEyeSlash />, label: "Zasebnost" },
  { icon: <FaBicycle />, label: "180 m do Parenzane" },

  { icon: <FaShoppingCart />, label: "600 m do trgovine" },
  { icon: <FaUtensils />, label: "800 m do restavracij" },
  { icon: <FaTv />, label: "TV + Netflix" },

  { icon: <FaBed />, label: "Posteljnina & brisače" },
  { icon: <FaBath />, label: "Kuhinja & kopalnica" },
  { icon: <FaWind />, label: "Klima & prezračevanje" },
];
