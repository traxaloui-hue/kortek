import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic server-side validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // TODO: Integrate with email provider, database, or Discord webhook.
    // If a webhook URL is provided via env (CONTACT_WEBHOOK), forward the message there.

    const webhookUrl = process.env.CONTACT_WEBHOOK
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        })
      } catch (err) {
        // Non-fatal — continue to respond OK while logging server-side
        console.error('Failed to forward to webhook', err)
      }
    } else {
      // Log to server console for now
      console.log('Contact message', { name, email, subject, message })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
