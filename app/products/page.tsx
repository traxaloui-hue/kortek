import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      icon: '🤖',
      title: 'Discord Ticket Bot',
      price: '$49',
      desc: 'Advanced support ticket system with panels and transcripts.'
    },
    {
      icon: '🛡️',
      title: 'Moderation Bot',
      price: '$69',
      desc: 'Powerful moderation, anti-spam and anti-raid protection.'
    },
    {
      icon: '✅',
      title: 'Verification Bot',
      price: '$39',
      desc: 'Secure user verification and role management.'
    },
    {
      icon: '🌐',
      title: 'Website Development',
      price: '$199',
      desc: 'Modern business websites built with Next.js.'
    },
    {
      icon: '⚡',
      title: 'Automation Service',
      price: '$99',
      desc: 'Automate repetitive workflows and save time.'
    },
    {
      icon: '💻',
      title: 'Custom Bot Development',
      price: 'Custom',
      desc: 'Fully customized Discord bots for your project.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          OUR PRODUCTS
        </span>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Premium Digital Products
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-gray-400">
          Discover professional bots, automation systems and custom
          development services built for businesses and online communities.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="card p-8"
          >
            <div className="mb-5 text-5xl">
              {product.icon}
            </div>

            <h2 className="text-2xl font-bold text-white">
              {product.title}
            </h2>

            <p className="mt-3 text-gray-400">
              {product.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-2xl font-bold text-[#ff7a00]">
                {product.price}
              </span>

              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-5 py-3 font-semibold text-black"
              >
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
