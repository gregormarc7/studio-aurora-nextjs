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
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2">
        
        {/* Logo center + hamburger for mobile */}
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          <Image
            src="/images/logo.png"
            alt="Studio Aurora logo"
            width={160}
            height={160}
            className="w-28 h-28 md:w-32 md:h-32"
          />
          <button id="hamburger" className="text-3xl mt-1 md:hidden">☰</button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#domov" className="hover:text-primary transition">Domov</a>
          <a href="#apartma" className="hover:text-primary transition">O apartmaju</a>
          <a href="#o-izoli" className="hover:text-primary transition">O Izoli</a>
          <a href="#lokacija" className="hover:text-primary transition">Lokacija</a>
          <a href="#kontakt" className="hover:text-primary transition">Kontakt</a>
          <a
            href="#rezervacija"
            className="bg-primary hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow transition"
          >
            Rezerviraj
          </a>
        </nav>

        {/* Mobile Navigation */}
        <nav
          id="mobileNav"
          className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} items-center mt-4 gap-2`}
        >
          <a href="#domov" className="text-gray-700 hover:text-primary">Domov</a>
          <a href="#apartma" className="text-gray-700 hover:text-primary">O apartmaju</a>
          <a href="#o-izoli" className="text-gray-700 hover:text-primary">O Izoli</a>
          <a href="#lokacija" className="text-gray-700 hover:text-primary">Lokacija</a>
          <a href="#kontakt" className="text-gray-700 hover:text-primary">Kontakt</a>
          <a
            href="#rezervacija"
            className="bg-primary hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow transition"
          >
            Rezerviraj
          </a>
        </nav>
      </div>
    </header>
  )
}
