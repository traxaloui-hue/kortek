export default function Testimonials() {
  const reviews = [
    {
      name: 'Aiden M',
      role: 'Discord Community Owner',
      text: 'KORTEK delivered a flawless ticket system. Fast delivery, excellent support and outstanding quality.'
    },
    {
      name: 'Sofia R',
      role: 'Business Owner',
      text: 'Their team built a modern website that exceeded expectations. Professional from start to finish.'
    },
    {
      name: 'Liam G',
      role: 'Server Administrator',
      text: 'The custom bot was exactly what we needed. Reliable, scalable and easy to manage.'
    }
  ]

  return (
    <section className="py-20">
      <div className="text-center">
        <span className="font-semibold text-[#ff7a00]">
          TESTIMONIALS
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          What Clients Say
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Trusted by communities, businesses and creators worldwide.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="card p-8"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ff9500] text-xl font-bold text-black">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-white">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.role}
                </p>
              </div>
            </div>

            <div className="mb-4 text-yellow-400 text-xl">
              ★★★★★
            </div>

            <p className="leading-7 text-gray-300">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
