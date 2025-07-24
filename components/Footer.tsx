export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-gray-700">
        {/* Logo in opis */}
        <div>
          <div className="text-[#2DC6F7] font-bold text-lg">Studio Aurora</div>
          <p className="mt-2 text-gray-600 max-w-xs">
            Sodoben apartma v neposredni bližini plaže v Izoli. Vaš popoln oddih ob slovenski obali.
          </p>
        </div>

        {/* Kontaktni podatki */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-2">Kontakt</h4>
          <ul className="space-y-1">
            <li>📧 studioauroraizola@gmail.com</li>
            <li>📞 +386 41 430 460</li>
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
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © 2024 Studio Aurora Izola. Vse pravice pridržane.
      </div>
    </footer>
  )
}
