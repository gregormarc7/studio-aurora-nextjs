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
<div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-2 py-0.5">
        
        {/* Logo center + Hamburger under logo on mobile */}
        <div className="flex flex-col items-center md:flex-row md:gap-4">
          <Image
            src="/images/logo.png"
            alt="Studio Aurora logo"
            width={160}
            height={160}
            className="w-32 h-32"
          />
          <button
            id="hamburger"
            className="mt-2 text-3xl md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Desktop nav (hidden on mobile) */}
        <div className="hidden md:flex gap-10">
          <nav className="flex gap-4">
            <a href="#o-izoli" className="hover:text-primary">O Izoli</a>
            <a href="#apartma" className="hover:text-primary">Apartma</a>
          </nav>
          <nav className="flex gap-4">
            <a href="#povprasevanje" className="hover:text-primary">Povpraševanje</a>
            <a href="#lokacija" className="hover:text-primary">Lokacija</a>
          </nav>
        </div>

        {/* Mobile nav (toggle via hamburger) */}
        <nav
          id="mobileNav"
          className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} items-center mt-4 gap-2`}
        >
          <a href="#o-izoli" className="text-gray-700 hover:text-primary">O Izoli</a>
          <a href="#apartma" className="text-gray-700 hover:text-primary">Apartma</a>
          <a href="#povprasevanje" className="text-gray-700 hover:text-primary">Povpraševanje</a>
          <a href="#lokacija" className="text-gray-700 hover:text-primary">Lokacija</a>
        </nav>
      </div>
    </header>
  )
}
