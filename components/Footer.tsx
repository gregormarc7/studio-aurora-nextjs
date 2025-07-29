import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10 text-sm text-gray-700">

        {/* Stolpec 1: Studio Aurora */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 justify-center">
            <Image
              src="/images/logo1.png"
              alt="Studio Aurora logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-[#2DC6F7] font-bold text-lg">Studio Aurora</span>
          </div>
          <p className="text-gray-600 max-w-xs">
            Sodoben apartma v neposredni bližini plaže v Izoli.<br />Vaš popoln oddih ob slovenski obali.
          </p>
        </div>

        {/* Stolpec 2: Kontakt */}
        <div className="space-y-1">
          <h4 className="text-gray-900 font-semibold mb-2">Kontakt</h4>
          <p>📧 studioauroraizola@gmail.com</p>
          <p>📞 +386 41 430 460</p>
          <p>📞 +386 40 585 604</p>
          <p>📍 Na terasah 2, 6310 Izola</p>
        </div>

        {/* Stolpec 3: Povezave */}
        <div className="space-y-1">
          <h4 className="text-gray-900 font-semibold mb-2">Povezave</h4>
          <p><a href="#apartma" className="hover:text-[#2DC6F7]">O apartmaju</a></p>
          <p><a href="#galerija" className="hover:text-[#2DC6F7]">Galerija</a></p>
          <p><a href="#lokacija" className="hover:text-[#2DC6F7]">Lokacija</a></p>
          <p><a href="#povprasevanje" className="hover:text-[#2DC6F7]">Kontakt</a></p>
        </div>
      </div>

      {/* Spodnja vrstica */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © 2024 Studio Aurora Izola. Vse pravice pridržane.
      </div>
    </footer>
  )
}"
