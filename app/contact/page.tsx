export default function ContactPage(){
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold kortek-title">Contact</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">Want a custom bot or a project quote? Send us a message and we’ll respond within 24 hours.</p>

      <form className="mt-8 max-w-xl grid grid-cols-1 gap-4">
        <input className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Your name" />
        <input className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Email" />
        <input className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Subject" />
        <textarea className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Describe your project" rows={6}></textarea>
        <div>
          <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-semibold">Send Message</button>
        </div>
      </form>
    </div>
  )
}
