import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#ff7a00]/20 bg-[#111] px-8 py-16 text-center">

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ff7a00]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#ff9500]/10 blur-3xl" />

        <div className="relative z-10">

          <span className="font-semibold text-[#ff7a00]">
            READY TO START?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether you need a Discord bot, a professional website,
            automation tools or a custom solution, KORTEK is ready
            to help bring your ideas to life.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/10 px-8 py-4 font-bold text-white transition hover:border-[#ff7a00]"
            >
              View Services
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}
