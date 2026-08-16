export default function Services(){
  const services = [
    {title:'Discord Development', desc:'Bots, integrations and server tooling.'},
    {title:'Website Development', desc:'Static & dynamic sites with CMS.'},
    {title:'Automation Systems', desc:'Workflows, scrapers, bots.'},
    {title:'API Integrations', desc:'Payment gateways, OAuth and webhooks.'},
    {title:'Custom Solutions', desc:'Tailored development and consulting.'}
  ]

  return (
    <section>
      <h3 className="text-2xl font-semibold kortek-title">Services</h3>
      <p className="mt-2 text-gray-400">We offer full-service development across bots, web and automation.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s=> (
          <div key={s.title} className="card p-6 rounded-2xl">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-2 text-gray-300">{s.desc}</p>
            <div className="mt-4">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-medium" href="/contact">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
