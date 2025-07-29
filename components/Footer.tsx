import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Stolpec 1: O nas */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 justify-center md:justify-start">
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
            Studio Aurora je sodoben apartma v Izoli – popolna izbira za oddih ob slovenski obali.
          </p>
        </div>

        {/* Stolpec 2: Kontakt */}
        <address className="not-italic space-y-1">
          <h4 className="text-gray-900 font-semibold mb-2">Kontakt</h4>
          <p><a href="mailto:studioauroraizola@gmail.com">📧 studioauroraizola@gmail.com</a></p>
          <p><a href="tel:+38641430460">📞 +386 41 430 460</a></p>
          <p><a href="tel:+38640585604">📞 +386 40 585 604</a></p>
          <p>📍 Na terasah 2, 6310 Izola, Slovenija</p>
        </address>

        {/* Stolpec 3: Navigacija */}
        <nav aria-label="Footer navigacija" className="space-y-1">
          <h4 className="text-gray-900 font-semibold mb-2">Povezave</h4>
          <p><a href="#apartma" className="hover:text-[#2DC6F7]">O apartmaju</a></p>
          <p><a href="#galerija" className="hover:text-[#2DC6F7]">Galerija</a></p>
          <p><a href="#lokacija" className="hover:text-[#2DC6F7]">Lokacija</a></p>
          <p><a href="#povprasevanje" className="hover:text-[#2DC6F7]">Kontakt & rezervacija</a></p>
        </nav>
      </div>

      {/* Spodnja vrstica */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © 2024 Studio Aurora Izola – apartma za 2 osebi ob morju. Vse pravice pridržane.
      </div>
    </footer>
  )
}
