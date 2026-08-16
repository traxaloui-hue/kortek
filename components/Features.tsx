export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      desc: 'Get your products and services delivered quickly.'
    },
    {
      icon: '🛡️',
      title: 'Secure Payments',
      desc: 'Safe transactions and trusted payment methods.'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      desc: 'High-quality products built with care.'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      desc: 'Professional assistance whenever you need it.'
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      desc: 'Built to grow with your community or business.'
    },
    {
      icon: '💻',
      title: 'Custom Development',
      desc: 'Tailored solutions designed for your exact needs.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          WHY KORTEK
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Built For Quality
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Everything we create is focused on performance,
          reliability and long-term success.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-[#111] p-8 transition duration-300 hover:border-[#ff7a00]/40 hover:-translate-y-1"
          >
            <div className="mb-5 text-5xl">
              {feature.icon}
            </div>

            <h3 className="mb-3 text-xl font-bold text-white">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
