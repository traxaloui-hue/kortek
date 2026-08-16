'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] font-bold text-black">
            K
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              KORTEK
            </h2>
            <p className="text-xs text-gray-500">
              Premium Digital Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-gray-300 hover:text-white">
            Products
          </Link>

          <Link href="/bots" className="text-gray-300 hover:text-white">
            Bots
          </Link>

          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>

          <Link
            href="/products"
            className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-5 py-2 font-semibold text-black transition hover:scale-105"
          >
            Explore
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#111] md:hidden">
          <div className="flex flex-col gap-4 px-5 py-5">

            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>

            <Link href="/bots" onClick={() => setOpen(false)}>
              Bots
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-4 py-3 text-center font-bold text-black"
            >
              Explore Products
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}
