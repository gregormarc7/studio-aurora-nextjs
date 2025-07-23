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
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-4">

        {/* 🌐 Mobile: Logo left, Hamburger right */}
        <div className="flex md:hidden w-full justify-between items-center">
          <div className="border border-black rounded-md w-16 h-16 flex items-center justify-center">
            <Image
              src="/images/ChatGPTlogo.png"
              alt="Studio Aurora logo"
              width={48}
              height={48}
              className="object-contain w-12 h-12"
            />
          </div>
          <button
            id="hamburger"
            className="border border-black rounded-md w-16 h-16 flex items-center justify-center text-2xl"
          >
            ☰
          </button>
        </div>

        {/* 💻 Desktop: Logo */}
        <div className="hidden md:flex items-center gap-6">
          <div className="border border-black rounded-md p-1">
            <Image
              src="/images/ChatGPTlogo.png"
              alt="Studio Aurora logo"
              width={140}
              height={140}
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#domov" className="hover:text-primary transition">Domov</a>
          <a href="#apartma" className="hover:text-primary transition">O apartmaju</a>
          <a href="#o-izoli" className="hover:text-primary transition">O Izoli</a>
          <a href="#lokacija" className="hover:text-primary transition">Lokacija</a>
          <a href="#kontakt" className="hover:text-primary transition">Kontakt</a>
          <a
            href="#rezervacija"
            className="bg-primary hover:bg-gradientEnd text-white px-6 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            Rezerviraj
          </a>
        </nav>
      </div>

      {/* 📱 Mobile Navigation */}
      <nav
        id="mobileNav"
        className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} items-center mt-2 gap-2 pb-4`}
      >
        <a href="#domov" className="text-gray-700 hover:text-primary">Domov</a>
        <a href="#apartma" className="text-gray-700 hover:text-primary">O apartmaju</a>
        <a href="#o-izoli" className="text-gray-700 hover:text-primary">O Izoli</a>
        <a href="#lokacija" className="text-gray-700 hover:text-primary">Lokacija</a>
        <a href="#kontakt" className="text-gray-700 hover:text-primary">Kontakt</a>
        <a
          href="#rezervacija"
          className="bg-primary hover:bg-gradientEnd text-white px-6 py-2 rounded-full text-sm font-semibold shadow transition"
        >
          Rezerviraj
        </a>
      </nav>
    </header>
)
}
