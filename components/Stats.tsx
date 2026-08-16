export default function Stats(){
  const stats = [
    {label:'Customers', value:'100+'},
    {label:'Products', value:'50+'},
    {label:'Support', value:'24/7'},
    {label:'Satisfaction', value:'99%'}
  ]

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(s=> (
          <div key={s.label} className="card p-6 rounded-xl text-center">
            <div className="text-2xl font-bold kortek-title">{s.value}</div>
            <div className="text-sm text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
