import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'KORTEK',
  description:
    'Premium Discord Bots, Websites, Automation Systems and Digital Services.'
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main className="mx-auto max-w-7xl px-5">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
