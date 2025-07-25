import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10 text-sm text-gray-700">
        
        {/* Logo in opis */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Studio Aurora logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-[#2DC6F7] font-bold text-lg">Studio Aurora</span>
          </div>
          <p className="text-gray-600 max-w-md mt-2">
            Sodoben apartma v neposredni bližini plaže v Izoli. Vaš popoln oddih ob slovenski obali.
          </p>
        </div>

        {/* Kontaktni podatki */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-2">Kontakt</h4>
          <ul className="space-y-1">
            <li>📧 studioauroraizola@gmail.com</li>
            <li>📞 +386 41 430 460</li>
            <li>📞 +386 40 585 604</li>
            <li>📍 Na terasah 2, 6310 Izola</li>
          </ul>
        </div>

        {/* Povezave */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-2">Povezave</h4>
          <ul className="space-y-1">
            <li><a href="#apartma" className="hover:text-[#2DC6F7]">O apartmaju</a></li>
            <li><a href="#galerija" className="hover:text-[#2DC6F7]">Galerija</a></li>
            <li><a href="#lokacija" className="hover:text-[#2DC6F7]">Lokacija</a></li>
            <li><a href="#povprasevanje" className="hover:text-[#2DC6F7]">Kontakt</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 mt-6">
          © 2024 Studio Aurora Izola. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  )
}
