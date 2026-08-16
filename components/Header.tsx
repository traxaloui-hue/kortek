'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ff9500] flex items-center justify-center text-black font-bold">K</div>
            <span className="text-xl font-semibold">KORTEK</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
          <Link href="/bots" className="text-gray-300 hover:text-white">Bots</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/products">Explore</a>
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="menu" className="p-2 rounded-md border border-white/6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-3 p-4 card rounded-xl md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/products" className="text-gray-300" onClick={()=>setOpen(false)}>Products</Link>
            <Link href="/bots" className="text-gray-300" onClick={()=>setOpen(false)}>Bots</Link>
            <Link href="/services" className="text-gray-300" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="/contact" className="text-gray-300" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
