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
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">

        {/* Center: Logo + Naslov */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <div className="text-2xl font-bold">Studio Aurora</div>
          <Image src="/images/logo.png" alt="Studio Aurora logo" width={64} height={64} className="mx-auto" />
          <button id="hamburger" className="absolute top-0 right-0 text-3xl md:hidden">&#9776;</button>
        </div>

        {/* Mobile nav */}
        <nav
          id="mobileNav"
          className={`w-full flex-col md:hidden ${menuOpen ? 'flex' : 'hidden'} items-center mt-4 gap-2`}
        >
          <a href="#o-izoli" className="text-gray-700 hover:text-primary">O Izoli</a>
          <a href="#apartma" className="text-gray-700 hover:text-primary">Apartma</a>
          <a href="#povprasevanje" className="text-gray-700 hover:text-primary">Povpraševanje</a>
          <a href="#lokacija" className="text-gray-700 hover:text-primary">Lokacija</a>
        </nav>

        {/* Desktop nav */}
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
      </div>
    </header>
  )
}
