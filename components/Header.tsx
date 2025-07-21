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
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">

        {/* Left: Logo + Naziv */}
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Studio Aurora logo" width={64} height={64} className="w-16 h-16" />
          <h1 className="text-2xl font-extrabold tracking-widest uppercase">Studio Aurora</h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          id="hamburger"
          className="text-3xl md:hidden block focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#o-izoli" className="text-gray-800 hover:text-blue-600 transition">O Izoli</a>
          <a href="#apartma" className="text-gray-800 hover:text-blue-600 transition">Apartma</a>
          <a href="#povprasevanje" className="text-gray-800 hover:text-blue-600 transition">Povpraševanje</a>
          <a href="#lokacija" className="text-gray-800 hover:text-blue-600 transition">Lokacija</a>
        </nav>

        {/* Mobile navigation */}
        <nav
          id="mobileNav"
          className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} mt-4 gap-3 text-center`}
        >
          <a href="#o-izoli" className="text-gray-800 hover:text-blue-600 transition">O Izoli</a>
          <a href="#apartma" className="text-gray-800 hover:text-blue-600 transition">Apartma</a>
          <a href="#povprasevanje" className="text-gray-800 hover:text-blue-600 transition">Povpraševanje</a>
          <a href="#lokacija" className="text-gray-800 hover:text-blue-600 transition">Lokacija</a>
        </nav>
      </div>
    </header>
  )
}
