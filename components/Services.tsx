import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'Discord Bots',
      desc: 'Custom Discord bots with moderation, tickets, economy and advanced automation.'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      desc: 'Modern websites built with Next.js, optimized for speed and SEO.'
    },
    {
      icon: '⚡',
      title: 'Automation Systems',
      desc: 'Automate repetitive tasks, workflows and business processes.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          OUR SERVICES
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          What We Do
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Professional solutions tailored for creators,
          communities and businesses.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-3xl border border-white/10 bg-[#111] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#ff7a00]/40"
          >
            <div className="mb-5 text-5xl">
              {service.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mb-6 text-gray-400">
              {service.desc}
            </p>

            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-5 py-3 font-semibold text-black"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
