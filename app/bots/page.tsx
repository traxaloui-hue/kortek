import Link from 'next/link'

export default function BotsPage() {
  const bots = [
    {
      icon: '🎫',
      name: 'Ticket Bot',
      price: '$29',
      desc: 'Advanced ticket system with transcripts and staff tools.'
    },
    {
      icon: '🛡️',
      name: 'Moderation Bot',
      price: '$49',
      desc: 'Anti-spam, anti-raid and advanced moderation features.'
    },
    {
      icon: '✅',
      name: 'Verification Bot',
      price: '$39',
      desc: 'Secure verification with role assignment and protection.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          DISCORD BOTS
        </span>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Premium Discord Bots
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-gray-400">
          Powerful, secure and scalable Discord bots built for communities,
          gaming servers and businesses.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <div key={bot.name} className="card p-8">
            <div className="mb-5 text-5xl">
              {bot.icon}
            </div>

            <h2 className="text-2xl font-bold text-white">
              {bot.name}
            </h2>

            <p className="mt-3 text-gray-400">
              {bot.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-2xl font-bold text-[#ff7a00]">
                {bot.price}
              </span>

              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-5 py-3 font-semibold text-black"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
