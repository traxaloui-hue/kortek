'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    setStatus('sending')
    setError(null)

    if (!name || !email || !message) {
      setError('Please fill all required fields.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      })

      if (!res.ok) {
        setStatus('error')
        setError('Failed to send message.')
        return
      }

      setStatus('success')

      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch {
      setStatus('error')
      setError('Network error.')
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <span className="font-semibold text-[#ff7a00]">
            CONTACT US
          </span>

          <h1 className="mt-3 text-5xl font-bold text-white">
            Let's Build Your Project
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Need a Discord bot, website, automation system or custom solution?
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="card mt-12 p-8">

          <form
            onSubmit={onSubmit}
            className="grid gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />

            <textarea
              rows={6}
              placeholder="Describe your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
            />

            {status === 'error' && (
              <div className="text-red-400">
                {error}
              </div>
            )}

            {status === 'success' && (
              <div className="text-green-400">
                Message sent successfully.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
