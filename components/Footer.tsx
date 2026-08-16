import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#ff9500] font-bold text-black">
                K
              </div>

              <div>
                <h3 className="font-bold text-white">
                  KORTEK
                </h3>

                <p className="text-sm text-gray-400">
                  Premium Digital Services
                </p>
              </div>

            </div>

            <p className="mt-4 text-sm text-gray-400">
              Professional Discord bots, websites,
              automation tools and custom software solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Products
            </h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/products">All Products</Link>
              <Link href="/bots">Discord Bots</Link>
              <Link href="/services">Services</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/services">Custom Work</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Community
            </h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#">Discord</a>
              <a href="#">X / Twitter</a>
              <a href="#">GitHub</a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KORTEK. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}
