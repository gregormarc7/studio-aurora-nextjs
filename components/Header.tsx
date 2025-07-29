'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  const navLinks = [
    ['#domov', 'Domov'],
    ['#apartma', 'O apartmaju'],
    ['#o-izoli', 'O Izoli'],
    ['#lokacija', 'Lokacija'],
    ['#povprasevanje', 'Kontakt'],
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-4">

        {/* Mobile: logo + hamburger */}
        <div className="flex md:hidden w-full justify-between items-center">
          <div className="border border-black rounded-md w-16 h-16 flex items-center justify-center">
            <Image
              src="/images/logo1.png"
              alt="Studio Aurora logo - Izola"
              width={48}
              height={48}
              priority
              className="object-contain w-12 h-12"
            />
          </div>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="border border-black rounded-md w-16 h-16 flex items-center justify-center text-2xl"
            aria-label="Meni"
          >
            ☰
          </button>
        </div>

        {/* Desktop: logo */}
        <div className="hidden md:flex items-center">
          <div className="border border-black rounded-md p-1">
            <Image
              src="/images/logo1.png"
              alt="Studio Aurora logotip - apartma Izola"
              width={140}
              height={140}
              priority
              className="object-contain w-32 h-32"
            />
          </div>
        </div>

        {/* Desktop navigacija */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Glavna navigacija">
          {navLinks.map(([href, txt]) => (
            <a key={href} href={href} className="hover:text-primary transition">
              {txt}
            </a>
          ))}
          <a
            href="#povprasevanje"
            className="bg-primary hover:bg-gradientEnd text-white px-6 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            Rezerviraj
          </a>
        </nav>
      </div>

      {/* Mobile navigacija */}
      <nav
        className={`md:hidden flex-col w-full items-center gap-2 pb-4 ${
          open ? 'flex mt-3' : 'hidden'
        }`}
        aria-label="Mobilna navigacija"
      >
        {navLinks.map(([href, txt]) => (
          <a
            key={href}
            href={href}
            className="text-gray-700 hover:text-primary"
            onClick={handleLinkClick}
          >
            {txt}
          </a>
        ))}

        <a
          href="#povprasevanje"
          onClick={handleLinkClick}
          className="bg-primary hover:bg-gradientEnd text-white px-6 py-2 rounded-full text-sm font-semibold shadow transition"
        >
          Rezerviraj
        </a>
      </nav>
    </header>
  )
}
