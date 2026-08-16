export default function ServicesPage(){
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold kortek-title">Services</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">From full website builds to custom automation — we ship production-ready solutions.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          'Discord Development','Website Development','Automation Systems','API Integrations','Custom Solutions'
        ].map((s)=> (
          <div key={s} className="card p-6 rounded-2xl glow">
            <h3 className="text-xl font-medium">{s}</h3>
            <p className="mt-2 text-gray-300">High quality, documented and scalable.</p>
            <div className="mt-4">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/contact">Start</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
