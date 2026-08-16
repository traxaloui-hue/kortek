export default function Footer(){
  return (
    <footer className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#ff7a00] to-[#ff9500] flex items-center justify-center text-black font-bold">K</div>
            <div>
              <div className="font-semibold">KORTEK</div>
              <div className="text-sm text-gray-400">Premium Bots & Digital Services</div>
            </div>
          </div>

          <div className="mt-4 text-gray-400 text-sm">© {new Date().getFullYear()} KORTEK. All rights reserved.</div>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>Products</li>
            <li>Bots</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Social</h5>
          <div className="mt-3 flex items-center gap-3 text-gray-400">
            <a>Twitter</a>
            <a>Discord</a>
            <a>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
