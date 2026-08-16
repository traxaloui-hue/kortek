'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] px-6 py-20 md:px-12 md:py-28">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00]/10 via-transparent to-[#ff9500]/10" />

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#ff7a00]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff9500]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-[#ff7a00]/30 bg-[#ff7a00]/10 px-4 py-2 text-sm text-[#ff9500]">
          🚀 Premium Digital Marketplace
        </div>

        <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
          KORTEK
        </h1>

        <h2 className="mx-auto mb-6 max-w-3xl text-2xl font-semibold text-gray-200 md:text-4xl">
          Premium Bots, Scripts & Digital Services
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          Discover premium Discord bots, automation systems,
          websites and custom software solutions built for
          creators, communities and businesses.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/products"
            className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/10 px-8 py-4 font-bold text-white transition hover:border-[#ff7a00]"
          >
            Contact Us
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

          <span>⚡ Fast Delivery</span>

          <span>🛡️ Secure Payments</span>

          <span>⭐ Premium Quality</span>

          <span>💬 Dedicated Support</span>

        </div>
      </div>
    </section>
  )
}
