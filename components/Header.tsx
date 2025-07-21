'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    if (hamburger) {
      hamburger.addEventListener('click', () => setMenuOpen(prev => !prev))
    }
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2">
        
        {/* Logo center + Hamburger under logo on mobile */}
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          <Image
            src="/images/logo.png"
            alt="Studio Aurora logo"
            width={160}
            height={160}
            className="w-28 h-28 md:w-32 md:h-32"
          />
          <button id="hamburger" className="mt-1 text-3xl md:hidden">☰</button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#domov" className="hover:text-blue-500">Domov</a>
          <a href="#apartma" className="hover:text-blue-500">O apartmaju</a>
          <a href="#o-izoli" className="hover:text-blue-500">O Izoli</a>
          <a href="#galerija" className="hover:text-blue-500">Galerija</a>
          <a href="#lokacija" className="hover:text-blue-500">Lokacija</a>
          <a href="#kontakt" className="hover:text-blue-500">Kontakt</a>
          <a
            href="#rezervacija"
            className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow"
          >
            Rezerviraj
          </a>
        </div>

        {/* Mobile nav */}
        <nav
          id="mobileNav"
          className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} items-center mt-4 gap-2`}
        >
          <a href="#domov" className="text-gray-700 hover:text-blue-500">Domov</a>
          <a href="#apartma" className="text-gray-700 hover:text-blue-500">O apartmaju</a>
          <a href="#o-izoli" className="text-gray-700 hover:text-blue-500">O Izoli</a>
          <a href="#galerija" className="text-gray-700 hover:text-blue-500">Galerija</a>
          <a href="#lokacija" className="text-gray-700 hover:text-blue-500">Lokacija</a>
          <a href="#kontakt" className="text-gray-700 hover:text-blue-500">Kontakt</a>
          <a
            href="#rezervacija"
            className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow"
          >
            Rezerviraj
          </a>
        </nav>
      </div>
    </header>
  )
}
