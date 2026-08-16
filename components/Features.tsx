export default function Features(){
  const features = [
    'Fast Delivery','Premium Quality','Secure Payments','Professional Support','Scalable Solutions','Custom Development'
  ]

  return (
    <section>
      <h3 className="text-2xl font-semibold kortek-title">Why Choose KORTEK</h3>
      <p className="mt-2 text-gray-400">Built for businesses and creators who demand the best.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {features.map(f=> (
          <div key={f} className="card p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#ff7a00] to-[#ff9500] flex items-center justify-center text-black font-semibold">✓</div>
            <div className="text-sm">{f}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
