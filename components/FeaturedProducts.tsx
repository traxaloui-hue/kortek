import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
    {
      title: 'Discord Ticket Bot',
      desc: 'Professional ticket system with advanced support tools.',
      price: '$29'
    },
    {
      title: 'Moderation Bot',
      desc: 'Powerful moderation and anti-raid protection.',
      price: '$49'
    },
    {
      title: 'Verification Bot',
      desc: 'Secure user verification and role management.',
      price: '$39'
    },
    {
      title: 'Website Development',
      desc: 'Modern websites optimized for performance.',
      price: '$99'
    },
    {
      title: 'Automation Service',
      desc: 'Automate repetitive tasks and workflows.',
      price: '$79'
    },
    {
      title: 'Custom Bot Development',
      desc: 'Fully custom Discord bots built for your needs.',
      price: 'Custom'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">

        <span className="text-[#ff7a00] font-semibold">
          FEATURED PRODUCTS
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Our Best Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Premium bots, automation systems and digital services
          designed for creators and businesses.
        </p>

      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-3xl border border-white/10 bg-[#111] p-6 transition duration-300 hover:border-[#ff7a00]/40 hover:translate-y-[-5px]"
          >
            <div className="mb-4 flex items-center justify-between">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-xl font-bold text-black">
                ⚡
              </div>

              <span className="font-bold text-[#ff7a00]">
                {product.price}
              </span>

            </div>

            <h3 className="mb-3 text-xl font-bold text-white">
              {product.title}
            </h3>

            <p className="mb-6 text-gray-400">
              {product.desc}
            </p>

            <Link
              href="/contact"
              className="block rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] py-3 text-center font-bold text-black"
            >
              Order Now
            </Link>
          </div>
        ))}

      </div>
    </section>
  )
}
