import Image from 'next/image'

export default function Header(){
  return (
    <header className="bg-gradient-to-b from-black/70 to-black/60 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-44 h-16 relative">
            {/* Place your logo at public/images/logo.png */}
            <img src="/images/logo.png" alt="Steel City logo" className="object-contain h-full" />
          </div>
          <div className="text-muted text-xs hidden md:block">HAMILTON, ONTARIO — BUILT ON QUALITY</div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm text-muted">
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/service-areas">SERVICE AREAS</a></li>
            <li><a href="/reviews">REVIEWS</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden md:inline-block border border-yellow-600 text-yellow-300 px-4 py-2 rounded font-bold" href="/contact">GET A QUOTE</a>
          <a className="btn-phone" href="tel:+12897752020">📞 (289) 775-2020</a>
        </div>
      </div>
    </header>
  )
}
