export default function Testimonials(){
  const reviews = [
    {name:'Aiden M', text:'KORTEK delivered a flawless ticket system. Quick, reliable and well documented.'},
    {name:'Sofia R', text:'Their team built a website that converted. Highly recommended.'},
    {name:'Liam G', text:'Custom bot exceeded expectations, great communication.'}
  ]

  return (
    <section>
      <h3 className="text-2xl font-semibold kortek-title">Testimonials</h3>
      <p className="mt-2 text-gray-400">Trusted by customers worldwide.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {reviews.map(r=> (
          <div key={r.name} className="card p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#ff9500] flex items-center justify-center text-black font-semibold">{r.name.split(' ')[0][0]}</div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="mt-4 text-gray-300">"{r.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
