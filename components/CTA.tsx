export default function CTA(){
  return (
    <section className="mt-8 rounded-2xl overflow-hidden">
      <div className="p-8 rounded-2xl" style={{background: 'linear-gradient(90deg, rgba(255,122,0,0.16), rgba(255,149,0,0.14))'}}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-semibold kortek-title">Start Your Project</h4>
            <p className="mt-2 text-gray-200">Kick off your next project with our expert team and fast delivery times.</p>
          </div>
          <div>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black bg-opacity-10 border border-white/6 text-white font-semibold">Start Your Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
