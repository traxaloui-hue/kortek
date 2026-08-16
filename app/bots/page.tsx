export default function BotsPage(){
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold kortek-title">Bots</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">Specialized Discord bots crafted for communities and teams — secure, extensible and fast.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {name:'Ticket Bot',desc:'Custom ticket workflows, roles and channels'},
          {name:'Moderation Bot',desc:'Automated moderation and anti-raid systems'},
          {name:'Verification Bot',desc:'Secure verification flows with OAuth and captchas'}
        ].map((b)=> (
          <div key={b.name} className="card p-6 rounded-2xl glow">
            <h3 className="text-xl font-medium">{b.name}</h3>
            <p className="mt-2 text-gray-300">{b.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-orange-400 font-semibold">From $29</div>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/contact">Buy</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
