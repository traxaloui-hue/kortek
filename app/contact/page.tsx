'use client'

import { useState } from 'react'

export default function ContactPage(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setError(null)

    if (!name || !email || !message) {
      setError('Please fill name, email and message.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data?.error || 'Failed to send message')
        setStatus('error')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setError('Network error')
      setStatus('error')
    }
  }

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold kortek-title">Contact</h1>
      <p className="mt-4 text-gray-300 max-w-2xl">Want a custom bot or a project quote? Send us a message and we’ll respond within 24 hours.</p>

      <form onSubmit={onSubmit} className="mt-8 max-w-xl grid grid-cols-1 gap-4">
        <input value={name} onChange={e=>setName(e.target.value)} className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Your name" aria-label="Your name" />
        <input value={email} onChange={e=>setEmail(e.target.value)} className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Email" aria-label="Email" type="email" />
        <input value={subject} onChange={e=>setSubject(e.target.value)} className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Subject" aria-label="Subject" />
        <textarea value={message} onChange={e=>setMessage(e.target.value)} className="card px-4 py-3 rounded-xl border-transparent focus:outline-none" placeholder="Describe your project" rows={6} aria-label="Describe your project"></textarea>

        {status === 'error' && error && <div className="text-sm text-red-400">{error}</div>}
        {status === 'success' && <div className="text-sm text-green-400">Message sent — we will contact you shortly.</div>}

        <div>
          <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] text-black font-semibold">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}
