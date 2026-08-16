export default function ProductsPage(){
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold kortek-title">Products</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">Explore our catalog of premium bots, themes, and automation tools. All products are delivered with documentation and support.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* lightweight product cards */}
        {["Discord Ticket Bot","Moderation Bot","Verification Bot","Website Development","Automation Service","Custom Bot Development"].map((p)=> (
          <div key={p} className="card p-6 rounded-2xl glow">
            <h3 className="text-xl font-medium">{p}</h3>
            <p className="mt-2 text-gray-300">Premium quality, fast delivery and continuous support included.</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-orange-400 font-semibold">From $49</div>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/contact">Request</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
