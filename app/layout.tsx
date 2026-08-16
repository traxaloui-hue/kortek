import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'KORTEK — Premium Bots & Digital Services',
  description: 'Premium Discord bots, websites, automation tools and custom development services.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>

        <main className="mt-8">{children}</main>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <Footer />
        </div>
      </body>
    </html>
  )
}
