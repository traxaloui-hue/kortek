'use client'

import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative overflow-hidden rounded-3xl p-8 card">
      <div className="absolute -inset-32 blur-3xl opacity-30 bg-gradient-to-r from-[rgba(255,122,0,0.12)] via-[rgba(255,149,0,0.08)] to-[rgba(255,122,0,0.06)] animate-glow" aria-hidden></div>

      <div className="relative z-10 grid gap-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold kortek-title">KORTEK</h1>
        <h2 className="text-xl text-gray-300">Premium Bots, Scripts &amp; Digital Services</h2>

        <p className="max-w-2xl text-gray-300">KORTEK is a curated marketplace focused on production-ready Discord bots, automation tools, websites and bespoke development services. Built for scale, security and fast delivery.</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link href="/products" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-semibold">Explore Products</Link>
          <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/6">Request Custom Bot</Link>
        </div>

        <div className="mt-6 w-full flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#ff7a00] glow" />
          <div className="text-sm text-gray-400">Fast delivery · Premium support · Secure payments</div>
        </div>
      </div>

      <div className="absolute right-6 top-6 w-40 h-40 rounded-full bg-gradient-to-br from-[#ff7a00]/20 to-[#ff9500]/20 blur-2xl opacity-60 animate-float" aria-hidden />
    </section>
  )
}
