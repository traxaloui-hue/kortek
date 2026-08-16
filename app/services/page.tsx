import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: '🤖',
      title: 'Discord Development',
      desc: 'Custom Discord bots, ticket systems, moderation and server automation.'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      desc: 'Modern websites built with Next.js, optimized for speed and SEO.'
    },
    {
      icon: '⚡',
      title: 'Automation Systems',
      desc: 'Automate workflows, repetitive tasks and business operations.'
    },
    {
      icon: '🔗',
      title: 'API Integrations',
      desc: 'Payment gateways, OAuth systems, webhooks and third-party services.'
    },
    {
      icon: '💻',
      title: 'Custom Solutions',
      desc: 'Tailored software solutions designed specifically for your project.'
    },
    {
      icon: '🛠️',
      title: 'Technical Support',
      desc: 'Ongoing maintenance, updates and professional assistance.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          OUR SERVICES
        </span>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Professional Solutions
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-gray-400">
          From Discord bots to complete web platforms, KORTEK delivers
          high-quality solutions built for performance and reliability.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="card p-8"
          >
            <div className="mb-5 text-5xl">
              {service.icon}
            </div>

            <h2 className="text-2xl font-bold text-white">
              {service.title}
            </h2>

            <p className="mt-3 text-gray-400">
              {service.desc}
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-5 py-3 font-semibold text-black"
              >
                Start Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
