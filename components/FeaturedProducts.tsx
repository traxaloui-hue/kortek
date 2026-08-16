export default function FeaturedProducts(){
  const products = [
    {title:'Discord Ticket Bot', desc:'Robust ticketing system with custom forms.'},
    {title:'Moderation Bot', desc:'Automated moderation and anti-raid.'},
    {title:'Verification Bot', desc:'Secure verification flows.'},
    {title:'Website Development', desc:'Modern, responsive websites.'},
    {title:'Automation Service', desc:'Automate repetitive workflows.'},
    {title:'Custom Bot Development', desc:'Tailor-made bots for your use case.'}
  ]

  return (
    <section>
      <h3 className="text-2xl font-semibold kortek-title">Featured Products</h3>
      <p className="mt-2 text-gray-400">Hand-picked solutions ready for deployment or customization.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p)=> (
          <article key={p.title} className="card p-6 rounded-2xl border border-white/6 hover:scale-[1.01] transition-transform duration-200">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-gray-300">{p.desc}</p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff7a00] to-[#ff9500] flex items-center justify-center text-black font-bold">$</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">Includes documentation & support</span>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/contact">Order</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
