export default function Stats() {
  const stats = [
    {
      value: '100+',
      label: 'Happy Clients',
      icon: '👥'
    },
    {
      value: '50+',
      label: 'Premium Products',
      icon: '🛒'
    },
    {
      value: '24/7',
      label: 'Support',
      icon: '💬'
    },
    {
      value: '99%',
      label: 'Client Satisfaction',
      icon: '⭐'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <span className="text-[#ff7a00] font-semibold">
          OUR RESULTS
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Trusted By Clients
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We focus on quality, reliability and long-term partnerships.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card p-8 text-center"
          >
            <div className="text-5xl mb-4">
              {stat.icon}
            </div>

            <div className="text-4xl font-extrabold text-[#ff7a00]">
              {stat.value}
            </div>

            <div className="mt-2 text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
